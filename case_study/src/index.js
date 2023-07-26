import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Rou, Routes } from 'react-router-dom';
import Contract from './components/Contract';
import Customer from './components/Customer';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/Service' element={<Service />}></Route>
      <Route path='/Contract' element={<Contract />}></Route>
      <Route path='/Customer' element={<Customer />}></Route>
      </Routes>
    
      <Footer></Footer>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
