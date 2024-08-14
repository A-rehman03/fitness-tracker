import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleGetStartedClick = () => {
    navigate('/login');  // Redirect to the Register page
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to the Fitness Tracker!</h1>
        <p>Track your workouts, monitor your nutrition, and achieve your fitness goals.</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
      <div className="features-section">
        <div className="feature-card">
          <h2>Workout Tracker</h2>
          <p>Log your daily workouts and track your progress over time.</p>
        </div>
        <div className="feature-card">
          <h2>Nutrition Monitor</h2>
          <p>Keep track of your dietary habits and monitor your nutrition.</p>
        </div>
        <div className="feature-card">
          <h2>Goal Setting</h2>
          <p>Set your fitness goals and work towards achieving them.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
