import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const PublicRoute = ({ children }) => {

  const { user } = useContext( AuthContext );

  return ( !user?.id )
    ? children
    : <Navigate to='/' />
}

export default PublicRoute