import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PrivateRoutes() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/auth/log-in" replace />;
}

export default PrivateRoutes;
