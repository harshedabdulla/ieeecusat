import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Highlights from './Highlights'
import Gallery from './Gallery'
import Societies from './Societies'
import Newsletters from './Newsletters'



function Home() {
  return (
    <div>
      <Navbar />
      <section id='home'>
      <Hero />
      </section>
      <section id="about">

        <About />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <Gallery />
      <Newsletters />
      <Societies />
    </div>
  );
}


export default Home
