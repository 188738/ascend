import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Create a context for the authentication state
export const AuthContext = createContext();

// AuthProvider component to provide authentication state to the entire app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the listener for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User is logged in:", user);
      } else {
        setCurrentUser(null);
        console.log("User is logged out");
      }
      setLoading(false); // Stop loading once auth state is determined
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
};
