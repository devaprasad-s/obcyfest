// Navigation.js

import React from "react";
import logo from "../assets/images/gld obcydians.webp"; // Import your logo image

function Navigation() {
  return (
    <nav className="navbar">
     
        <div className="logo" >
          <a href="#home"><img src={logo}  alt="Obcyfest Logo" /></a>
        
      </div>
    </nav>
  );
}

export default Navigation;
