import HeroesList from "../../components/heroes/HeroesList";

const DcComics = () => {

  const publisher = 'DC Comics';

  return (
    <>
      <h1>DC Comics</h1>
      <HeroesList publisher={ publisher } />
    </>
  )
}

export default DcComics