import { Link } from "react-router-dom";
import { IHeroe, ModulePrivateRoutes } from "@/models";
import { FC } from "react";

interface HeroProps {
  heroe: IHeroe;
}

export const HeroCard: FC<HeroProps> = ({ heroe }) => {
  return (
    <figure key={heroe.id} className="w-full [break-inside:avoid] p-2">
      <div className="flex gap-2 items-center pb-2">
        <div className="block bg-sky-700 text-white font-medium max-w-max px-3 py-2 rounded-full">
          RS
        </div>
        <span className="font-mono">{heroe.superhero}</span>
      </div>

      <div className="relative cursor-pointer">
        <Link to={`${ModulePrivateRoutes.HeroPage}/${heroe.image}`}>
          <div className="absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg" />
          <img
            src={`/assets/img/${heroe.image}.jpg`}
            alt=""
            className="w-full rounded-lg"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center font-serif pt-2">
        <p className="text-base">{heroe.alter_ego}</p>

        {heroe.alter_ego !== heroe.characters && (
          <p className="text-sm">{heroe.alter_ego}</p>
        )}

        <p className="text-xs">{heroe.first_appearance}</p>
      </div>
    </figure>
  );
};
