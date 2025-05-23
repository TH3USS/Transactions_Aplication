import { Link, useNavigate, useLocation } from 'react-router-dom';
import { clearToken, isAuthenticated, getUserRole } from '../auth';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = isAuthenticated();
  const role = getUserRole();

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  return (
    <nav>
      {role === 'user' && loggedIn && <Link to="/extract">Home</Link>}
      {role === 'user' && loggedIn && <Link to="/wallet">Carteira</Link>}      
      {role === 'admin' && loggedIn && <Link to="/upload">Upload</Link>}
      {role === 'admin' && loggedIn && <Link to="/admin">Relatório</Link>}

      {!loggedIn ? (
        location.pathname === '/login' ? (
          <Link to="/register">Cadastrar</Link>
        ) : (
          <Link to="/login">Login</Link>
        )
      ) : (
        <button onClick={logout}>Sair</button>
      )}
    </nav>
  );
}
