import { PageLayout } from "@/layouts";
import { HeroesList } from "./components";

const MarvelHeroesPage = () => {
  const publisher = "Marvel Comics";

  return (
    <PageLayout>
      <HeroesList publisher={publisher} />
    </PageLayout>
  );
};
export default MarvelHeroesPage;
