import { Link } from "react-router-dom";
import { ModulePrivateRoutes } from "@/models";
import { useAuth } from "@/hooks";
import { LinkItem } from "./";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className=" text-black px-2">
      <div className="max-w-[120rem] w-full flex justify-between items-center mx-auto text-base font-medium py-2">
        <nav className="flex justify-center gap-2">
          <LinkItem link={ModulePrivateRoutes.HomePage} text="Inicio" />

          <LinkItem link={ModulePrivateRoutes.ComicPage} text="Comic" />

          <LinkItem link={ModulePrivateRoutes.MarvelPage} text="Marvel" />
        </nav>

        <div className="flex gap-2 items-center">
          {!!user && <p>{`${user?.name} ${user?.lastname}`}</p>}
          <Link to={ModulePrivateRoutes.SearchPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>

          {!!user && (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-red-600 transition-colors duration-300"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
