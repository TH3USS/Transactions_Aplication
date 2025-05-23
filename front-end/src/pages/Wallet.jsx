import { useEffect, useState } from "react";
import api from "../api/api";

export default function Wallet() {
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPoints() {
      try {
        
        const res = await api.get("/user/wallet");
        console.log("Carteira:", res.data);
        setPoints(res.data.points);
      } catch {
        alert("Erro ao buscar carteira");
      } finally {
        setLoading(false);
      }
    }
    fetchPoints();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Carteira de Pontos</h1>
      <p>Pontos aprovados: {points}</p>
    </div>
  );
}
