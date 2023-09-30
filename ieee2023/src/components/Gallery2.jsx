import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import p2 from '../assets/gallery/evehack01.jpeg'
import p3 from '../assets/gallery/evehack02.jpeg'
import p4 from '../assets/gallery/evehack03.jpeg'
import p5 from '../assets/gallery/evehack04.jpeg'
import p6 from '../assets/gallery/l1.jpeg'
import p7 from '../assets/gallery/l2.jpeg'
import p8 from '../assets/gallery/l3.jpeg'
import p9 from '../assets/gallery/l4.jpeg'
import p10 from '../assets/gallery/l5.jpeg'
import p11 from '../assets/gallery/l6.jpeg'
import p12 from '../assets/gallery/l7.jpeg'
import p13 from '../assets/gallery/l8.jpeg'


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
    <img src={p6} alt="image" />
    <img src={p7} alt="image" />
    <img src={p8} alt="image" />
    <img src={p9} alt="image" />
    <img src={p10} alt="image" />
    <img src={p11} alt="image" />
    <img src={p12} alt="image" />
    <img src={p13} alt="image" />
    
  </div>
</div>

    </div>
  )
}

export default Gallery2