import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { registerUser } from "../services/authService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser(username, password);
      alert("Registro exitoso. Ahora inicia sesión.");
      window.location.href = "/login";
    } catch (error) {
      alert("Error en el registro.");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" align="center">Registro de Usuario</Typography>
      <TextField fullWidth label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField fullWidth label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" color="primary" onClick={handleRegister}>Registrarse</Button>
    </Paper>
  );
};

export default Register;
