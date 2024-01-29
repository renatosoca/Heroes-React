import { useAuth } from "@/hooks";
import { PageLayout } from "@/layouts";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <PageLayout>
      <div>
        <p className="text-xl font-medium">Hola {user?.name}</p>
      </div>
    </PageLayout>
  );
};
export default HomePage;
