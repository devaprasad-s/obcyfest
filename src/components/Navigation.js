// Navigation.js

import React from "react";
import logo from "../assets/images/gld obcydians.webp"; // Import your logo image



function Navigation({scores}) {
  var sem=-1;
  return (
    <nav className="navbar">
     
        <div className="logo" >
          <a href="#home"><img src={logo}  alt="Obcyfest Logo" /></a>
        
          
        
        
      </div>
      <div className="score-card">
      
        {scores.map((score, index) => (
          <div className="score" key={index}>
            S{sem=sem+2}: {score}
          </div>
          
        ))}
        </div>
        
      
      
    </nav>
  );
}

export default Navigation;
