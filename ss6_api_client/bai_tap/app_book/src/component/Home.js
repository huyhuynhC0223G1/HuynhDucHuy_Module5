import React, { useEffect, useState } from 'react';
import { getListBook, deleteBook } from '../service/BookService';
import { Link } from 'react-router-dom';

function Home() {
    const [listBook, setListBook] = useState([]);
    const [book, setBook] = useState("");
    const [deleteBookId, setDeleteBookId] = useState(null);

    const getBooks = async () => {
        try {
            const data = await getListBook();
            setListBook(data);
        } catch (error) {
            console.error('Error getting book list:', error);
        }
    }

    useEffect(() => {
        getBooks();
    }, [book])

    const handleDeleteBook = async () => {
        await deleteBook(deleteBookId);
        setListBook(listBook.filter(book => book.id !== deleteBookId));
        setDeleteBookId(null);
        
    };

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
                                <button type="submit" onClick={() => setDeleteBookId(book.id)} data-toggle="modal" data-target="#deleteModal">DELETE</button>
                                <Link to={`/update/${book.id}`}>
                                    <button type="submit">UPDATE</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="deleteModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleDeleteBook}>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title">Delete Book</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this book?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;