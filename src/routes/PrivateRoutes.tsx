import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface RoutesPropsData extends RouteProps {
  role?: string;
};

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
  const hasPermission = true;

  return(
    hasPermission ? <Route {...rest}/> : <Redirect to='/' />
  )
};

export default PrivateRoutes;