import React, { useState } from "react";
import "./PaymentSolutions.css";

const PaymentSolutions = () => {
  const [payments, setPayments] = useState([
    { id: 1, vendor: "ABC Supplies", amount: 500, date: "2024-11-20", status: "Paid" },
    { id: 2, vendor: "XYZ Services", amount: 750, date: "2024-11-25", status: "Pending" },
  ]);

  const [formData, setFormData] = useState({
    vendor: "",
    amount: "",
    date: "",
  });

  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.vendor || !formData.amount || !formData.date) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }

    setError("");

    // Add new payment
    setPayments([
      ...payments,
      {
        id: payments.length + 1,
        vendor: formData.vendor,
        amount: parseFloat(formData.amount),
        date: formData.date,
        status: "Pending",
      },
    ]);

    // Clear form
    setFormData({ vendor: "", amount: "", date: "" });
  };

  return (
    <div className="PaymentSolutions">
      <header>
        <h1>Payment Solutions</h1>
        <p>Manage vendor payments and track payment schedules.</p>
      </header>

      {/* Payment Table */}
      <section>
        <h2>Payment Records</h2>
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.vendor}</td>
                <td>${payment.amount.toFixed(2)}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Add Payment Form */}
      <section>
        <h2>Add New Payment</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="vendor"
            placeholder="Vendor Name"
            value={formData.vendor}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Add Payment</button>
        </form>
      </section>
    </div>
  );
};

export default PaymentSolutions;
