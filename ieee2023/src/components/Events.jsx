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
        <EventCard {...eventData} />
    </div>
  )
}

export default Events