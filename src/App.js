import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FraudDetection from "./components/FraudDetection/FraudDetection";
import LoanAssistance from "./components/LoanAssistance/LoanAssistance";
import PaymentSolutions from "./components/PaymentSolutions/PaymentSolutions";
import Signup from "./SignUp";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
  <a href="/" className="logo">
    <span className="logo-icon">▲</span> Ascend
  </a> {/* Logo */}
  <ul>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/fraud-detection">Fraud Detection</Link>
    </li>
    <li>
      <Link to="/loan-assistance">Loan Assistance</Link>
    </li>
    <li>
      <Link to="/payment-solutions">Payment Solutions</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
  </ul>
</nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/loan-assistance" element={<LoanAssistance />} />
          <Route path="/payment-solutions" element={<PaymentSolutions />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
