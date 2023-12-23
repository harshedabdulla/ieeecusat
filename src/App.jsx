import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Footer from "./components/Footer"
import Home from './pages/Home'
import Execom from './pages/Execom'
import Events from './pages/Events'
import Highlights from './components/Highlights'
import Contacts from './pages/Contacts'
import About from './components/About'
import Gallery from './components/Gallery'
import Newsletters from './components/Newsletters'
import Credits from './components/Credits'
import Gallery2 from './pages/Gallery2'

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
        <Route path='/gallery2' element={<Gallery2/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
