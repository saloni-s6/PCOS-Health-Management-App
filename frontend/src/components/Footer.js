import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="CycleBloom Logo" />
          <span>Cycle Bloom</span>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <a href="#tracking">Period Tracking</a>
            <a href="#insights">AI Insights</a>
            <a href="#community">Community</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="#help">Help Center</a>
            <a href="#resources">Resources</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CycleBloom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;