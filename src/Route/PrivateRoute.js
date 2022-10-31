import React, { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../firebase/UserContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <p className="visually-hidden">Loadings......</p>
      </Spinner>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
