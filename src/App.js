import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FraudDetection from "./components/FraudDetection/FraudDetection";
import LoanAssistance from "./components/LoanAssistance/LoanAssistance";
import PaymentSolutions from "./components/PaymentSolutions/PaymentSolutions";
import HomePage from "./HomePage";
import Signup from "./SignUp";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the user is logged in
  const [started, setStarted] = useState(false); // Track if "Get Started" is clicked

  // Handle authentication (mock example)
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const ProtectedLink = ({ to, children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
      // Restrict access only on the login or signup pages
      if ((location.pathname === "/login" || location.pathname === "/signup") && !isAuthenticated) {
        e.preventDefault(); // Prevent navigation
        alert("You must log in or sign up first!");
        navigate("/login"); // Redirect to login page
      }
    };

    return (
      <li>
        <Link to={to} onClick={handleClick}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <Router>
      <div className="App">
        {!started ? (
          // Render HomePage if "Get Started" not clicked
          <HomePage onStart={() => setStarted(true)} />
        ) : (
          // Render the rest of the app after "Get Started"
          <>
            {/* Navbar */}
            <nav className="navbar reddit-sans-navbar">
              <a href="/" className="logo roboto-slab-logo">
                <span className="logo-icon">▲</span> Ascend
              </a>
              <ul>
                <ProtectedLink to="/dashboard">Dashboard</ProtectedLink>
                <ProtectedLink to="/fraud-detection">Fraud Detection</ProtectedLink>
                <ProtectedLink to="/loan-assistance">Loan Assistance</ProtectedLink>
                <ProtectedLink to="/payment-solutions">Payment Solutions</ProtectedLink>
                <li>
                  {isAuthenticated ? (
                    <button onClick={handleLogout} className="logout-button">
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
                {!isAuthenticated && (
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                )}
              </ul>
            </nav>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route
                path="/login"
                element={<Login onLogin={handleLogin} />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/fraud-detection" element={<FraudDetection />} />
              <Route path="/loan-assistance" element={<LoanAssistance />} />
              <Route path="/payment-solutions" element={<PaymentSolutions />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
