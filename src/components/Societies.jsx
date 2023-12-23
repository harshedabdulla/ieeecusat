import React from 'react';
import aps from '../assets/logo/IEEE_APS.png';
import cs from '../assets/logo/IEEE_CS.png';
import ias from '../assets/logo/IEEE_IAS.png';
import pes from '../assets/logo/IEEE_PES.png';
import ras from '../assets/logo/IEEE_RAS.png';
import wie from '../assets/logo/IEEE_WIE.png';
import pho from '../assets/logo/IEEE_photonics.png';
import '../styles/Societies.css';

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
    
    
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl text-center text-[#01484C] mb-4">Societies</h1>
      <h2 className="text-xl text-[#01484C] mb-8 text-center">Student branch chapters and affinity groups</h2>
      <div className="flex flex-wrap justify-center px-4 py-4 mx-16">
        {societies.map((society) => (
          <div key={society.id} className="society-card-container">
            <div className="society-card">
              <div className="society-card-front">
                <img src={society.imageSrc} alt={society.name} />
              </div>
              <div className="society-card-back">
                <h3>{society.name}</h3>
                <p>More details about {society.name}...</p>
                {/* Add more content here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Societies;
