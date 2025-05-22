// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { getUser, logout } from '../auth';

export default function Navbar() {
  const user = getUser();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user?.role === 'admin' && <Link to="/upload">Upload</Link>}
      {user?.role === 'admin' && <Link to="/admin">Relatório</Link>}
      {user?.role === 'user' && <Link to="/extract">Extrato</Link>}
      {user?.role === 'user' && <Link to="/wallet">Carteira</Link>}
      {user ? (
        <button onClick={() => { logout(); location.href = '/login'; }}>Sair</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
