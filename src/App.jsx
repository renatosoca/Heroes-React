import { BrowserRouter } from 'react-router-dom'

import HeroesApp from './router/HeroesApp';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeroesApp />
      </BrowserRouter>
    </>
  )
}

export default App
