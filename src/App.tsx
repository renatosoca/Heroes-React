import { Suspense } from "react";
import { AuthProvider, HeroProvider } from "./contexts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <HeroProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
          <AppRoutes />
        </Suspense>
      </HeroProvider>
    </AuthProvider>
  );
}

export default App;
