import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import AdminReport from "./pages/AdminReport";
import UserExtract from "./pages/UserExtract";
import Wallet from "./pages/Wallet";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<AdminRoute><Upload /></AdminRoute>} />
        <Route path="/admin" element={<AdminRoute><AdminReport /></AdminRoute>} />
        <Route path="/extract" element={<ProtectedRoute><UserExtract /></ProtectedRoute>} />
        <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
