import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";

function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}

export default Layout;
