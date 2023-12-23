import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Card.css'

const Card = ({ imgSrc, name, position, ieeeno }) => {
  return (
    <motion.div
      className="card-containers"
      whileHover={{ scale: 1.05, cursor: 'pointer', color: '#01284C', borderColor: '#01284C'}}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card-content">
        <div className="text-lg font-medium">{name}</div>
        <div className="text-sm">{position}</div>
      </div>
    </motion.div>
  );
};

export default Card;
