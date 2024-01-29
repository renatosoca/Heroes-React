import { PageLayout } from "@/layouts";
import { HeroesList } from "./components";

const DcHeroesPage = () => {
  const publisher = "DC Comics";

  return (
    <PageLayout>
      <HeroesList publisher={publisher} />
    </PageLayout>
  );
};
export default DcHeroesPage;
