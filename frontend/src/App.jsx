import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Specification from './components/Specification'
import Project from './components/Project'
import Contact from './components/Contact'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/specification' element={<Specification/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App