import { useAuth } from "@/hooks";
import { ModulePrivateRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

const PublicGuard = () => {
  const { user } = useAuth();

  return (
    <>
      {!user?.id && <Outlet />}
      {user?.id && <Navigate to={ModulePrivateRoutes.HeroPage} />}
    </>
  );
};
export default PublicGuard;
