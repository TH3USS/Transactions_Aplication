import { useEffect, useState } from "react";
import api from "../api/api";

export default function AdminReport() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      try {
        const res = await api.get("/admin/report");
        setTransactions(res.data);
      } catch (e) {
        alert("Erro ao buscar relatório");
      } finally {
        setLoading(false);
      }
    }
    fetchReport();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Relatório Admin</h1>
      <table border="1">
        <thead>
          <tr>
            <th>CPF</th>
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
              <td>{t.cpf}</td>
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
