// src/components/Register.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import auth object

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div className="max-w-md border border-red-500 text-center p-10 flex flex-col bg-">
      <h2 className="text-red-500  text-center text-3xl p-5">Register</h2>
      <form
        className="w-full flex flex-col space-y-3 justify-start border border-red-400"
        onSubmit={handleRegister}
      >
        <label>
          Email:
          <input
            className=" bg-slate-500 text-white w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className=" bg-slate-500 text-white w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="border border-green-300 mx-5">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
