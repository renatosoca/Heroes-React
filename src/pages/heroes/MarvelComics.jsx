import HeroesList from "../../components/heroes/HeroesList";

const MarvelComics = () => {
  const publisher = 'Marvel Comics';

  return (
    <>
      <h1>Marvel Comics</h1>

      <HeroesList publisher={ publisher } />
    </>
  )
}

export default MarvelComics