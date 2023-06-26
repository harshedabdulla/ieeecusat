import React from 'react';
import { motion } from 'framer-motion';

function Newsletters() {
  const newslettersData = [
    { year: 2020, link: 'https://drive.google.com/file/d/1oBskwplgrUCrFdWB6x_Pj_K-nnYizgLm/view' },
    { year: 2021, link: 'https://fliphtml5.com/check/jaoxl/jlfy/' },
    
    // { year: 2023, link: 'https://example.com/newsletter-2023' },
  ];

  return (
    <div>
        <h1 className="text-4xl text-orange-400 text-center mb-4">Newsletters</h1>
       
        <p className="text-xl text-[#49A79D] text-center">IEEE SB CUSAT's annual newsletter</p>
        <br/>
    <div className="flex justify-center">
       

      {newslettersData.map((newsletter) => (
        <motion.a
          key={newsletter.year}
          href={newsletter.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-32 h-48 p-4 m-4 text-white rounded-lg bg-[#49A79D]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-2xl font-bold">{newsletter.year}</h2>
        </motion.a>
      ))}
    </div>
    </div>
  );
}

export default Newsletters;
