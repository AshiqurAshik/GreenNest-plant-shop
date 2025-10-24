import React, { use } from 'react';
import { AuthContext } from '../Auth Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-dots loading-l"></span>;
  }

  if (user) {
    return children;
  } else return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
