import { useContext } from "react";
import { HeroContext } from "@/contexts";

export const useHero = () => {
  const state = useContext(HeroContext);

  if (!state) {
    throw new Error("useHero must be used within an HeroProvider");
  }

  return {
    ...state,
  };
};
