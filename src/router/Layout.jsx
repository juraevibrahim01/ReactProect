import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { BurgerMenu } from "../components/BurgerMenu";

export function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <BurgerMenu /> : <SideBar />}
      <div className="app_container">
        <Outlet />
      </div>
    </>
  );
}
