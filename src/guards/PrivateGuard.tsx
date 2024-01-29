import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks";

export const PrivateGuard = () => {
  const { user } = useAuth();

  return (
    <>
      {user?.id && <Outlet />}
      {!user?.id && <Navigate to="/auth/login" />}
    </>
  );
};
