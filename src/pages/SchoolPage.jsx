
import { Schools } from "../components/Schools"
import SchoolStyle from './SchoolPage.module.css'
import SearchImg from '../assets/search.svg'


export const SchoolPage = () => {
    return (
        <div className={SchoolStyle.school}>
            <div className={SchoolStyle.schooldiv}>
                <h2>Jura academy programming courses</h2>
            </div>
            <div className={SchoolStyle.search}>
                <div>
                    <img src={SearchImg} alt="Search Image" />
                    <input type="search" placeholder='Searching for course....' />
                </div>
            </div> 
            <div className={SchoolStyle.curseDiv}>
                <Schools />
            </div>
        </div>
    )
}