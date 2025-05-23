import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../auth';

export default function AdminRoute({ children }) {
  if (!isAuthenticated() || getUserRole() !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
}
