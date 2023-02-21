import { Outlet } from 'react-router-dom';

import  NavBar  from '../components/ui/NavBar';

const IndexLayout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  )
}

export default IndexLayout