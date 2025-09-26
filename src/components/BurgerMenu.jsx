import { useState } from "react";
import BurgerStyle from "./BurgerMenu.module.css";
import { NavLinks } from "./NavLinks";
import logo from "../assets/logo.svg";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* шапка с логотипом и кнопкой */}
      <div className={BurgerStyle.topBar}>
        <div className={BurgerStyle.logo}>
          <img src={logo} alt="logo" width={40} height={40} />
          <span>Jura Academy</span>
        </div>

        <div
          className={`${BurgerStyle.burger} ${isOpen ? BurgerStyle.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* выезжающее меню */}
      <nav className={`${BurgerStyle.menu} ${isOpen ? BurgerStyle.active : ""}`}>
        <NavLinks />
      </nav>
    </>
  );
};
