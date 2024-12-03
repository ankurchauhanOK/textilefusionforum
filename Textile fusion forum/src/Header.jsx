import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Textile Fusion Forum 2025</h1>
        <p>Weaving the Future of the Textile Industry</p>
        <p>11th-13th April 2025 | NSIC Ground Okhla, Delhi</p>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#highlights">Event Highlights</a></li>
          <li><a href="#register">Register</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
