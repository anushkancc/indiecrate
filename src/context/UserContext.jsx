import React, { createContext, useState, useEffect } from "react";

// This creates a context to share user information across the app
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // This stores the current logged-in user's details
  const [user, setUser] = useState(null);

  // This helps to stop the page from loading too early before we check if the user is already logged in
  const [loading, setLoading] = useState(true);

  // This runs once when the app starts. It checks if there is a saved user in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Get saved user data
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // If found, set it as the current user
    }
    setLoading(false); // Done checking, now we can show the app
  }, []);

  // This function runs when a user logs in
  const login = (userData) => {
    setUser(userData); // Save user details in state
    localStorage.setItem("user", JSON.stringify(userData)); // Also save them in localStorage so they stay after reload
  };

  // This function runs when a user logs out
  const logout = () => {
    setUser(null); // Remove user details from state
    localStorage.removeItem("user"); // Also remove them from localStorage
  };

  // While we are checking localStorage, don’t show anything yet
  if (loading) {
    return null; // Can show a loading message instead if you want
  }

  // This allows other parts of the app to use the user information and login/logout functions
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
