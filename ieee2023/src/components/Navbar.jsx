import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo4 from '../assets/logo3.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white pt-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-8">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo4} alt="IEEE Icon" className="h-9 mt-2"/>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              > 
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                About
              </Link>
              <Link
                to="/events"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Events
              </Link>
              <Link
                to="/execom"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Execom
              </Link>
              <Link
                to="/highlights"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Highlights
              </Link>
              <Link
                to="/contacts"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Contacts
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3 shadow-sm">
          <Link to="/" className="hover:text-gray-900 block px-3 py-2 text-base">Home</Link>
          <Link to="/about" className="hover:text-gray-900 block px-3 py-2 text-base">About</Link>
          <Link to="/events" className="hover:text-gray-900 block px-3 py-2 text-base">Events</Link>
          <Link to="/execom" className="hover:text-gray-900 block px-3 py-2 text-base">Execom</Link>
          <Link to="/highlights" className="hover:text-gray-900 block px-3 py-2 text-base">Highlights</Link>
          <Link to="/contacts" className="hover:text-gray-900 block px-3 py-2 text-base">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


