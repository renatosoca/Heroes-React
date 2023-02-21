import { Navigate, useParams } from "react-router-dom";
import { GetHeroById } from "../../helpers/heroes/GetHeroById";

const HeroPage = () => {
  const { heroId } = useParams();
  const hero = GetHeroById(heroId);
  
  if ( !hero ) return <Navigate to="/dc" />;

  return (
    <>
      
    </>
  )
}

export default HeroPage