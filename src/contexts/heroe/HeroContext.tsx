import { createContext } from "react";

export interface HeroContextProps {
  heroActive: boolean;

  sliderRef: React.MutableRefObject<null>;

  nextSlider: () => void;
  previousSlider: () => void;
}

export const HeroContext = createContext({} as HeroContextProps);
