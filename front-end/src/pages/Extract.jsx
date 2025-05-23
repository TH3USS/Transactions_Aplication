import { useEffect, useState } from "react";
import api from "../api/api";

export default function UserExtract() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExtract() {
      try {
        const res = await api.get("/user/extract");
        setTransactions(res.data);
      } catch {
        alert("Erro ao buscar extrato");
      } finally {
        setLoading(false);
      }
    }
    fetchExtract();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Extrato do Usuário</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
            <th>Pontos</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.description}</td>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.points}</td>
              <td>{t.value}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
