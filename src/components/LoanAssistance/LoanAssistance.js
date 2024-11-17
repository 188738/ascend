import React, { useState } from "react";

const LoanAssistance = () => {
  const [formData, setFormData] = useState({
    annualRevenue: "",
    loanAmount: "",
  });

  const [estimate, setEstimate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateApprovalPercentage = (revenue, loanAmount) => {
    const revenueToLoanRatio = revenue / loanAmount;
    
    // More realistic approval rate calculation
    let approvalRate;
    
    if (revenueToLoanRatio >= 10) {
      // Very safe loan - revenue is 10x or more than loan amount
      approvalRate = 95;
    } else if (revenueToLoanRatio >= 5) {
      // Strong position - revenue is 5-10x loan amount
      approvalRate = 85;
    } else if (revenueToLoanRatio >= 2) {
      // Good position - revenue is 2-5x loan amount
      approvalRate = 75;
    } else if (revenueToLoanRatio >= 1) {
      // Moderate risk - revenue equals or slightly exceeds loan
      approvalRate = 60;
    } else if (revenueToLoanRatio >= 0.5) {
      // Higher risk - loan is up to 2x revenue
      approvalRate = 40;
    } else if (revenueToLoanRatio >= 0.25) {
      // Very high risk - loan is 2-4x revenue
      approvalRate = 20;
    } else {
      // Extremely high risk - loan is more than 4x revenue
      approvalRate = 5;
    }
    
    return approvalRate.toFixed(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.annualRevenue && formData.loanAmount) {
      const revenue = parseFloat(formData.annualRevenue);
      const loanAmount = parseFloat(formData.loanAmount);
      
      if (revenue <= 0 || loanAmount <= 0) {
        setEstimate({
          message: "Please enter valid positive numbers.",
          type: "error"
        });
        return;
      }

      const approvalPercentage = calculateApprovalPercentage(revenue, loanAmount);
      setEstimate({
        message: `${approvalPercentage}%`,
        type: "success",
        ratio: (revenue / loanAmount).toFixed(2)
      });
    }
  };

  /*return (
    <div className="w-full max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Loan Estimate Calculator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium mb-1">
            Annual Revenue ($)
          </label>
          <input
            type="number"
            name="annualRevenue"
            value={formData.annualRevenue}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter your annual revenue"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium mb-1">
            Loan Amount Requested ($)
          </label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            placeholder="Enter desired loan amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Estimate
        </button>
      </form>

      {estimate && (
        <div className={`mt-6 p-4 rounded-md ${
          estimate.type === 'error' ? 'bg-red-50' : 'bg-green-50'
        }`}>
          <span className={`font-medium ${
            estimate.type === 'error' ? 'text-red-800' : 'text-green-800'
          }`}>
            {estimate.type === 'error' ? 'Error: ' : 'Approval Rate: '}
            {estimate.message}
          </span>
          {estimate.type === 'success' && (
            <p className="text-sm text-gray-600 mt-2">
              Revenue to Loan Ratio: {estimate.ratio}x
            </p>
          )}
        </div>
      )}
    </div>
  );
};
*/

return (
  <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
    <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>Loan Estimate Calculator</h2>
    
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", fontWeight: "medium", marginBottom: "5px" }}>
          Annual Revenue ($):
          <input
            type="number"
            name="annualRevenue"
            value={formData.annualRevenue}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0", border: "1px solid #ccc", borderRadius: "4px" }}
            placeholder="Enter your annual revenue"
          />
        </label>
      </div>
      
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", fontWeight: "medium", marginBottom: "5px" }}>
          Loan Amount Requested ($):
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0", border: "1px solid #ccc", borderRadius: "4px" }}
            placeholder="Enter the loan amount requested"
          />
        </label>
      </div>
      
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Get Estimate
      </button>
    </form>
    
    {estimate && <p style={{ marginTop: "20px", fontSize: "16px", color: estimate.type === "success" ? "green" : "red" }}>{estimate.message}</p>}
  </div>
);
}

export default LoanAssistance;