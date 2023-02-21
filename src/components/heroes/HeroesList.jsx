import React from 'react'
import { GetHeroesByPublisher } from '../../helpers/heroes/GetHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroesList = ( {publisher} ) => {
  const heroes = GetHeroesByPublisher( publisher );

  return (
    <>
      <div className='heroes'>
        { heroes.map( hero => <HeroCard key={hero.id} heroe={hero} />) }
      </div>
    </>
  )
}

export default HeroesList