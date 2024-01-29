import { heroes } from "@/data";

export const GetHeroById = (heroId: string) => {
  return heroes.find((hero) => hero.image === heroId);
};
export const GetHeroByName = (name: string) => {
  name.toLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};

export const GetHeroesByPublisher = (
  publisher: "DC Comics" | "Marvel Comics"
) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
