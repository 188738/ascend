import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Email validation using regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  // Email domain validation
  const isValidEmailDomain = (email) => {
    const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"]; // Add valid domains here
    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    // Check for empty fields
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Check email format
    if (!isValidEmail(email)) {
      setError("Invalid email format. Please enter a valid email address.");
      return;
    }

    // Check email domain
    if (!isValidEmailDomain(email)) {
      setError("Invalid email domain. Please use a valid email provider (e.g., Gmail).");
      return;
    }

    // Check password strength
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true); // Show loading state
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);

      // Redirect to main page on success
      navigate("/main");
    } catch (error) {
      console.error("Error signing up:", error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered. Please log in instead.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format. Please enter a valid email.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Use a stronger password.");
          break;
        default:
          setError("Failed to sign up. Please try again later.");
          break;
      }
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      {/* Display error messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUp;
