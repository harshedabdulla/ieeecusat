import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animation from '../assets/86897-gallery-icon-animation.json';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
  ];
  const intervalDuration = 3000; // 3 seconds interval

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, intervalDuration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="flex justify-center items-center mt-12 mx-4">
      <div className="w-3/4">
        <div className="relative bg-white rounded-lg overflow-hidden border-2 border-[#49A79D] px-8 mt-4 pb-8 mb-8">
          <motion.h1
            className="text-center text-4xl py-8 text-orange-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.h1>
          <div className="flex">
            <motion.div
              className="w-1/2 h-80 flex flex-col justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-center text-xl text-orange-400 relative">
                "ONE PICTURE A MILLION MEMORIES"
              </h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Lottie
                  animationData={animation}
                  className="h-72 w-auto object-cover transition-opacity duration-500 ease-in-out"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-1/2 relative overflow-hidden h-80"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full">
                <motion.img
                  src={images[currentSlide]}
                  alt="Slideshow Image"
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent font-bold text-4xl text-white"
                onClick={prevSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                &lt;
              </motion.button>
              <motion.button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent font-bold text-4xl text-white"
                onClick={nextSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                &gt;
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {images.map((_, index) => (
              <motion.span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentSlide ? 'bg-[#49A79D]' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
