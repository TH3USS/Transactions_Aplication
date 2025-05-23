import { useEffect, useState } from "react";
import api from "../api/api";

export default function UserExtract() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: ""
  });

  const fetchExtract = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) query.append(key, value);
      });

      const res = await api.get(`/user/extract?${query.toString()}`);
      setTransactions(res.data);
    } catch {
      alert("Error fetching extract");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExtract();
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExtract();
  };

  return (
    <div className="container">
      <h1>Extrato do Usuário</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "400px", marginBottom: "20px" }}>
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">Todos os status</option>
          <option value="approved">Aprovado</option>
          <option value="pending">Pendente</option>
          <option value="rejected">Rejeitado</option>
        </select>

        <label>
          Início:
          <input type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
        </label>

        <label>
          Fim:
          <input type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
        </label>

        <button type="submit">Filtrar</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
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
            {transactions.map((t) => (
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
      )}
    </div>
  );
}
