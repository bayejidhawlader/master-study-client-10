import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../firebase/UserContext";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading</span>
      </Spinner>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
