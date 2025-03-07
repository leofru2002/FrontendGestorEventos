import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../services/authService";

const ProtectedRoute = () => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await verifyToken();
      setIsValid(result.valid);
    };
    checkAuth();
  }, []);

  if (isValid === null) return <div>Cargando...</div>; // Spinner si quieres
  return isValid ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
