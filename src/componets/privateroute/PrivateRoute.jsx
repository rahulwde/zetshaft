import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Home/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user,loading}= use(AuthContext)
  const location = useLocation()

  if(loading) return <Loading></Loading>
 if(!user){
  <Navigate to="/" state={{from:location}}></Navigate>
 }
  return  children
};

export default PrivateRoute;