import { useEffect, useState } from "react";
import api from "../api/api";

export default function UserExtract() {
  const [filtros, setFiltros] = useState({ status: "", dataInicio: "", dataFim: "" });
  const [transacoes, setTransacoes] = useState([]);

  const buscar = async () => {
    const res = await api.get("/user/extrato", { params: filtros });
    setTransacoes(res.data);
  };

  return (
    <div>
      <h2>Extrato</h2>
      <select onChange={e => setFiltros({ ...filtros, status: e.target.value })}>
        <option value="">Todos</option>
        <option value="aprovado">Aprovado</option>
        <option value="pendente">Pendente</option>
      </select>
      <button onClick={buscar}>Filtrar</button>
      <ul>
        {transacoes.map((t, i) => (
          <li key={i}>{t.description} - {t.points} pts</li>
        ))}
      </ul>
    </div>
  );
}
