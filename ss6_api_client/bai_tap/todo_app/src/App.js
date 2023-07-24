import React, { useEffect, useState } from 'react';
import './App.css';
import { createTodo, getListTodo } from './TodoService';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    const getTodo = async () => {
      const data = await getListTodo();
      setList(data);
    }
    getTodo();
  }, [item])

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleItem = async () => {
    await createTodo({
      name: item
    })
    setItem('');
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <input type='text' value={item} onChange={handleChange}></input>
      <button onClick={handleItem}>ADD</button>
      <table style={{ marginLeft: '42%' }}>
        <tbody>
          {list.map((item) => 
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default App;
