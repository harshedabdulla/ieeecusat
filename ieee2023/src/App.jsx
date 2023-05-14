import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Execom from './components/Execom'
import Events from './components/Events'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/execom' element={<Execom/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App