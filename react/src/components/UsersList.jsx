import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

const addUser = async (newUser) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (!res.ok) throw new Error("Failed to add user");
  return res.json();
};

export default function Users() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {

      queryClient.invalidateQueries(["users"]);
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>

      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Adding..." : "Add User"}
        </button>
      </form>

      {mutation.isError && <p>Error adding user: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
}
