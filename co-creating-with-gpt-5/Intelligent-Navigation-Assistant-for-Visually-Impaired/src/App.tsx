import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { JourneyPlanner } from './pages/JourneyPlanner';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Mock login function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  // Mock logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/journey-planner" element={<JourneyPlanner />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}