import React from 'react';

const Flagship = ({ event }) => {
  const { location, date, mode, registerLink, imageSrc } = event;

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-15 mb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:flex items-center justify-between">
          
          <div className="md:w-1/2 md:pl-12 bp-4">
            <h2 className="text-4xl mb-4">Slashkey 2.0</h2>
            <div className='block'>
            <p className="mb-2">Location: {location}</p>
            <p className="mb-2">Date: {date}</p>
            <p className="mb-4">Mode: {mode}</p>
            <a
              href={registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg inline-block transition-colors duration-300"
            >
              Register Now
            </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={imageSrc} alt="Event Poster" className="w-full h-auto md:max-h-screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flagship;
