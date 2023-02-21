import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { search, onInputChange } = useForm({
    search: ''
  });
  
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
              <div className="result__hero">
                <h2>Hero</h2>
              </div>

              <div className="result__notfound">
                <h2>No hero <b>{ q }</b> </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage