import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Card from './Card'

function Execom() {
  return (
    <div>
        <Navbar />
        <Title title="EXECOM '23" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Aditya EC" position="Chairperson" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Nayana Rajeev" position="Secretory" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Harimurali" position="Vice Chair" ieeeno="20BCE10001" />
    </div>
    </div>
    <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Lakshmi Menon" position="Joint Secretory" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Nandu" position="ECC" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Mrudul John" position="LINK Rep" ieeeno="20BCE10001" />
    </div>
    </div>
  
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Abdulla Sameer" position="Treasurer" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Harshed Abdulla" position="Webmaste" ieeeno="20BCE10001" />
    </div>
  </div>
  <h1 className="text-4xl text-center p-4 mb-4">Society Heads</h1>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Tanu Shree" position="CS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Evlyn" position="CS Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
   
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Nandana S" position="WIC" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Praval B Nath" position="SIG AI" ieeeno="20BCE10001" />
    </div>
  </div>
    <h3 className="text-3xl text-center p-4 mb-4">WIE</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Anupama B" position="WIE Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Malavika" position="WIE Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">IAS</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Pavithra M N" position="IAS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Mohit" position="IAS Secretory" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Gokul" position="IAS Vice Chair" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">RAS</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Angelo Antu" position="RAS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Athulsha K" position="RAS Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">PES</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Sradha" position="PES Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Vishaka" position="PES Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">Outreach Team</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Sandra Rajesh" position="Head" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Abhijith P" position="Associate" ieeeno="20BCE10001" />
    </div>
  </div>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Arjun B" position="Associate" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Archa S B" position="Associate" ieeeno="20BCE10001" />
    </div>
  </div>
</div>
</div>



  )
}

export default Execom