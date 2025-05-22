import { useState } from "react";
import api from "../api/api";
import { saveToken } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { cpf, password });
    saveToken(res.data.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
