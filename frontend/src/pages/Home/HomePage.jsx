import React from 'react';
import './HomePage.css';

const home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to the PCOS Health Management App</h1>
        <p>Track your health, manage your symptoms, and stay informed with personalized insights.</p>
        <a href="/login" className="cta-btn">Get Started</a>
      </header>

      <section className="features">
        <h2>App Features</h2>
        <ul>
          <li>Track Symptoms</li>
          <li>Monitor Diet & Exercise</li>
          <li>View Health Reports</li>
          <li>Personalized Insights</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 PCOS Health Management</p>
      </footer>
    </div>
  );
};

export default home;
