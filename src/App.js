import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FraudDetection from "./components/FraudDetection/FraudDetection";
import LoanAssistance from "./components/LoanAssistance/LoanAssistance";
import PaymentSolutions from "./components/PaymentSolutions/PaymentSolutions";
import Signup from "./SignUp";
import Login from "./Login"; // Import the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for each component */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* Add login route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/loan-assistance" element={<LoanAssistance />} />
          <Route path="/payment-solutions" element={<PaymentSolutions />} />
          <Route path="/signup" element={<Signup />} /> {/* Add signup route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
