import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Card from '../components/Card'
import Aadarsh from '../assets/execom/Aadarsh.jpeg'
import Adarsh from '../assets/execom/Adarsh.jpg'
import Ajmal from '../assets/execom/Ajmal.png'
import Anand from '../assets/execom/anand.jpg'
import Angelo from '../assets/execom/angelo.jpeg'
import Archa from '../assets/execom/Archa.jpg'
import Arjun from '../assets/execom/Arjun.jpg'
import ATHULSHA from '../assets/execom/ATHULSHA.jpeg'
import Diksha from '../assets/execom/Diksha.jpg'
import Eldhose from '../assets/execom/Eldhose.jpg'
import Evlyn from '../assets/execom/Evlyn.jpg'
import Ghaada from '../assets/execom/ghaadha.jpeg'
import Mrudul from '../assets/execom/mrudul.jpeg'
import Nandana from '../assets/execom/nandana.jpeg'
import Aman from '../assets/execom/aman.jpeg'
import Anupama from '../assets/execom/anupama.jpeg'
import Abhijith from '../assets/execom/abhijith.png'
import nandu from '../assets/execom/nandu.jpeg'
import Gokul from '../assets/execom/Gokul.jpg'
import Harimurali from '../assets/execom/Harimurali.jpeg'
import Harshed from '../assets/execom/Harshed.jpg'
import John from '../assets/execom/John.jpg'
import Kevin from '../assets/execom/Kevin.jpg'
import Lakshmi from '../assets/execom/Lakshmim.jpeg'
import Manasi from '../assets/execom/Manasi.jpg'
import Nayana from '../assets/execom/Nayana.jpeg'
import Pavithra from '../assets/execom/Pavithra.jpg'
import Pravaal from '../assets/execom/Pravaal.jpeg'
import Punnya from '../assets/execom/Punnya.jpg'
import Sameer from '../assets/execom/Sameer.jpeg'
import Sandra from '../assets/execom/Sandra.jpg'
import SRADHA from '../assets/execom/SRADHA.jpg'
import TANU from '../assets/execom/TANU.jpg'
import Vinod from '../assets/execom/vinod.jpeg'
import Yadhu from '../assets/execom/yadhu.jpeg'
import Hiba from '../assets/execom/hiba.jpeg'
import vignesh from '../assets/execom/vignesh.jpeg'
import linsa from '../assets/execom/linsa.jpg'
import malavikab from '../assets/execom/malavikab.jpeg'
import lakshmi from '../assets/execom/lakshmi.jpeg'
import Malavika from '../assets/execom/malavikaec.png'
import Vishaka from '../assets/execom/vishaka.jpeg'

function Execom() {
  return (
    <div>
      <Navbar />
      <Title title="EXECOM '23" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Adarsh}
              name="Adarsh K"
              position="Chairperson"
              ieeeno="S7 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Nayana}
              name="Nayana Rajeev"
              position="Secretary"
              ieeeno="20BCE10001"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Harimurali}
              name="Harimurali"
              position="Vice Chair"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Lakshmi}
              name="Lakshmi Menon"
              position="Joint Secretory"
              ieeeno="20BCE10001"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Sameer}
              name="Abdulla Sameer"
              position="Treasurer"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Harshed}
              name="Harshed Abdulla"
              position="Webmaster"
              ieeeno="S5 CSE"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card imgSrc={nandu} name="Nandu" position="ECC" ieeeno="S7 ECE" />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Mrudul}
              name="Mrudul John"
              position="LINK Rep"
              ieeeno="S5 IT"
            />
          </div>
        </div>
        <h1 className="text-4xl text-center font-bold p-4 mb-4">CS</h1>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={TANU}
              name="Tanu Shree"
              position="CS Chair"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Evlyn}
              name="Evlyn"
              position="CS Secretory"
              ieeeno="S5 IT"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Nandana}
              name="Nandana S"
              position="WIC"
              ieeeno="S5 IT"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Pravaal}
              name="Praval B Nath"
              position="SIG AI"
              ieeeno="S5 CSE"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">WIE</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Anupama}
              name="Anupama B"
              position="WIE Chair"
              ieeeno="S5 EEE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Malavika}
              name="Malavika"
              position="WIE Secretory"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">IAS</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Pavithra}
              name="Pavithra M N"
              position="IAS Chair"
              ieeeno="20BCE10001"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Aman}
              name="Aman"
              position="IAS Secretory"
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Gokul}
              name="Gokul"
              position="IAS Vice Chair"
              ieeeno="20BCE10001"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">RAS</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Angelo}
              name="Angelo Antu"
              position="RAS Chair"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={ATHULSHA}
              name="Athulsha K"
              position="RAS Secretory"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">PHOTONICS</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Vinod}
              name="Vinod P"
              position="Photonics Chair"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={malavikab}
              name="Malavika B"
              position="Vice Chair"
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={linsa}
              name="Linsa G J"
              position="Treasurer"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={lakshmi}
              name="Lakshmi S"
              position="Women in photonics coordinator"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Yadhu}
              name="Yadhukrishnan ET"
              position="Secretory"
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Hiba}
              name="Hiba S"
              position="Joint Secretory"
              ieeeno="S5 ECE"
            />
          </div>
        </div>

        <h3 className="text-4xl text-center font-bold p-4 mb-4">PES</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={SRADHA}
              name="Sradha"
              position="PES Chair"
              ieeeno="20BCE10001"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Vishaka}
              name="Vishaka"
              position="PES Secretory"
              ieeeno="20BCE10001"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">Media Team</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Anand}
              name="Anand K Suni"
              position="Media Head"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={vignesh}
              name="Vignesh Krishnan KR"
              position="Media Associate"
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Diksha}
              name="Diksha Srivastava"
              position="Media Associate"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={John}
              name="John Babu K"
              position="Media Associate"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Manasi}
              name="Manasi TP"
              position="Media Associate"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Kevin}
              name="Kevin Davees"
              position="Media Associate"
              ieeeno="S5 CSE"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">
          Outreach Team
        </h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Sandra}
              name="Sandra Rajesh"
              position="Head"
              ieeeno="20BCE10001"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Abhijith}
              name="Abhijith P"
              position="Associate"
              ieeeno="20BCE10001"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Arjun}
              name="Arjun B"
              position="Associate"
              ieeeno="S5 IT"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Archa}
              name="Archa S B"
              position="Associate"
              ieeeno="20BCE10001"
            />
          </div>
        </div>
        <h3 className="text-4xl text-center font-bold p-4 mb-4">
          Content Team
        </h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Ghaada}
              name="Ghaada Sideeque"
              position="Content Head"
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Manasi}
              name="Devu AP"
              position="Content Associate"
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Aadarsh}
              name="Adarsh PS"
              position="Content Associate"
              ieeeno="S5 ECE"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Punnya}
              name="Punnya Nair"
              position="Content Associate"
              ieeeno="S5 CSE"
            />
          </div>
        </div>

        <h3 className="text-4xl text-center font-bold p-4 mb-4">Tech Team</h3>
        <div className="flex flex-wrap justify-center lg:-mx-4 md:-mx-2">
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Ajmal}
              name="Ajmal Roshan"
              position=""
              ieeeno="S5 CSE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card
              imgSrc={Harshed}
              name="Harshed Abdulla"
              position=""
              ieeeno="S5 ECE"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8">
            <Card imgSrc={Eldhose} name="Eldhose" position="" ieeeno="S5 ECE" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Execom
