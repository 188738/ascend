import React from "react";
import './Dashboard.css'
const Dashboard = () => {
  return (
    
    <div className="Dashboard">

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Ascend GS</h1>
          <p>Empowering small businesses with financial insights.</p>
        </header>

        <section className="content"> 
          <div className="card">
            <h2>Cash Flow</h2>
            <p>$12,345</p>
          </div>
          <div className="card">
            <h2>Receivables</h2>
            <p>$8,500</p>
          </div>
          <div className="card">
            <h2>Expenses</h2>
            <p>$4,200</p>
          </div>
          <div className="card">
            <h2>Loan Status</h2>
            <p>In Progress</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

