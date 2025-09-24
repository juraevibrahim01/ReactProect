import sideBar from './SideBar.module.css'
import logo from'../assets/logo.svg'
import { Link } from 'react-router-dom'
import homeLogo from '../assets/home.svg'
import Library from '../assets/library.svg'
import Quiz from '../assets/quiz.svg'
import Schools from '../assets/school.svg'
import Person from '../assets/person.svg'
import Login from '../assets/login.svg'

function SideBar () {
    return (
        <div className={sideBar.sideBar}>
            <div className={sideBar.logo}>
                <div><img src={logo} alt="logo" width={60} height={60} /></div>
                <span>Jura Academy</span>
            </div>
            <div className={sideBar.pagesDiv}>
                <div className={sideBar.pages}>
                    <Link to={'/'}>
                    <img src={homeLogo} alt="home logo" />
                    Home
                    </Link>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <Link to={'/library'}>
                    <img src={Library} alt="library logo" />
                    Library
                    </Link>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <Link to={'/quiz'}>
                    <img src={Quiz} alt="quiz logo" />
                    Quizes
                    </Link>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <Link to={'/schools'}>
                    <img src={Schools} alt="schools logo" />
                    Academy courses
                    </Link>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <Link to={'/person'}>
                    <img src={Person} alt="person logo" />
                    Our mentors
                    </Link>
                    </div>
                </div>
                <div>
                    <div className={sideBar.pages}>
                    <Link to={'/login'}>
                    <img src={Login} alt="login logo" />
                    login
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar