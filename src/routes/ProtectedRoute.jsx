import React from "react";
import { Navigate } from "react-router-dom";
import useGlobalStore from "../store/store";
import Dashboard from "../layout/dashBoard/Dashboard";

const ProtectedRoute = ({ children }) => {
  const user = useGlobalStore((state) => state.auth);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {children} <Dashboard />{" "}
    </>
  );
};

export default ProtectedRoute;
