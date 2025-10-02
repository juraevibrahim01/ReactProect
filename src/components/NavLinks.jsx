import { NavLink } from "react-router-dom";
import sideBar from "./SideBar.module.css";

import homeLogo from "../assets/home.svg";
import Library from "../assets/library.svg";
import Quiz from "../assets/quiz.svg";
import Schools from "../assets/school.svg";
import Person from "../assets/person.svg";
import Login from "../assets/login.svg";

export const NavLinks = ({onClick}) => {
  return (
    <>
      <div className={sideBar.pages}>
        <NavLink to={"/"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={homeLogo} alt="home logo" />
          Home
        </NavLink>
      </div>

      <div className={sideBar.pages}>
        <NavLink to={"/library"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={Library} alt="library logo" />
          Library
        </NavLink>
      </div>

      <div className={sideBar.pages}>
        <NavLink to={"/quiz"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={Quiz} alt="quiz logo" />
          Quizes
        </NavLink>
      </div>

      <div className={sideBar.pages}>
        <NavLink to={"/schools"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={Schools} alt="schools logo" />
          Academy courses
        </NavLink>
      </div>

      <div className={sideBar.pages}>
        <NavLink to={"/ourMentors"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={Person} alt="person logo" />
          Our mentors
        </NavLink>
      </div>
      <div className={sideBar.pages}>
        <NavLink to={"/login"} className={({ isActive }) =>
          isActive ? sideBar.active : sideBar.pages
        }
        onClick={onClick}
        >
          <img src={Login} alt="login logo" />
          Login
        </NavLink>
      </div>
    </>
  );
};
