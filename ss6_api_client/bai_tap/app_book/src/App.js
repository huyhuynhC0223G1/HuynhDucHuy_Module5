import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import CreateNewBook from './component/CreateBook';
import UpdateBook from './component/UpdateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<CreateNewBook />}></Route>
          <Route path='/update/:id' element={<UpdateBook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;