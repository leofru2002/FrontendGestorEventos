import axios from "axios";

const API_BASE_URL = "https://3h9gvbz1ee.execute-api.us-east-1.amazonaws.com"; // Reemplaza con la URL de tu API Gateway

export const registerUser = async (username, password) => {
  return axios.post(`${API_BASE_URL}/register`, { username, password });
};

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const verifyToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) return { valid: false };

  try {
    await axios.get(`${API_BASE_URL}/verify`, {
      headers: { Authorization: `Bearer ${token}` }, // 🔥 Ahora envía "Bearer <token>"
    });
    return { valid: true };
  } catch {
    localStorage.removeItem("token"); // Elimina token si falla la validación
    return { valid: false };
  }
};
