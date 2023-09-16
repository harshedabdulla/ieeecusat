import React from 'react';
import Navbar from './Navbar';

function Contacts() {
  return (
    <div>
      <Navbar />

    <div className="container mx-auto py-8">
      
      <h1 className="text-3xl text-orange-400 text-center mb-12">Contact Us</h1>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-8 mb-6">
          <h2 className="text-3xl  mb-2">Contact Information</h2>
          <p className="mb-2">Cochin University of Science and Technology</p>
          <p className="mb-2">University Road ,South Kalamassery, Kochi, Kerala</p>
          <p className="mb-2">Phone: +919334653551</p>
          <p className="mb-2">Email: ieeesb@cusat.ac.in</p>
          
        </div>
        
        <div className="w-full md:w-1/2 px-8 mb-6">
         
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <button className="bg-[#49A79D] hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contacts;
