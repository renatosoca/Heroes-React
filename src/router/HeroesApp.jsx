import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "../context"
import IndexLayout from "../layout/IndexLayout"
import LoginPage from "../pages/auth/LoginPage"
import DcComics from "../pages/heroes/DcComics"
import HeroPage from "../pages/heroes/HeroPage"
import IndexPage from "../pages/heroes/IndexPage"
import MarvelComics from "../pages/heroes/MarvelComics"
import SearchPage from "../pages/heroes/SearchPage"
import PublicRoute from "./PublicRoute"

const HeroesApp = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={<IndexLayout />} >
          <Route index element={<IndexPage /> } />
          <Route path="dc" element={<DcComics /> } />
          <Route path="marvel" element={<MarvelComics /> } />
          <Route path="hero/:heroId" element={<HeroPage /> } />
          <Route path="search" element={<SearchPage /> } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default HeroesApp