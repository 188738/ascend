import React, { useState } from "react";

const FraudDetection = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [transactionDetails, setTransactionDetails] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionLocation, setTransactionLocation] = useState('');
    const [alerts, setAlerts] = useState([]);
    const [result, setResult] = useState(null);

    const handleCheckFraud = () => {
        const newAlerts = [];

        // Rule 1: Check for "suspicious" keyword
        if (transactionDetails.toLowerCase().includes('suspicious')) {
            newAlerts.push('Potential Fraud Detected in transaction details.');
        }

        // Rule 2: Large transaction amount
        if (Number(transactionAmount) > 10000) {
            newAlerts.push('Large transaction amount detected. Please verify.');
        }

        // Rule 3: Unusual transaction location
        if (transactionLocation.toLowerCase() !== 'Dallas' && transactionLocation) {
            newAlerts.push('Transaction from an unusual location detected.');
        }

        // Rule 4: Simulated AI-driven alert
        if (Math.random() > 0.8) {
            newAlerts.push('AI detected a potential anomaly in the transaction.');
        }

        // Set results
        if (newAlerts.length > 0) {
            setAlerts(newAlerts);
            setResult('Potential Fraud Detected');
        } else {
            setAlerts([]);
            setResult('No Fraud Detected');
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1>Ascend by GS</h1>
                <h2>Banking Fraud Detection</h2>
            </header>

            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px'
            }}>
                <h3>Check for Fraudulent Activity</h3>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="accountNumber" style={{ display: 'block', marginBottom: '5px' }}>Account Number</label>
                    <input
                        id="accountNumber"
                        type="text"
                        placeholder="Enter Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="transactionDetails" style={{ display: 'block', marginBottom: '5px' }}>Transaction Details</label>
                    <textarea
                        id="transactionDetails"
                        placeholder="Enter transaction details..."
                        value={transactionDetails}
                        onChange={(e) => setTransactionDetails(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            height: '80px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="transactionAmount" style={{ display: 'block', marginBottom: '5px' }}>Transaction Amount ($)</label>
                    <input
                        id="transactionAmount"
                        type="number"
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="transactionLocation" style={{ display: 'block', marginBottom: '5px' }}>Transaction Location</label>
                    <input
                        id="transactionLocation"
                        type="text"
                        placeholder="Enter Transaction Location"
                        value={transactionLocation}
                        onChange={(e) => setTransactionLocation(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>

                <button
                    onClick={handleCheckFraud}
                    style={{
                        backgroundColor: '#004e8c',
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Check Fraud
                </button>

                {result && (
                    <div
                        style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: result === 'No Fraud Detected' ? '#d4edda' : '#f8d7da',
                            color: result === 'No Fraud Detected' ? '#155724' : '#721c24',
                            border: `1px solid ${result === 'No Fraud Detected' ? '#c3e6cb' : '#f5c6cb'}`,
                            borderRadius: '5px'
                        }}
                    >
                        <strong>{result}</strong>
                        {alerts.length > 0 && (
                            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                                {alerts.map((alert, index) => (
                                    <li key={index}>{alert}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FraudDetection;