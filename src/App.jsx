import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Blog2 from './pages/Blog2';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/article' element={<Blog2 />} />
      </Routes>
    </div>
  )
}
