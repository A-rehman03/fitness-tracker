import React from 'react';
import './DashboardPage.css'; // Import the CSS file for styling

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Track your progress, view your stats, and manage your account from here.</p>
        {/* Add more content or components as needed */}
      </main>
    </div>
  );
};

export default DashboardPage;
