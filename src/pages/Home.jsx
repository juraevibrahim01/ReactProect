import home from './Home.module.css'
import homeImg from '../assets/mainImg.svg'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className={home.home}>
            <div className={home.text}>
                <h2>Unlock Your Coding Potential with Jura Academy's Programming Courses</h2>
                <p>Welcome to Humo Academy, where we empower you to master the art of programming. Discover our diverse range of courses designed to cater to beginners and seasoned coders alike. Whether you're interested in web development, data science, or mobile app creation, we have the resources and expertise to guide you towards success. Join us on a journey of learning and innovation today!</p>
                <Link to={'/schools'}>Start to learn free</Link>
            </div>
            <div className={home.img}>
                <img src={homeImg} alt="home img" />
            </div>
        </div>
    )
}