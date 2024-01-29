import { lazy } from "react";
import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/components";
import { PrivateGuard } from "@/guards";
import { Private_Routes } from "@/models";

const Public = lazy(() => import("./Public/PublicRoutes"));
const Private = lazy(() => import("./Private/PrivateRoutes"));

export const AppRoutes = () => {
  const { PRIVATE } = Private_Routes;

  return (
    <RoutesWithNotFound>
      <Route path={`/*`} element={<Public />} />

      <Route element={<PrivateGuard />}>
        <Route path={`${PRIVATE}/*`} element={<Private />} />
      </Route>
    </RoutesWithNotFound>
  );
};
