import { Navigate, Outlet } from "react-router-dom";
/* import { useAuth } from "./context/AuthContext";
Navigate; */

const ProtectedRoutes = ({ isAllowed, redirecTo = "/login" }) => {
  console.log(isAllowed);
  if (!isAllowed) return <Navigate to={redirecTo} replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
