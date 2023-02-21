import { AuthProvider } from "../context"
import HeroesRoutes from "./heroes/HeroesRoutes"

const HeroesApp = () => {
  return (
    <AuthProvider>
      <HeroesRoutes />
    </AuthProvider>
  )
}

export default HeroesApp