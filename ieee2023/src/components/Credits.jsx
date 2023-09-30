import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Cards2 from './Cards2';
import Harsh from '../assets/execom/Harshed.jpg';
import Adi from '../assets/execom/aditya.jpeg';

const Credits = () => {
  return (
    <div>
      <Navbar />
      <Title title="Credits" />
      <div className='flex justify-center m-4'>
        <div className='grid lg:grid-cols-3 gap-16 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto'>
              <Cards2
              imageSrc={Harsh}
              name="Harshed"
              profession="Web Developer"
              institution="S5 CSE"
              connectLink="https://www.linkedin.com/in/harshed-abdulla/"
            />
         
            <Cards2
              imageSrc={Adi}
              name="Aditya"
              profession="UI Designer"
              institution="S5 CSE"
              connectLink="https://in.linkedin.com/in/adithya-krishna-627a4a253"
            />
         
            <Cards2
              imageSrc={Harsh}
              name="Eldhose"
              profession="Web Developer"
              institution="S5 EC"
              connectLink=""
            />
         
       
           
    </div>
    </div>
    </div>
       
  );
};

export default Credits;
