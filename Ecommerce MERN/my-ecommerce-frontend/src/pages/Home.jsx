import React from 'react';
import Login from './../components/Login';
import Logout from './../components/Logout';
import Register from './../components/Register';

const Home = () => {
    return (
      <div>
        <h1>Welcome to our Ecommerce Website!</h1>
        <h1>React Firebase Authentication</h1>
        <Login />
        <Logout />
        <Register />
      </div>
    );
};

export default Home;

