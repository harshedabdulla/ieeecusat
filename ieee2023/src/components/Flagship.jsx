import React from 'react';
import { motion } from 'framer-motion';

const Flagship = ({ event }) => {
  const { location, date, mode, registerLink, imageSrc } = event;

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.75 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-15 mb-10">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 md:pl-12 md:block hidden">
            <motion.h2
              className="text-4xl mb-4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              AKSC'23
            </motion.h2>
            <div>
              <motion.p
                className="mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Location: {location}
              </motion.p>
              <motion.p
                className="mb-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Date: {date}
              </motion.p>
              <motion.p
                className="mb-4"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Mode: {mode}
              </motion.p>
              <motion.a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg inline-block transition-colors duration-300"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Register Now
              </motion.a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img src={imageSrc} alt="Event Poster" className="w-full h-auto md:max-h-screen" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 text-center"
              initial="hidden"
              animate="visible"
              variants={overlayVariants}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="text-lg font-bold"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {date}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flagship;
