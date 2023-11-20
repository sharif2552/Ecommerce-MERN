import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./../components/Login";
import Logout from "./../components/Logout";
import Register from "./../components/Register";

const Authenticationpage = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to our Ecommerce Website!</h1>
        <h1>React Firebase Authentication</h1>

        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};



export default Authenticationpage;
