import { FC, useMemo } from "react";
import { GetHeroesByPublisher } from "@/utils";
import { HeroCard } from ".";

interface HeroesProps {
  publisher: "DC Comics" | "Marvel Comics";
}

export const HeroesList: FC<HeroesProps> = ({ publisher }) => {
  const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="block">
      <div className="columns-1 sm:columns-2 mg:columns-3 xl:columns-4 ">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} heroe={hero} />
        ))}
      </div>
    </div>
  );
};
