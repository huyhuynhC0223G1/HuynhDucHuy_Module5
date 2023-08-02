
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import SongList from './component/SongList';
import Create from './component/Create';
function App() {
  return (
<>
<BrowserRouter>
<Header />
<Routes>
<Route path='/' element={<SongList />}></Route>
<Route path='/create' element={<Create />}></Route>
</Routes>

<Footer />
</BrowserRouter>
</>
  );
}

export default App;
