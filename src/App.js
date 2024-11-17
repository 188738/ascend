import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FraudDetection from "./components/FraudDetection/FraudDetection";
import LoanAssistance from "./components/LoanAssistance/LoanAssistance";
import PaymentSolutions from "./components/PaymentSolutions/PaymentSolutions";
import Signup from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for each component */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/loan-assistance" element={<LoanAssistance />} />
          <Route path="/payment-solutions" element={<PaymentSolutions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
