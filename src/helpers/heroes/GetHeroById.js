import { heroes } from '../../data/heroes/heroes';

export const GetHeroById = ( heroId ) => {
  
  return heroes.find( hero => hero.id === heroId );
}