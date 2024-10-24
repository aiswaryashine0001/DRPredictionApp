import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginSignup.css';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? 'http://localhost:5000/signup' : 'http://localhost:5000/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);

      // Redirect to Image Upload page only after successful login
      if (!isSignup && response.ok) {
        navigate('/image-upload'); // Redirect to Image Upload page on successful login
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">{isSignup ? "Signup" : "Login"}</button>
      </form>
      <p>{message}</p>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Switch to Login" : "Switch to Signup"}
      </button>
    </div>
  );
};

export default LoginSignup;
