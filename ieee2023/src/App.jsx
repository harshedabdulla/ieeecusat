import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './components/Home'
import Execom from './components/Execom'
import Events from './components/Events'
import Highlights from './components/Highlights'
import Contacts from './components/Contacts'
import About from './components/About'
import Gallery from './components/Gallery'
import Newsletters from './components/Newsletters'
import Credits from './components/Credits'
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/execom' element={<Execom/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/highlights' element={<Highlights/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/newsletters' element={<Newsletters/>} />
        <Route path='/credits' element={<Credits/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
