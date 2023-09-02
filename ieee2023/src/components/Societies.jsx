import React from 'react';
import aps from '../assets/IEEE_APS.png';
import cs from '../assets/IEEE_CS.png';
import ias from '../assets/IEEE_IAS.png';
import pes from '../assets/IEEE_PES.png';
import ras from '../assets/IEEE_RAS.png';
import wie from '../assets/IEEE_WIE.png';
import pho from '../assets/IEEE_photonics.png';
const Societies = () => {
  const societies = [
    {
      id: 1,
      name: 'CS',
      imageSrc: cs,
    },
    {
      id: 2,
      name: 'RAS',
      imageSrc: ras,
    },
    {
        id: 3,
        name: 'photonics',
        imageSrc: pho,
    },
    {
        id: 4,
        name: 'ias',
        imageSrc: ias,
    },
    {
        id: 5,
        name: 'aps',
        imageSrc: aps,
    },
    {
        id: 6,
        name: 'WIE',
        imageSrc: wie,
    },
    {
        id: 7,
        name: 'Pes',
        imageSrc: pes,
    },
    
    // Add more societies here...
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-5xl text-center text-orange-400 mb-4">Societies</h1>
      <h2 className="text-xl text-[#49A79D] mb-8 text-center">Student branch chapters and affinity groups</h2>
      <div className="flex flex-wrap justify-center px-4 py-4 mx-16">
        {societies.map((society) => (
          <div
            key={society.id}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4
            border-2 border-[#49A79D] rounded-lg p-2 m-4
            hover:shadow-xl transition duration-300 ease-in-out
            "
          >
            <img
              src={society.imageSrc}
              alt={society.name}
              className="w-40 h-36 text-center mx-auto hover:scale-110 transition duration-300 ease-in-out"


            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Societies;
