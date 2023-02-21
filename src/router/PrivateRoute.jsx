import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../context';

const PrivateRoute = ({ children }) => {
  const { user } = useContext( AuthContext );
  const { pathname, search } = useLocation();
  
  const lastUrl = pathname + search;
  localStorage.setItem( 'lastUrl', lastUrl );
  console.log('re-render');

  return ( user?.id )
    ? children
    : <Navigate to='/login' />
}

export default PrivateRoute