import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Card from './Card'
import Aadarsh from '../assets/execom/Aadarsh.jpeg'
import Adarsh from '../assets/execom/Adarsh.jpg'
import Ajmal from '../assets/execom/Ajmal.png'
import Albin from '../assets/execom/Albin.jpg'
import Anand from '../assets/execom/anand.jpg'
import Angelo from '../assets/execom/Angelo.jpg'
import Anupama from '../assets/execom/Anupama.jpg'
import Archa from '../assets/execom/Archa.jpg'
import Arjun from '../assets/execom/Arjun.jpg'
import ATHULSHA from '../assets/execom/ATHULSHA.jpeg'
import Diksha from '../assets/execom/Diksha.jpg'
import Eldhose from '../assets/execom/Eldhose.jpg'
import Evlyn from '../assets/execom/Evlyn.jpg'
//import Ghaadha from '../assets/execom/Ghaadha.heic'
import Gokul from '../assets/execom/Gokul.jpg'
//import Harimurali from '../assets/execom/Harimurali.heic'
import Harshed from '../assets/execom/Harshed.jpg'
import John from '../assets/execom/John.jpg'
import Kevin from '../assets/execom/Kevin.jpg'
//import Lakshmi from '../assets/execom/Lakshmi.jpeg'
import Malavika from '../assets/execom/Malavika.jpg'
import Manasi from '../assets/execom/Manasi.jpg'
import Mohit from '../assets/execom/Mohit.jpg'
import Mrudul from '../assets/execom/Mrudul.jpg'
import Nayana from '../assets/execom/Nayana.jpeg'
import Pavithra from '../assets/execom/Pavithra.jpg'
import Pravaal from '../assets/execom/Pravaal.jpeg'
import Punnya from '../assets/execom/Punnya.jpg'
import Sameer from '../assets/execom/Sameer.jpeg'
import Sandra from '../assets/execom/Sandra.jpg'
import SRADHA from '../assets/execom/SRADHA.jpg'
import TANU from '../assets/execom/TANU.jpg'
import vignesh from '../assets/execom/vignesh.jpeg'

function Execom() {
  return (
    <div>
        <Navbar />
        <Title title="EXECOM '23" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Adarsh} name="Adarsh EC" position="Chairperson" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Nayana} name="Nayana Rajeev" position="Secretory" ieeeno="20BCE10001" />
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
      <Card imgSrc={Mrudul} name="Mrudul John" position="LINK Rep" ieeeno="20BCE10001" />
    </div>
    </div>
  
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Sameer} name="Abdulla Sameer" position="Treasurer" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Harshed} name="Harshed Abdulla" position="Webmaster" ieeeno="20BCE10001" />
    </div>
  </div>
  <h1 className="text-4xl text-center p-4 mb-4">Society Heads</h1>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={TANU} name="Tanu Shree" position="CS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Evlyn} name="Evlyn" position="CS Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
   
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Nandana S" position="WIC" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Pravaal} name="Praval B Nath" position="SIG AI" ieeeno="20BCE10001" />
    </div>
  </div>
    <h3 className="text-3xl text-center p-4 mb-4">WIE</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Anupama} name="Anupama B" position="WIE Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Malavika} name="Malavika" position="WIE Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">IAS</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Pavithra} name="Pavithra M N" position="IAS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Mohit} name="Mohit" position="IAS Secretory" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Gokul} name="Gokul" position="IAS Vice Chair" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">RAS</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Angelo} name="Angelo Antu" position="RAS Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={ATHULSHA} name="Athulsha K" position="RAS Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">PES</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={SRADHA} name="Sradha" position="PES Chair" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Vishaka" position="PES Secretory" ieeeno="20BCE10001" />
    </div>
  </div>
  <h3 className="text-3xl text-center p-4 mb-4">Outreach Team</h3>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Sandra} name="Sandra Rajesh" position="Head" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc="https://via.placeholder.com/150" name="Abhijith P" position="Associate" ieeeno="20BCE10001" />
    </div>
  </div>
  <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Arjun} name="Arjun B" position="Associate" ieeeno="20BCE10001" />
    </div>
    <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
      <Card imgSrc={Archa} name="Archa S B" position="Associate" ieeeno="20BCE10001" />
    </div>
  </div>
</div>
</div>



  )
}

export default Execom