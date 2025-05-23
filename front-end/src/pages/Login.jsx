import { useState } from "react";
import api from "../api/api";
import { saveToken } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { cpf, password });
      
      const { token, user } = res.data;

      saveToken(token);

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/extract");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Check CPF and password.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
