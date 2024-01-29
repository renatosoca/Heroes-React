import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { GetHeroById } from "@/utils";
import { ModulePrivateRoutes } from "@/models";
import { PageLayout } from "@/layouts";

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo(() => GetHeroById(heroId!), [heroId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to={ModulePrivateRoutes.ComicPage} />;

  return (
    <PageLayout>
      <div className="max-w-5xl m-auto">
        <div className="flex items-start gap-4">
          <div className="heroe__img animate__animated animate__zoomIn">
            <img
              src={`/assets/img/${heroId}.jpg`}
              alt=""
              className="rounded-lg"
            />
          </div>

          <div className="font-semibold font-mono">
            <h1 className="text-2xl">{hero.superhero}</h1>
            <p className="text-lg">{hero.alter_ego}</p>
            <p className="text-lg">{hero.first_appearance}</p>
            <p className="text-lg">{hero.publisher}</p>

            <button
              className="bg-sky-600 px-4 py-2 rounded-lg text-white mt-4 hover:bg-sky-700 transition-colors duration-300"
              onClick={handleReturn}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HeroPage;
