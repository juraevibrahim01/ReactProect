import sideBar from './SideBar.module.css'
import logo from'../assets/logo.svg'
import { Link } from 'react-router-dom'
import homeLogo from '../assets/home.svg'
import Library from '../assets/library.svg'
import Quiz from '../assets/quiz.svg'
import Schools from '../assets/school.svg'
import Person from '../assets/person.svg'
import Login from '../assets/login.svg'
import { NavLink } from "react-router-dom";

function SideBar () {

    return (
        <div className={sideBar.sideBar}>
            <div className={sideBar.logo}>
                <div><img src={logo} alt="logo" width={60} height={60} /></div>
                <span>Jura Academy</span>
            </div>
            <div className={sideBar.pagesDiv}>
                <div className={sideBar.pages}>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages
                    }>
                    <img src={homeLogo} alt="home logo" />
                    Home
                    </NavLink>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <NavLink to={'/library'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages
                    }>
                    <img src={Library} alt="library logo" />
                    Library
                    </NavLink>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <NavLink to={'/quiz'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages
                    }>
                    <img src={Quiz} alt="quiz logo" />
                    Quizes
                    </NavLink>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <NavLink to={'/schools'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages 
                    }>
                    <img src={Schools} alt="schools logo" />
                    Academy courses
                    </NavLink>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <NavLink to={'/person'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages 
                    }>
                    <img src={Person} alt="person logo" />
                    Our mentors
                    </NavLink>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <NavLink to={'/login'} className={({ isActive }) =>
                        isActive ? `${sideBar.active}` : sideBar.pages 
                    }>
                    <img src={Login} alt="login logo" />
                    login
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar