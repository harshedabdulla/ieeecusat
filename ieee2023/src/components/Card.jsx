import React from 'react';

const Card = ({ imgSrc, name, position, ieeeno }) => {
  return (
    <div className="bg-white border-2 border-blue-900 pr-3 pl-3 pb-3 h-full text-center">
    <div className="flex items-center justify-center mb-2">
      <img src={imgSrc} alt={name} className="w-full object-cover mt-3" />
    </div>
    <div className="text-lg font-medium">{name}</div>
    <div className="text-sm">{position}</div>
    <div className="text-xs mt-1">IEEE No: {ieeeno}</div>
  </div>
  


  );
};

export default Card;
