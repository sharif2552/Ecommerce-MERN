// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          My Shop
        </Link>

        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
