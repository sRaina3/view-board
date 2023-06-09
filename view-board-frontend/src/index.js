import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import { Footer, Navbar } from './components'
import { Upcoming } from './containers';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/view-board">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Upcoming' element={<Upcoming />} />
        <Route path='*' element={<App />} />
      </Routes>
      <Footer />
      <Navbar />
    </Router>
  </React.StrictMode>
);


