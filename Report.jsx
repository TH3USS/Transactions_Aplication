import { useEffect, useState } from "react";
import api from "../api/api";

export default function AdminReport() {
  const [filtros, setFiltros] = useState({ cpf: "", status: "", produto: "", dataInicio: "", dataFim: "", valorMin: "", valorMax: "" });
  const [transacoes, setTransacoes] = useState([]);

  const buscar = async () => {
    const res = await api.get("/admin/transacoes", { params: filtros });
    setTransacoes(res.data);
  };

  return (
    <div>
      <h2>Relatório Administrativo</h2>
      <input placeholder="CPF" onChange={e => setFiltros({ ...filtros, cpf: e.target.value })} />
      {/* Filtros restantes aqui */}
      <button onClick={buscar}>Filtrar</button>
      <ul>
        {transacoes.map((t, i) => (
          <li key={i}>{t.description} - {t.status} - {t.points} pts</li>
        ))}
      </ul>
    </div>
  );
}
