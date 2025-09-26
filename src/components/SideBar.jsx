import sideBar from './SideBar.module.css';
import logo from '../assets/logo.svg';
import { NavLinks } from "./NavLinks";

function SideBar() {
  return (
    <div className={sideBar.sideBar}>
      <div className={sideBar.logo}>
        <div><img src={logo} alt="logo" width={60} height={60} /></div>
        <span>Jura Academy</span>
      </div>

      <div className={sideBar.pagesDiv}>
        <NavLinks />
      </div>
    </div>
  );
}

export default SideBar;
