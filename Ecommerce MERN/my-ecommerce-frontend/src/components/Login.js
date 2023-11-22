// src/components/Login.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { login, logout } from "../redux/slices/authSlice"; // Import login and logout actions

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use useSelector to access the loggedIn state from the store
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  // Use useDispatch to dispatch login and logout actions
  const dispatch = useDispatch();

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    if (storedLoggedIn === "true") {
      dispatch(login()); // Dispatch login action
    }
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      dispatch(login()); // Dispatch login action
      localStorage.setItem("loggedIn", "true");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem("loggedIn");
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <p>Welcome, you are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
