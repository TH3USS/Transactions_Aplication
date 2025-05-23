import { useEffect, useState } from "react";
import api from "../api/api";

export default function AdminReport() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    cpf: "",
    description: "",
    status: "",
    startDate: "",
    endDate: "",
    minValue: "",
    maxValue: ""
  });

  const fetchReport = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      const res = await api.get(`/admin/report?${queryParams.toString()}`);
      setTransactions(res.data);
    } catch (error) {
      console.error("Erro ao buscar relatório:", error);
      alert("Erro ao buscar relatório");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReport();
  };

  return (
    <div className="container">
      <h1>Relatório</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "8px", maxWidth: "400px", marginBottom: "20px" }}>
        <input name="cpf" placeholder="CPF" value={filters.cpf} onChange={handleChange} />
        <input name="description" placeholder="Descrição do Produto" value={filters.description} onChange={handleChange} />
        
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">Todos os Status</option>
          <option value="approved">Aprovado</option>
          <option value="pending">Pendente</option>
          <option value="rejected">Rejeitado</option>
        </select>

        <label>
          Data Início:
          <input type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
        </label>

        <label>
          Data Fim:
          <input type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
        </label>

        <input type="number" name="minValue" placeholder="Valor mínimo" value={filters.minValue} onChange={handleChange} />
        <input type="number" name="maxValue" placeholder="Valor máximo" value={filters.maxValue} onChange={handleChange} />

        <button type="submit">Filtrar</button>
      </form>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table border="1" cellPadding="6">
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
            {transactions.map((t) => (
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
      )}
    </div>
  );
}
