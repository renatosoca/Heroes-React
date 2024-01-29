import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const lastUrl = localStorage.getItem("lastUrl") || "/";

  const handleLogin = () => {
    login("Renato Soca");

    navigate(lastUrl, { replace: true });
  };

  return (
    <>
      <div className="min-h-screen h-full flex flex-col items-center justify-center">
        <div className="max-w-lg w-full shadow-2xl rounded-lg bg-slate-100 p-6">
          <h1 className="text-center text-2xl font-semibold pb-4">Login</h1>

          <button
            className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors duration-300 w-full"
            onClick={handleLogin}
          >
            Iniciar Sesion
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
