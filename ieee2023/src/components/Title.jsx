import React from 'react';

const Title = ({ title }) => {
  return (
    <section className={`flex justify-center items-center bg-blue-900 mt-6 mb-8 p-8`}>
      <h1 className="text-white text-6xl md:text-6xl lg:text-4xl p-20">{title}</h1>
    </section>
  );
};

export default Title;
