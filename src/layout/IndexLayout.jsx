import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import  NavBar  from '../components/ui/NavBar';
import { AuthContext } from '../context/AuthContext';

const IndexLayout = () => {

  const { user } = useContext( AuthContext );
  
  return (
    <>
    {
      (user?.logged ) 
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