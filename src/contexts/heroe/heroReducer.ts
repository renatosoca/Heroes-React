import { HeroeState } from ".";

type heroActionType = { type: "[heroe] - Active" };

export const heroReducer = (
  state: HeroeState,
  action: heroActionType
): HeroeState => {
  switch (action.type) {
    case "[heroe] - Active":
      return {
        ...state,
      };

    default:
      return state;
  }
};
