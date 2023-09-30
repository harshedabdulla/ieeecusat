import React from 'react';

const Cards2 = ({ imageSrc, name, profession, institution, connectLink }) => {
  return (
    <div className='w-[200px] h-[260px] bg-transparent cursor-pointer group perspective'>
      <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
        <div className='absolute backface-hidden border-2 w-full h-full'>
          <img src={imageSrc} alt={name} className='w-full h-full' />
        </div>
        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
          <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-xl'>{profession}</p>
            <p className='text-xl'>{institution}</p>
            <a
              href={connectLink}
              className='bg-teal-500 px-4 py-1 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
