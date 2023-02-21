import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { GetHeroById } from "../../helpers/heroes/GetHeroById";

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  
  const hero = useMemo( () => GetHeroById(heroId), [ heroId ] );

  const handleReturn = () => {
    navigate(-1);
  }
  
  if ( !hero ) return <Navigate to="/dc" />;

  return (
    <>
      <div className="heroe">
        <div className="heroe__container">
          <div className="heroe__img animate__animated animate__zoomIn">
            <img src={`/assets/img/${ heroId }.jpg`} alt="" />
          </div>

          <div className="heroe__content">
            <h1 className="heroe__title">{ hero.superhero }</h1>
            <p className="heroe__text">{ hero.alter_ego }</p>
            <p className="heroe__text">{ hero.first_appearance }</p>
            <p className="heroe__text">{ hero.publisher }</p>

            <button
              className="heroe__button"
              onClick={ handleReturn }
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroPage