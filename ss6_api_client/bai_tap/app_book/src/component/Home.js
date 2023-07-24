import React, { useEffect, useState } from 'react';
import './App.css';
import { getListBook, createBook, deleteBook } from './component/BookService';
import axios from 'axios';

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
      <link to={'/create'}>
      <button type='submit'>ADD NEW BOOK</button></link>
      <h1>Book List</h1>
      <table>
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {listBook.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button type="button" onClick={() =>{
                  deleteBook(book.id)
                }}>DELETE</button>
                <link to={'/update/${book.id}'}>
                <button type="submit">UPDATE</button></link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Home;