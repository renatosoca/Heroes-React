import { Link } from 'react-router-dom';

const HeroCard = ( { heroe } ) => {
  const imageurl = `./assets/img/${ heroe.id }.jpg`;
  
  return (
    <>
      <div className="heroes__container">
        <img src={ imageurl } alt="" />
        
        <div className="heroes__content">
          <h3>{ heroe.superhero }</h3>
          <p>{ heroe.alter_ego }</p>

          { ( heroe.alter_ego !== heroe.characters ) && <p>{ heroe.alter_ego }</p> }

          <p>
            <small>{ heroe.first_appearance }</small>
          </p>

          <Link 
            className="heroes__link"
            to={ `/hero/${ heroe.id }` }
          >
            Mas...
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeroCard