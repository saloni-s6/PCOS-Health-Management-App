import React from "react";
import "../styles/PreLogin.css";
import logo from "../assets/logo.png";
import heroImage from "../assets/heroImage.png";

const PreLogin = () => {
  return (
    <div className="cyclebloom-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <div className="logo">
          <img src={logo} alt="Cycle Bloom" />
          <span>Cycle Bloom</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <header className="hero">
        <h1><strong>Empower Your Cycle, One Bloom at a Time</strong></h1>
        <p>Track your cycle, log symptoms, and get AI-powered insights.</p>
        <div className="hero-buttons">
          <button className="get-started">Get Started</button>
          <button className="sign-in">Sign In</button>
        </div>
        <img src={heroImage} alt="Cycle Bloom Illustration" className="hero-image" />
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>What Can You Do with Cycle Bloom?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Track Your Cycle</h3>
            <p>Log your periods, symptoms, and mood to gain a better understanding of your cycle patterns.</p>
          </div>
          <div className="feature-card">
            <h3>Get AI Powered Insights</h3>
            <p>Receive smart predictions for your next period, ovulation, and fertility window based on advanced AI analysis.</p>
          </div>
          <div className="feature-card">
            <h3>Monitor Your Symptoms & Mood</h3>
            <p>Keep track of physical and emotional symptoms, helping you identify trends and potential health concerns.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Health Tips</h3>
            <p>Get expert-backed advice tailored to your cycle, lifestyle, and wellness needs.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-logo"> 
          <img src={logo} alt="Cycle Bloom" />
          <p>Know your body. Own your health.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>APP</h4>
            <p>CycleBloom for Tracking</p>
            <p>CycleBloom for Health Insights</p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Affiliates</p>
          </div>
          <div>
            <h4>CONTENT</h4>
            <p>Health Library</p>
            <p>Editorial Standards</p>
            <p>Tools</p>
          </div>
          <div>
            <h4>LEGAL</h4>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreLogin;
