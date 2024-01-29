import { useNavigate, useLocation } from "react-router-dom";
import { HeroCard } from "./components";
import { GetHeroByName } from "@/utils";
import { useForm } from "@/hooks";
import { PageLayout } from "@/layouts";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramsSearch = searchParams.get("q") || "";

  const heroes = GetHeroByName(paramsSearch);
  const { search, onInputChange } = useForm({
    search: paramsSearch,
  });

  const showSearch = paramsSearch.length === 0;
  const showError = paramsSearch.length > 0 && heroes.length === 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length < 1) return;

    navigate(`?q=${search.toLowerCase()}`);
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-medium">Buscar Heroe</h1>
        <div className="pt-2">
          <form onSubmit={handleSubmit} className="search__form-content">
            <div className="flex flex-col">
              <label htmlFor="search">Nombre de heroe</label>
              <input
                id="search"
                type="text"
                name="search"
                className="bg-gray-300 px-3 py-2 rounded-lg outline-none placeholder:text-gray-700"
                placeholder="Busca tu Heroe"
                value={search}
                onChange={onInputChange}
              />
            </div>

            <button className="bg-blue-600 w-full py-2 rounded-lg mt-4 text-white font-medium hover:bg-blue-700 transition-colors duration-300">
              Buscar
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-xl">Resultado</h2>

            {showSearch && (
              <div className="text-center text-lg font-medium">
                Ingrese un Heroe a buscar
              </div>
            )}

            {showError && (
              <div className="text-center">
                <h2>
                  No hay un heroe con el nombre: <b>{paramsSearch}</b>{" "}
                </h2>
              </div>
            )}

            <div
              className={`${
                heroes.length > 1 ? "columns-2" : "max-w-sm mx-auto"
              }`}
            >
              {heroes.map((hero) => (
                <HeroCard key={hero.id} heroe={hero} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SearchPage;
