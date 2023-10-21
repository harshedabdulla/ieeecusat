import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ title }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex justify-center items-center bg-blue-900 mb-8 p-8"
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-white text-6xl md:text-6xl lg:text-6xl p-20"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </motion.section>
  );
};

export default Title;
