import React, { useMemo } from 'react'
import 'animate.css';

import { GetHeroesByPublisher } from '../../helpers/heroes/GetHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroesList = ( {publisher} ) => {
  const heroes = useMemo(() => GetHeroesByPublisher( publisher ), [publisher]);

  return (
    <>
      <div className='heroes animate__fadeInDownBig'>
        { heroes.map( hero => <HeroCard key={hero.id} heroe={hero} />) }
      </div>
    </>
  )
}

export default HeroesList