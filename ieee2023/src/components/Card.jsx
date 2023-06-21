import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ imgSrc, name, position, ieeeno }) => {
  return (
    <motion.div
      className="bg-white border-2 border-blue-900 pr-3 pl-3 pb-3 h-full text-center"
      whileHover={{ scale: 1.05, cursor: 'pointer', color: '#01284C', borderColor: '#01284C'}}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center mb-2">
        <img
          src={imgSrc}
          alt={name}
          className="w-24 h-24 object-contain mt-3"
          style={{ maxHeight: '150px', maxWidth: '300px' }}
        />
      </div>
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm">{position}</div>
      <div className="text-xs mt-1">IEEE No: {ieeeno}</div>
    </motion.div>
  );
};

export default Card;
