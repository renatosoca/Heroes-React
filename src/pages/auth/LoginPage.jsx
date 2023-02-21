import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate( '/dc', { replace: true } );
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