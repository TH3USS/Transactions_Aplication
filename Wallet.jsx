import { useEffect, useState } from "react";
import api from "../api/api";

export default function Wallet() {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    api.get("/user/carteira").then(res => setSaldo(res.data.saldo));
  }, []);

  return <h2>Saldo de pontos aprovados: {saldo}</h2>;
}
