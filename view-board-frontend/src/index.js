import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './App';
import { Footer } from './components'
import { Upcoming } from './containers';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Upcoming'>Upcoming</Link>
      </nav>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Upcoming' element={<Upcoming />} />
        <Route path='*' element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


