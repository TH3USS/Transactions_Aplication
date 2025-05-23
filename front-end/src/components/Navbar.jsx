import { Link, useNavigate } from 'react-router-dom';
import { clearToken, isAuthenticated, getUserRole } from '../auth';

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const role = getUserRole();

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  return (
    <nav>
      {role === 'user' && loggedIn && <Link to="/wallet">Home</Link>}
      {role === 'user' && loggedIn && <Link to="/extract">Extrato</Link>}
      {role === 'admin' && <Link to="/upload">Upload</Link>}
      {role === 'admin' && <Link to="/admin">Relatório Admin</Link>}
      {!loggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={logout}>Sair</button>
      )}
    </nav>
  );
}
