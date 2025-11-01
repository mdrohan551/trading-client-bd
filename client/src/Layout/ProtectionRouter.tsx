import React from "react";
import { useSelector } from "react-redux";
import type { ProtectedRouteProps } from "../AllTypes/AuthInterface";
import type { RootState } from "../redux/store/Store";
import { Navigate } from "react-router-dom";

const ProtectionRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, element }) => {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // ✅ redirect if not logged in
  }

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; // ✅ redirect if role not allowed
  }

  return element; // ✅ allowed, render the passed element
};

export default ProtectionRoute;
