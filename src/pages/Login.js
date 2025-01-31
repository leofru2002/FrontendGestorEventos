import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { loginUser } from "../services/authService";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const events = [
  { title: "", image: "https://www.digital360iberia.com/wp-content/uploads/2022/11/Events.jpg" },
  { title: "", image: "https://www.latevaweb.com/diseno-web/webs-para-eventos.jpg" },
  { title: "", image: "https://veronahome.cl/wp-content/uploads/2022/04/Blog-Verona-HD-Imagenes-tipo-Banner-800x400.jpg" }
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLogin = async () => {
    try {
      await loginUser(username, password);
      window.location.href = "/dashboard";
    } catch (error) {
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 10000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
      <div className="carousel">
        <img src={events[currentIndex].image} alt={events[currentIndex].title} className="carousel-image" />
        <div className="overlay">
          <h2>{events[currentIndex].title}</h2>
        </div>
      </div>
      
      <Paper elevation={3} className="login-form">
        <Typography variant="h5" align="center">Iniciar Sesión</Typography>
        <div className="input-container">
          <FaUser className="icon" />
          <TextField fullWidth label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <TextField fullWidth label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button fullWidth variant="contained" color="primary" onClick={handleLogin} className="login-button">Ingresar</Button>
      </Paper>
    </div>
  );
};

export default Login;
