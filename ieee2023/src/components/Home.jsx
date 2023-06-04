import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Highlights from './Highlights'
import Gallery from './Gallery'



function Home() {
  return (
    <div>
       <Navbar/>
        <Hero/>
        <About/>
        <Highlights/>
        <Gallery/>
    </div>
  )
}

export default Home
