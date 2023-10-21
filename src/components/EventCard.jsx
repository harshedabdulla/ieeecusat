import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ poster, status, date, month }) => {
  return (
    <motion.div
      className="max-w-xs shadow-lg rounded-lg overflow-hidden mx-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1.5, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
       <motion.img
        className="w-full object-cover"
        src={poster}
        alt="Event Poster"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex text-center bg-blue-100">
        <div className="w-80">
          <div className="px-4 py-2">
            <h3 className="text-gray-800 text-medium">{status}</h3>
          </div>
          <div className="px-4">
          <motion.button
              className="bg-blue-600 hover:bg-blue-700 rounded-lg text-sm shadow-lg text-white py-1 px-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className="bg-green-900 p-3 roundend-lg">
          <p className="text-white font-bold text-lg">{date}</p>
          <p className="text-white font-light text-lg">{month}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
