import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import EventCard from '../components/EventCard';
import client from '../client.js'; 
import imageUrlBuilder from '@sanity/image-url';
import '../styles/Search.css'
function Events() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source).url();
  }

  useEffect(() => {
    client.fetch('*[_type == "event"]').then((data) => {
      setEvents(data);
    }).catch(console.error);
  }, []);

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Title title="Events" />
      <div className="search-bar-container my-4 mx-auto text-center">
        <input
          type="text"
          className="search-input p-2 border border-gray-300 rounded"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center mx-auto">
        {filteredEvents.map((event) => (
          <div key={event._id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
            <EventCard 
              poster={urlFor(event.poster)}
              status={event.name}
              date={event.date}
              month={event.month}
              link={event.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
