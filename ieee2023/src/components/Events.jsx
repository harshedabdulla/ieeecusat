import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Flagship from './Flagship'
import EventCard from './EventCard';


function Events() {
  const eventData = {
    poster: 'https://via.placeholder.com/300',
    status: 'Upcoming',
    date: '24',
    month: 'May',
  };
  const flagshipEvent = {
    location: 'Seminar Complex',
    date: '2nd June 2023',
    mode: 'Offline',
    registerLink: 'https://example.com/register',
    imageSrc: 'https://via.placeholder.com/800x600',
  };
  return (
    <div>
        <Navbar/>
        <Title title="Events" />
        <Flagship event={flagshipEvent} />
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
  )
}

export default Events