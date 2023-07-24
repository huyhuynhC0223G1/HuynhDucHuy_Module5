import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(item.target.value)
  }
  const handleItem = () => {
    if (item != '') {
      setList([...list, item]);
      setItem('');
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <input type='text' value={item} onChange={handleChange}></input>
      <button onClick={handleItem}>ADD</button>
      <table style={{ marginLeft: '42%' }}>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App;
