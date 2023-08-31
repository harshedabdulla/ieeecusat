import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Flagship from './Flagship'
import EventCard from './EventCard';
import aksc from '../assets/event/aksc.jpeg';
import back from '../assets/event/back.jpeg';
import congo from '../assets/event/congo.jpeg';
import sight from '../assets/event/sight.jpeg';
import tthunt from '../assets/event/tthunt.jpeg';


function Events() {
  const eventData = {
    poster: back,
    status: 'Upcoming',
    date: '24',
    month: 'May',
  };
  const flagshipEvent = {
    location: 'Seminar Complex',
    date: '2nd June 2023',
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
          <h3 className="text-3xl text-orange-400 text-center mb-12">Past Events</h3>
        <div className="flex flex-wrap justify-center mx-auto">
        
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData} />
  </div>
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData} />
  </div>
  <div className="lg:w-1/3 lg:px-4 md:w-1/2 md:px-2 mb-8 mx-auto">
    <EventCard {...eventData} />
  </div>
  </div>
</div>

        
        
       
    </div>
  )
}

export default Events