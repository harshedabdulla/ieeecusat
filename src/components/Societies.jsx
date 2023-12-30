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
      title:'CS (Computer Society)',
      desc:'Exploring the forefront of computing technology, CS focuses on innovative research, development, and applications in computer science.'
    },
    {
      id: 2,
      name: 'RAS',
      imageSrc: ras,
      title:'RAS (Robotics and Automation Society)',
      desc:'RAS is a hub of robotics and automation enthusiasts, working to promote the field through workshops, seminars, and competitions.'
    },
    {
        id: 3,
        name: 'photonics',
        imageSrc: pho,
        title:'Photonics',
        desc:'Photonics is a society dedicated to the study of light and its applications, from optical communications to quantum computing.'
    },
    {
        id: 4,
        name: 'ias',
        imageSrc: ias,
        title:'IAS (Industry Applications Society)',
        desc:'IAS is a society dedicated to the advancement of technological innovation and excellence for the benefit of humanity.'
    },
    {
        id: 5,
        name: 'aps',
        imageSrc: aps,
        title:'APS (Antennas and Propagation Society)',
        desc:'APS is a society dedicated to the study of electromagnetic waves and their applications, from wireless communications to radar systems.'
    },
    {
        id: 6,
        name: 'WIE',
        imageSrc: wie,
        title:'WIE (Women in Engineering)',
        desc:'Empowering women in the field of engineering, WIE promotes gender diversity and inclusion in the tech community.'
    },
    {
        id: 7,
        name: 'Pes',
        imageSrc: pes,
        title:'PES (Power & Energy Society)',
        desc:'PES is a society dedicated to the advancement of technology in the field of power and energy.'

    },
    
    
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl text-center text-[#01484C] mb-4">Societies</h1>
      <h2 className="text-xl text-[#01484C] mb-8 text-center">Student branch chapters and affinity groups</h2>
      <div className="flex flex-wrap justify-center px-4 py-4 mx-16 society-cards">
        {societies.map((society) => (
          <div key={society.id} className="society-card-container">
            <div className="society-card">
              <div className="society-card-front">
                <img src={society.imageSrc} alt={society.name} />
              </div>
              <div className="society-card-back">
                
                <h2 className='font-bold'>{society.title}</h2>
                <p>{society.desc}</p>
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
