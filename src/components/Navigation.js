// Navigation.js

import React from "react";
import logo from "../assets/images/gld obcydians.png"; // Import your logo image
function scrollToEvents() {
  const eventsSection = document.getElementById("events"); // Get the events section by ID
  eventsSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the events section smoothly
}
function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Obcyfest Logo" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#events" onClick={scrollToEvents}>
            Events
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
