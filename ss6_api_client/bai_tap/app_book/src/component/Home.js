import React, { useEffect, useState } from 'react';
import { getListBook, deleteBook } from '../service/BookService';
import { Link } from 'react-router-dom';

function Home() {
    const [listBook, setListBook] = useState([]);
    const [book, setBook] = useState("");

    useEffect(() => {
        const getBooks = async () => {
            const data = await getListBook();
            setListBook(data);
        }
        getBooks();
    }, [book])

    return (
        <div style={{ textAlign: 'center' }}>
            <Link to='/create'>
                <button type='submit'>ADD NEW BOOK</button>
            </Link>
            <h1>Book List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listBook.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button type="button" onClick={async () => {
                                    await deleteBook(book.id);
                                    setBook(book.id);
                                }}>DELETE</button>
                                <Link to={`/update/${book.id}`}>
                                    <button type="submit">UPDATE</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;