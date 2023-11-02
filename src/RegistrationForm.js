// RegistrationForm.js

import React, { useState } from "react";
import axios from "axios";
import Select from 'react-select'

function getCurrentDate() {
  const currentDate = new Date();

  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based.
  const yyyy = currentDate.getFullYear();

  return `${dd} ${mm} ${yyyy}`;
}

function RegistrationForm({ onClose }) {
  const [currentDate, setCurrentDate] = useState('');
  const [data, setData] = useState();
  const [username, setUsername] = useState("");
  const [sem, setSem] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  // Function to handle the "Close" button click
  const handleRegistrationClose = () => {
    onClose();
  };
  const handleRegistrationSubmit = () => {
    {
    }
  };

  const options = [
    { value: 'S7', label: 'S7' },
    { value: 'S5', label: 'S5' },
    { value: 'S3', label: 'S3' },
    { value: 'S1', label: 'S1' }
  ]

  function getCurrentDate() {
    const currentDate = new Date();
  
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based.
    const yyyy = currentDate.getFullYear();
  setCurrentDate(`${dd} ${mm} ${yyyy}`)
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(
        "https://sheet.best/api/sheets/435458b8-386d-411c-9f56-28974c28908b",
        {
          Name: username,
          Email:email,
          Semester:sem,
          Mobile_No:mobileNo
        }
      );

      console.log("Data sent successfully!", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };



  return (
    <div className="registration-overlay">
      <div className="registration-form">
        <button className="close-button" onClick={handleRegistrationClose}>
          &times; {/* This is the 'X' icon */}
        </button>
        {/* Add your registration form fields and content here */}
        <h2>Registration Form</h2>
        <br></br>
        {/* Example form fields */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJm6BDvYxb5_JU4_Cjh7lPlHwJ9BqxjZW69VaSYpKo0cRZYw/viewform?embedded=true" width="100%" height="1535" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
}

export default RegistrationForm;
