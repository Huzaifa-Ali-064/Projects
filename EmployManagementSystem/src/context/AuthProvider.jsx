import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage if data is missing
    const { employees, admin } = getLocalStorage();
    if (employees.length === 0 || admin.length === 0) {
      setLocalStorage(); // Populate localStorage with default data
    }

    // Fetch data and set it in state
    const localData = getLocalStorage();
    setUserData(localData);
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
