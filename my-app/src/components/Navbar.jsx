import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/Login">Sign In</Link></li>
        {/* Conditionally render admin link based on user role */}
        {isAdmin && <li><Link to="/admin">Admin</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
