import React, { useEffect } from 'react';

function EventDetails({ onClose, title, description, poster }) {
  // Function to add the 'body-no-scroll' class to the body element
  const disableBodyScroll = () => {
    document.body.classList.add('body-no-scroll');
  };

  // Function to remove the 'body-no-scroll' class from the body element
  const enableBodyScroll = () => {
    document.body.classList.remove('body-no-scroll');
  };

  // Function to close the overlay when clicking outside it
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('event-details-overlay')) {
      onClose();
    }
  };

  // Use the useEffect hook to enable body scrolling when the component unmounts
  useEffect(() => {
    disableBodyScroll(); // Disable body scrolling when the component mounts

    return () => {
      enableBodyScroll(); // Enable body scrolling when the component unmounts (i.e., when closing the overlay)
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="event-details-overlay" onClick={handleOverlayClick}>
      <div className="event-details">
        <button onClick={onClose} className="close-button">
          &times; {/* This is the 'X' icon */}
        </button>
        <h2>{title}</h2>
        <img src={poster} alt={title} className="event-poster" />
        <p>{description}</p>
        <div className="buttons">
          
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
