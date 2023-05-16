import React from 'react';

const EventCard = ({ poster, status, date, month }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img className="w-full" src={poster} alt="Event Poster" />
        <div className="flex text-center">
            <div className='w-80'>
      <div className="px-4 py-2">
        <h3 className="text-gray-700">{status}</h3>
      </div>

      <div className="px-4 py-2">
        <button className="bg-blue-900 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-md">
          Learn More
        </button>
      </div>
      </div>
      <div className="bg-green-900 p-4">
            <p className="text-white font-bold text-lg">{date}</p>
            <p className="text-white font-light text-lg">{month}</p>
        </div>
        </div>      
    </div>
  );
};

export default EventCard;
