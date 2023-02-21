import { BrowserRouter } from 'react-router-dom'

import HeroesRoutes from './router/heroes/HeroesRoutes';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeroesRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
