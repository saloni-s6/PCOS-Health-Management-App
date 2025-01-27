import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="CycleBloom" className='logo-img' />
      </div>

      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tracker">Tracker</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <Link to="/signup" className="signup-btn">Sign Up</Link>
        <Link to="/login" className="login-btn">Log In</Link>
      </div>
    </header>
  );
};

export default Header;
