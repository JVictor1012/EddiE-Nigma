import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Enigma from './Enigma'
import Questions from './questions';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <BrowserRouter basename="/EddiE-Nigma">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/enigma" element={<Enigma />} exact />
          <Route path="/questions" element={<Questions />} exact />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);