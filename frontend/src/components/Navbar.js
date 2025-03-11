import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn = false, onLogout = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {!isLoggedIn ? (
          <>
            <div className="nav-links desktop-links">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </div>
            <Link to="/" className="logo">
              <img src="/images/logo.png" alt="CycleBloom Logo" />
              <span>Cycle Bloom</span>
            </Link>
            <div className="nav-links desktop-links">
              <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </div>
            <div className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="logo">
              <img src="/images/logo.png" alt="CycleBloom Logo" />
              <span>Cycle Bloom</span>
            </Link>
            <div className="nav-links desktop-links">
              <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
              <Link to="/period-tracker" className={location.pathname === '/period-tracker' ? 'active' : ''}>Period Tracker</Link>
              <Link to="/diet-plan" className={location.pathname === '/diet-plan' ? 'active' : ''}>Diet Plan</Link>
              <Link to="/workout-plan" className={location.pathname === '/workout-plan' ? 'active' : ''}>Workout Plan</Link>
              <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>Community</Link>
              <Link to="/chatbot" className={location.pathname === '/chatbot' ? 'active' : ''}>AI Assistant</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
            <div className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {!isLoggedIn ? (
            <>
              <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/features" onClick={toggleMenu}>Features</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              <Link to="/login" onClick={toggleMenu} className="mobile-login-btn">Login</Link>
              <Link to="/register" onClick={toggleMenu} className="mobile-signup-btn">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
              <Link to="/period-tracker" onClick={toggleMenu}>Period Tracker</Link>
              <Link to="/diet-plan" onClick={toggleMenu}>Diet Plan</Link>
              <Link to="/workout-plan" onClick={toggleMenu}>Workout Plan</Link>
              <Link to="/community" onClick={toggleMenu}>Community</Link>
              <Link to="/chatbot" onClick={toggleMenu}>AI Assistant</Link>
              <button onClick={() => { toggleMenu(); handleLogout(); }} className="mobile-logout-btn">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
