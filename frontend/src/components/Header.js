import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>Fitness Tracker</h1>
    </div>
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default Header;
