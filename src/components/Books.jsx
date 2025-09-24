import { Book } from "./Book.jsx"
import { books } from "./BooksData.jsx"

export const Books = ({books}) => {

    return (
        <>
            {books.map((b, i) => (
                <Book key={i} title={b.title} author={b.author} image={b.image} pdf={b.pdf}/>
            ))}
        </>
    )
}
