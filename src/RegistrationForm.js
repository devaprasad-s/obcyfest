// RegistrationForm.js

import React from "react";

function RegistrationForm({ onClose }) {
  // Function to handle the "Close" button click
  const handleRegistrationClose = () => {
    onClose();
  };
  const handleRegistrationSubmit = () => {
    {
    }
  };

  return (
    <div className="registration-overlay">
      <div className="registration-form">
        <button onClick={handleRegistrationClose} className="close-button">
          &times; {/* This is the 'X' icon */}
        </button>
        {/* Add your registration form fields and content here */}
        <h2>Registration Form</h2>
        <br></br>
        {/* Example form fields */}
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            required=""
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Semester"
            required=""
          />
          <label for="semester" class="form__label">
            Semester (1,3,5 or 7)
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Email"
            required=""
          />
          <label for="email" class="form__label">
            Email
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Phone"
            required=""
          />
          <label for="phone" class="form__label">
            Phone
          </label>
        </div>
        <br></br>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Team Name"
            required=""
          />
          <label for="team" class="form__label">
            Team Name
          </label>
        </div>
      
        <br></br>
        <button onClick={handleRegistrationSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
