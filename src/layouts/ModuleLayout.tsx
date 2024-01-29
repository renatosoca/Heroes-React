import { Outlet } from "react-router-dom";
import { Navbar } from "@/components";

const ModuleLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
};
export default ModuleLayout;
