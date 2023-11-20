// src/components/Logout.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import auth object

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
