// src/components/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { getUser } from "../auth";

export default function AdminRoute({ children }) {
  const user = getUser();
  return user && user.role === "admin" ? children : <Navigate to="/" />;
}
