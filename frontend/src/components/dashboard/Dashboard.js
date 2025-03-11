import React from 'react';
import { Calendar, Clock, Utensils, Dumbbell, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  // Mock data for dashboard
  const nextPeriod = new Date();
  nextPeriod.setDate(nextPeriod.getDate() + 14);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const cycleDay = 16;
  const cycleLength = 30;
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, Sarah!</h1>
        <p>Here's your PCOS management overview</p>
      </div>
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <div className="summary-icon">
            <Calendar size={24} />
          </div>
          <div className="summary-content">
            <h3>Cycle Day</h3>
            <p className="summary-value">{cycleDay} <span>of {cycleLength}</span></p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">
            <Clock size={24} />
          </div>
          <div className="summary-content">
            <h3>Next Period</h3>
            <p className="summary-value">{formatDate(nextPeriod)}</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-grid">
        <Link to="/period-tracker" className="dashboard-card">
          <div className="card-icon">
            <Calendar size={32} />
          </div>
          <h3>Period Tracker</h3>
          <p>Log your cycle and symptoms</p>
        </Link>
        
        <Link to="/diet-plan" className="dashboard-card">
          <div className="card-icon">
            <Utensils size={32} />
          </div>
          <h3>Diet Plan</h3>
          <p>Personalized nutrition for PCOS</p>
        </Link>
        
        <Link to="/workout-plan" className="dashboard-card">
          <div className="card-icon">
            <Dumbbell size={32} />
          </div>
          <h3>Workout Plan</h3>
          <p>Exercise routines for your needs</p>
        </Link>
        
        <Link to="/community" className="dashboard-card">
          <div className="card-icon">
            <Users size={32} />
          </div>
          <h3>Community</h3>
          <p>Connect with others on the same journey</p>
        </Link>
        
        <Link to="/chatbot" className="dashboard-card">
          <div className="card-icon">
            <MessageCircle size={32} />
          </div>
          <h3>AI Assistant</h3>
          <p>Get answers to your PCOS questions</p>
        </Link>
      </div>
      
      <div className="dashboard-tips">
        <h2>Today's Tips</h2>
        <div className="tips-container">
          <div className="tip-card">
            <h4>Nutrition Tip</h4>
            <p>Try adding cinnamon to your meals. Studies show it may help regulate insulin levels.</p>
          </div>
          <div className="tip-card">
            <h4>Wellness Tip</h4>
            <p>Practice 10 minutes of mindfulness meditation to reduce stress hormones that can worsen PCOS symptoms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
