import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower Your Cycle, One Bloom at a Time</h1>
        <p>Track your cycle, log symptoms, and get AI-powered insights.</p>
        <div className="hero-buttons">
          <Link to="/register" className="btn">Get Started</Link>
          <Link to="/login" className="btn">Sign In</Link>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/images/hero-image.png" 
          alt="PCOS Awareness Illustration"
        />
      </div>
    </section>
  );
};

export default Hero;