import { Route, Routes } from 'react-router-dom';

import IndexLayout from '../../layout/IndexLayout'
import LoginPage from '../../pages/auth/LoginPage';
import MarvelComics from '../../pages/heroes/MarvelComics';
import DcComics from '../../pages/heroes/DcComics';
import IndexPage from '../../pages/heroes/IndexPage';
import SearchPage from '../../pages/heroes/SearchPage';
import HeroPage from '../../pages/heroes/HeroPage';

const HeroesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout />} >
          <Route index element={<IndexPage /> } />
          <Route path="dc" element={<DcComics /> } />
          <Route path="marvel" element={<MarvelComics /> } />
          <Route path="hero/:heroId" element={<HeroPage /> } />
          <Route path="search" element={<SearchPage /> } />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default HeroesRoutes