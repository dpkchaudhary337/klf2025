import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import { Footer } from "./Pages/Footer";

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
