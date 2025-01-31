import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../services/authService";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token") && verifyToken();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
