import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Store from './components/Store';
import Adoption from './components/Adoption';
import Donation from './components/Donation';
import Community from './components/Community';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/q&a" element={<Community />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);