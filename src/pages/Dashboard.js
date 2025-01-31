import React from "react";
import App from "../App";
import { Button } from "@mui/material";
import { FaSignOutAlt } from "react-icons/fa";


const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
        <Button variant="contained" color="secondary" className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Cerrar Sesión
        </Button>
      <App />
    </div>
  );
};

export default Dashboard;
