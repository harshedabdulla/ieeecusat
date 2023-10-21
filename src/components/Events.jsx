import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Flagship from './Flagship'
import EventCard from './EventCard';
import aksc from '../assets/event/aksc.jpeg';
import back from '../assets/event/back.jpeg';
import congo from '../assets/event/congo.jpeg';
import sight from '../assets/event/sight.jpeg';



function Events() {
  const eventData1 = {
    poster: back,
    status: 'ORE is back',
    date: '24',
    month: 'May',
  };
  const eventData2 = {
    poster: congo,
    status: 'Rewards Distributed',
    date: '2',
    month: 'Aug',
  };
  const eventData3 = {
    poster: sight,
    status: 'IEEE SKC 23',
    date: '2',
    month: 'Sept',
  };

  const flagshipEvent = {
    location: 'TKMCE Kollam',
    date: '17th September 2023',
    mode: 'Offline',
    registerLink: 'https://example.com/register',
    imageSrc: aksc,
  };
  return (
    <div>
        <Navbar/>
        <Title title="Events" />
        <Flagship event={flagshipEvent} />
        <div className="flex flex-wrap justify-center mx-auto">
          <h3 className="text-3xl text-orange-400 text-center mb-10">Past Events</h3>
        <div className="flex flex-wrap justify-center mx-auto">
        
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData1} />
  </div>
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData2} />
  </div>
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData3} />
  </div>
  </div>
  </div>


        
        
       
    </div>
  )
}

export default Events