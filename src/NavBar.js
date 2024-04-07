import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
    return (
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          LitDiversity
        </Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search for books..." />
        </div>
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/book-of-the-day">Book of the Day</Link>
          <Link to="/recommendations">Recommendations</Link>
        </div>
        <div className="navbar-profile">
          <img src="profile-placeholder.png" alt="Profile" className="navbar-profile-image" />
        </div>
      </div>
    );
  };

export default NavBar;
