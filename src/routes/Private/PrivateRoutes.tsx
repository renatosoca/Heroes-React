import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@/components";
import { ModulePrivateRoutes, Private_Routes } from "@/models";

const Layout = lazy(() => import("@/layouts/ModuleLayout"));

const Home = lazy(() => import("@/pages/home/HomePage"));
const DcPage = lazy(() => import("@/pages/heroes/DcHeroesPage"));
const MarvelPage = lazy(() => import("@/pages/heroes/MarvelHeroesPage"));
const Hero = lazy(() => import("@/pages/heroes/HeroPage"));
const Search = lazy(() => import("@/pages/heroes/SearchPage"));

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate to={ModulePrivateRoutes.HomePage} />}
      />

      <Route element={<Layout />}>
        <Route path={Private_Routes.HOME} element={<Home />} />
        <Route path={Private_Routes.COMIC} element={<DcPage />} />
        <Route path={Private_Routes.MARVEL} element={<MarvelPage />} />
        <Route path={Private_Routes.HERO + "/:heroId"} element={<Hero />} />
        <Route path={Private_Routes.SEARCH} element={<Search />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default PrivateRoutes;
