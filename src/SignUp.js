import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success feedback
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Helper to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear error messages
    setSuccess(""); // Clear success messages

    // Validate email format
    if (!isValidEmail(email)) {
      setError("Invalid email format. Please enter a valid email address.");
      return;
    }

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    setLoading(true); // Set loading state

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user.email);
      setEmail("");
      setPassword("");
      setSuccess("Signup successful! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect to dashboard after success
    } catch (error) {
      console.error("Error signing up:", error.message);

      // Handle Firebase errors
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered in the system. Please log in.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format. Please enter a valid email address.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Use at least 6 characters.");
          break;
        default:
          setError("An unknown error occurred. Please try again later.");
          break;
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSignup}>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error messages */}
      {success && <p style={{ color: "green" }}>{success}</p>} {/* Display success messages */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading} // Disable input during loading
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading} // Disable input during loading
      />
      <button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Signup"}
      </button>
    </form>
  );
};

export default Signup;
