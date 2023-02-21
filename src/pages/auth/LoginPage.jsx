import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const lastUrl = localStorage.getItem( 'lastUrl' ) || '/';

  const handleLogin = () => {
    login( 'Renato Soca' );
    
    navigate( lastUrl , { replace: true } );
  }

  return (
    <>
      <div className="login">
        <h1 className="login__logo">Login</h1>

        <button
          className="login__button"
          onClick={ handleLogin }
        >
          Iniciar Sesion
        </button>
      </div>
    </>
  )
}

export default LoginPage