import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Highlights from '../components/Highlights'
import Gallery from '../components/Gallery'
import Societies from '../components/Societies'
import Newsletters from '../components/Newsletters'



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

      <Newsletters />
      <Societies />
    </div>
  );
}


export default Home
