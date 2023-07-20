import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
      index: 0
    };
  }
  handleChange = (event) => {
    this.setState(() => ({
      item: event.target.value
    }))
  }
  handleAddItem = () => {
    if (this.state.item !== '') {
      this.setState(() => ({
        list: [...this.state.list, this.state.item],
        item: ''
      }));
    }
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
        <input type="text" value={this.state.item} onChange={this.handleChange}></input>
        <button onClick={this.handleAddItem}>ADD</button>
        <table style={{ marginLeft: '42%' }}>
          <tbody>
            {this.state.list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}: </td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default App;
