import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { GetHeroByName } from '../../helpers/heroes/GetHeroByName';
import { useEffect } from 'react';
import HeroCard from '../../components/heroes/HeroCard';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = GetHeroByName( q );
  const { search, onInputChange } = useForm({
    search: q
  });

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 && heroes.length === 0 );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( search.length < 1 ) return;

    navigate(`?q=${search.toLowerCase()}`);
  }

  return (
    <>
      <div className="search">
        <h1>Buscar Heroe</h1>
        <div className="search__container">
          <div className="search__form">
            <h2>Buscar</h2>
            <form 
              onSubmit={handleSubmit}
              className="search__form-content"
            >
              <input
                type="text"
                name="search"
                className="search__input"
                placeholder="Busca tu Heroe"
                value={search}
                onChange={ onInputChange }
              />

              <button
                className="search__button"
              >
                Buscar
              </button>
            </form>
          </div>

          <div>
            <div className="search__result">
              <h2>Resultado</h2>

              <div className="result__hero animate__animated animate__fadeIn" style={ { display: showSearch ? '' : 'none'}  }>
                Ingrese un Heroe a buscar
              </div>

              <div className="result__notfound animate__animated animate__fadeIn" style={ { display: showError ? '' : 'none'}  }>
                <h2>No hero <b>{ q }</b> </h2>
              </div>

              {
                heroes.map( hero => <HeroCard key={hero.id} heroe={hero} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage