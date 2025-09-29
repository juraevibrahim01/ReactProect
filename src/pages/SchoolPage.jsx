
import { Schools } from "../components/Schools"
import SchoolStyle from './SchoolPage.module.css'
import SearchImg from '../assets/search.svg'
import { SchoolData } from "../components/SchoolData"
import { useState } from "react"

export const SchoolPage = () => {
    const [search, setSearch] = useState("");
    // фильтруем книги по названию и автору
    const filteredBooks = SchoolData.filter(
        (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.mentor.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={SchoolStyle.schoolDiv}>
            <div className={SchoolStyle.school}>
                <div className={SchoolStyle.schooldiv}>
                    <h2>Jura academy programming courses</h2>
                </div>
                <div className={SchoolStyle.search}>
                    <div>
                        <img src={SearchImg} alt="Search Image" />
                        <input type="search" placeholder='Searching for course....' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div> 
                <div className={SchoolStyle.curseDiv}>
                    <Schools SchoolData = {filteredBooks} />
                </div>
            </div>
        </div>
    )
}