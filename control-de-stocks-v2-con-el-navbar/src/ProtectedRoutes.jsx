import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
Navigate;

const ProtectedRoutes = () => {
  const { user, rol, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
