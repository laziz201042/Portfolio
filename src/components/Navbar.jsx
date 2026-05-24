import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">L.A.A</div>
      <ul>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#gallery">Gallery</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </nav>
  );
}

export default Navbar;