export const PublicRoutes = {
  PUBLIC: "/auth",
  LOGIN: "/login",
};

export const Private_Routes = {
  PRIVATE: "/p",
  HOME: "/home",
  COMIC: "/comic",
  MARVEL: "/marvel",
  HERO: "/hero",
  SEARCH: "/search",
};

export const ModulePrivateRoutes = {
  HomePage: `${Private_Routes.PRIVATE}${Private_Routes.HOME}`,
  ComicPage: `${Private_Routes.PRIVATE}${Private_Routes.COMIC}`,
  MarvelPage: `${Private_Routes.PRIVATE}${Private_Routes.MARVEL}`,
  HeroPage: `${Private_Routes.PRIVATE}${Private_Routes.HERO}`,
  SearchPage: `${Private_Routes.PRIVATE}${Private_Routes.SEARCH}`,
};
