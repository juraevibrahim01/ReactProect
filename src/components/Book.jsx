import book from './Book.module.css'



export const Book = ({title, author, image, pdf}) => {
    const openPDF = () => {
        window.open(pdf, "_blank"); // открывает PDF в новой вкладке
    };

    return (
        <>
        <div className={book.book}>
            <div className={book.img}>
                <img src={image} alt="You don`t know JS"/>
            </div>
            <div className={book.bookContent}>
                <div className={book.content}>
                    <h2>{title}</h2>
                    <p>{author}</p>
                </div>
            </div>
            <div className={book.button}>
                <button onClick={openPDF}>READ</button>
            </div>
        </div>
        </>
    )
}