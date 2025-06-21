import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersList from "./components/UsersList";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "2rem" }}>
        <h1> Users from API</h1>
        <UsersList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
