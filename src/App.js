import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FraudDetection from "./components/FraudDetection/FraudDetection";
import LoanAssistance from "./components/LoanAssistance/LoanAssistance";
import PaymentSolutions from "./components/PaymentSolutions/PaymentSolutions";
import Login from './Login'
import Signup from "./SignUp";
import AuthState from "./AuthState";
import Logout from "./Logout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "FraudDetection":
        return <FraudDetection />;
      case "LoanAssistance":
        return <LoanAssistance />;
      case "PaymentSolutions":
        return <PaymentSolutions />;
      case "SignUp":
        return <Signup />;
      default:
        return <Dashboard />;

    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActiveComponent("Dashboard")}>Dashboard</li>
          <li onClick={() => setActiveComponent("FraudDetection")}>Fraud Detection</li>
          <li onClick={() => setActiveComponent("LoanAssistance")}>Loan Assistance</li>
          <li onClick={() => setActiveComponent("PaymentSolutions")}>Payment Solutions</li>
          <li onClick={() => setActiveComponent("SignUp")}>Login</li>
        </ul>
      </nav>
      <div className="content">{renderComponent()}</div>
    </div>
  );
}

export default App;
