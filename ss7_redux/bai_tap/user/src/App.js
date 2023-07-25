import './App.css';
import ListUsers from './component/List';
import Home from './component/Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list' element={<ListUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
