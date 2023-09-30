import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import p2 from '../assets/gallery/evehack01.jpeg'
import p3 from '../assets/gallery/evehack02.jpeg'
import p4 from '../assets/gallery/evehack03.jpeg'
import p5 from '../assets/gallery/evehack04.jpeg'

const Gallery2 = () => {
  return (
    <div>
        <Navbar />
        <Title title="Gallery" />
        <div className="p-5 md:p-10">
  <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
    <img src={p2} alt="image" />
    <img src={p3} alt="image" />
    <img src={p4} alt="image" />
    <img src={p5} alt="image" />
  </div>
</div>

    </div>
  )
}

export default Gallery2