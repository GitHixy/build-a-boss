import React from "react";
import { FaDragon, FaHome, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '/boss-logo2.svg';
import "../App.css";
import MusicToggle from "./MusicToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-group">
        <img src={logo} alt="Build-a-Boss Logo" className="navbar-logo" />
        <span className="navbar-title">BaB</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link"><FaHome className="navbar-icon"/> Home</Link></li>
        <li><Link to="/about" className="navbar-link"><FaDragon className="navbar-icon"/> About</Link></li>
        <li><Link to="/register" className="navbar-link"><FaUserPlus className="navbar-icon"/> Register</Link></li>
        <li><Link to="/login" className="navbar-link"><FaSignInAlt className="navbar-icon"/> Login</Link></li>
      </ul>
      <MusicToggle src="bg-music.mp3" defaultVolume={0.30} className="music-navbar" />
    </nav>
  );
}

export default Navbar;
