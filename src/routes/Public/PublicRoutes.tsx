import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/components";
import { Private_Routes } from "@/models";
import { lazy } from "react";

const PublicGuard = lazy(() => import("@/guards/PublicGuard"));
const Login = lazy(() => import("@/pages/auth/login/LoginPage"));

const PublicRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={Private_Routes.PRIVATE} />} />

      <Route element={<PublicGuard />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default PublicRoutes;
