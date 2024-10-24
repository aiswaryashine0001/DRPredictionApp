// src/main.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import backgroundJpg from './assets/backgrounds.jpg';  // Importing the JPG file
import './main.css';  // Import the CSS file

const Main = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const style = {
    backgroundImage: `url(${backgroundJpg})`,  // Dynamically load the imported JPG
    backgroundSize: 'cover',  // Ensure the background covers the whole area
    backgroundRepeat: 'no-repeat',  // Prevent repeating the background
    backgroundPosition: 'center',  // Center the image
    width: '100vw',  // Full viewport width
    height: '100vh',  // Full viewport height for responsiveness
    margin: '0',  // Ensure no margin
    display: 'flex',  // Use flexbox for positioning
    flexDirection: 'column',  // Stack items vertically
    justifyContent: 'center',  // Center horizontally
    alignItems: 'center',  // Center vertically
  };

  const handleButtonClick = () => {
    navigate('/login-signup'); // Navigate to the Login/Signup page
  };

  return (
    <div style={style}>
      <h1>DIABETIC<br/>RETINOPATHY</h1>
      <button className="get-started-button" onClick={handleButtonClick}>Get Started</button> {/* Button added here */}
    </div>
  );
};

export default Main;