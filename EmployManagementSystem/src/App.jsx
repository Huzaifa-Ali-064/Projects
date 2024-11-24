import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("This is Admin");
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");

      console.log("This is User");
    } else {
      alert("Invalid Cradiential");
    }
  };
  const data = useContext(AuthContext);
  // console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
};

export default App;
