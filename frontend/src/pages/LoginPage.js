import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling
import axios from 'axios'; // Import axios for making API requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error messages
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('/api/auth/login', { email, password });
      if (response.status === 200) {
        // Redirect to dashboard or another page on successful login
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
    </div>
  );
};

export default LoginPage;
