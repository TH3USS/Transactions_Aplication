import { useState } from "react";
import api from "../api/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Selecione um arquivo");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Upload realizado com sucesso");
    } catch {
      setMessage("Erro ao fazer upload");
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Enviar planilha</button>
      {message && <p>{message}</p>}
    </form>
  );
}
