<<<<<<< HEAD
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
=======


import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDnfogWF0cn1nNQJ87OOZlwxIeA98Y1rzg",          
  authDomain: "bildrive-16154.firebaseapp.com",
  projectId: "bildrive-16154",
  storageBucket: "bildrive-16154.firebasestorage.app",
  messagingSenderId: "361161041011",
  appId: "1:361161041011:web:d565d89575160db4e23606",
};

const vapidKey = "YOUR_WEB_PUSH_CERTIFICATE_KEY_PAIR"; 

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

function App() {
  const [fcmToken, setFcmToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Notification.requestPermission()
      .then(permission => {
        if (permission === "granted") {
          getToken(messaging, { vapidKey })
            .then(token => {
              console.log("FCM Token:", token);
              setFcmToken(token);
            })
            .catch(err => {
              console.error("Error getting token:", err);
              setError(err.message);
            });
        } else {
          setError("Notification permission denied");
        }
      });
    
  
    onMessage(messaging, payload => {
      console.log("Message received. ", payload);
      alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Firebase Cloud Messaging Test</h1>
      {fcmToken ? (
        <>
          <p><strong>Your FCM Token:</strong></p>
          <textarea
            readOnly
            value={fcmToken}
            style={{ width: "100%", height: 150 }}
          />
          <p>Copy this token and use it in your backend to send push notifications.</p>
        </>
      ) : (
        <p>Loading token or waiting for permission...</p>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
>>>>>>> 062d788 (qulque)
  );
}

export default App;
