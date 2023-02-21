import { heroes } from '../../data/heroes/heroes';

export const GetHeroByName = ( name ) => {
  name.toLowerCase().trim();

  if ( name.length === 0 ) return [];

  return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) );
}