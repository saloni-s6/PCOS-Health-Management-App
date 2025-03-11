import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import PeriodTracker from './components/periodTracker/PeriodTracker';
import DietPlan from './components/dietPlan/DietPlan';
import WorkoutPlan from './components/workoutPlan/WorkoutPlan';
import Community from './components/community/Community';
import Chatbot from './components/chatbot/Chatbot';
import './styles/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <AuthWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
    </Router>
  );
}

function AuthWrapper({ isLoggedIn, setIsLoggedIn, handleLogin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); // ✅ Redirect to home on logout
  };

  return (
    <div className="app-container">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Hero /><Features /></>} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register onLogin={() => setIsLoggedIn(true)} />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
