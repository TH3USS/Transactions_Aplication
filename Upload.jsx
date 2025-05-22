import { useState } from 'react';
import api from '../api/api';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await api.post("/upload", formData);
    alert("Arquivo enviado!");
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
}
