import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import  NavBar  from '../components/ui/NavBar';
import { AuthContext } from '../context/AuthContext';

const IndexLayout = () => {

  const { user } = useContext( AuthContext );

  const { pathname, search } = useLocation();
  
  const lastUrl = pathname + search;
  localStorage.setItem( 'lastUrl', lastUrl );
  
  return (
    <>
    {
      (user?.id ) 
      ? (
          <> 
          <NavBar />
          <Outlet /> 
          </>
        )
      : <Navigate to='/login' />
    }
    </>
  )
}

export default IndexLayout