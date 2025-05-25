import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; 
import PhysicalCleansing from './pages/PhysicalCleansing';
import MentalCleansing from './pages/MentalCleansing';
import SpiritualCleansing from './pages/SpiritualCleansing'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function AppContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Login veya Register sayfasındaysak Navbar gösterme
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbar && (
        <Navbar textColor="black" isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physical-cleansing" element={<PhysicalCleansing isLoggedIn={isLoggedIn} />} />
        <Route path="/mental-cleansing" element={<MentalCleansing isLoggedIn={isLoggedIn} />} />
        <Route path="/spiritual-cleansing" element={<SpiritualCleansing isLoggedIn={isLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;