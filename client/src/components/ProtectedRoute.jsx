

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/User.context";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(AuthContext);

  if (loading) {
    return <h2>Loading...</h2>;  
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
