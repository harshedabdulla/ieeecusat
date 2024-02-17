import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import ImageModal from '../components/ImageModal'
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

const images = [p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13]

const Gallery2 = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const openModal = (image) => {
    setCurrentImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentImage(null)
  }
  return (
    <div>
      <Navbar />
      <Title title="Gallery" />
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`image-${index}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      {modalOpen && (
        <ImageModal
          images={images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default Gallery2
