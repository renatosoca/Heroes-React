import { FC, PropsWithChildren, useReducer, useRef } from "react";
import { HeroContext, heroReducer } from ".";

export interface HeroeState {
  heroActive: boolean;
}

const HERO_INITIAL_STATE: HeroeState = {
  heroActive: false,
};

export const HeroProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(heroReducer, HERO_INITIAL_STATE);
  const sliderRef = useRef(null);

  const nextSlider = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickNext();
    }
  };

  const previousSlider = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickPrev();
    }
  };

  return (
    <HeroContext.Provider
      value={{
        ...state,
        sliderRef,

        nextSlider,
        previousSlider,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};
