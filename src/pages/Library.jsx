import { Link } from 'react-router-dom'
import library from './Library.module.css'
import IconSearch from '../assets/search.svg'
import { Books } from '../components/books'
import { books } from '../components/BooksData'
import { useState } from "react";

export const Library = () => {
    const [search, setSearch] = useState("");
    // фильтруем книги по названию и автору
    const filteredBooks = books.filter(
        (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={library.library}>
            <div>
                <h2>Programming books recommended by<br />Jura Academy</h2>
                <div className={library.search}>
                    <div className={library.searchDiv}>
                        <img src={IconSearch} alt="icon search"/>
                        <input type="search" placeholder='Search book...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    {/* Для добавления книги */}
                    {/* <div className='addBook'>

                    </div> */}
                </div>
                <div className={library.books}>
                    <Books books={filteredBooks}/>
                </div>
            </div>
        </div>
    )
}