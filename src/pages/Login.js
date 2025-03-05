// export default Login;
import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { loginUser } from "../services/authService";
import { FaUser, FaLock } from "react-icons/fa";
import "./../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await loginUser(username, password);
      window.location.href = "/dashboard";
    } catch (error) {
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <div className="login-container">
      {/* Columna izquierda */}
      <div className="login-left">
        <div className="login-overlay">
          <h1>GESTIÓN <br /> De Eventos</h1>
          <div className="logo-container">
            <p className="brand-logo"></p>
            <p className="brand">MEMENTO</p>
          </div>     
        </div>
      </div>

      {/* Columna derecha */}
      <div className="login-right">
        <Paper elevation={3} className="login-form">
          <h2 className="font">Iniciar Sesión</h2>
          <div className="input-container">
            <FaUser className="icon" />
            <TextField  fullWidth label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <TextField fullWidth label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="login-button font" fullWidth variant="contained"  onClick={handleLogin}>Ingresar</Button>
        </Paper>
      </div>
    </div>
  );
};

export default Login;