// Routes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./components/Login";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Logout from "./components/Logout";
import Register from "./components/Register";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
              >
                Register
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} /> // Add Route for Logout
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;