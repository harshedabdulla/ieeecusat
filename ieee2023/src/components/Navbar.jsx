import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo4 from '../assets/logo3.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white pt-3 pb-3 ${isScrolled ? 'fixed top-0 z-50 w-full' : ''}`}>
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-8">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo4} alt="IEEE Icon" className="h-9 mt-2" />
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link
                to="/#home"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Home
              </Link>
              <HashLink
                smooth
                to="/#about"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="/#highlights"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Highlights
              </HashLink>
              <HashLink
                smooth
                to="/events"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Events
              </HashLink>
              <HashLink
                smooth
                to="/execom"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Execom
              </HashLink>

              <HashLink
                smooth
                to="/contacts"
                className="hover:text-gray-900 px-3 py-2 rounded-md text-sm"
              >
                Contacts
              </HashLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <motion.button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={toggleMenu}
              initial={false}
              animate={isMenuOpen ? 'open' : 'closed'}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 180 },
                }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
              <motion.svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 180 },
                }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3 shadow-sm">
          <Link to="/" className="hover:text-gray-900 block px-3 py-2 text-base">Home</Link>
          <HashLink to="/#about" className="hover:text-gray-900 block px-3 py-2 text-base">About</HashLink>
          <HashLink to="/events" className="hover:text-gray-900 block px-3 py-2 text-base">Events</HashLink>
          <HashLink to="/execom" className="hover:text-gray-900 block px-3 py-2 text-base">Execom</HashLink>
          <HashLink to="/#highlights" className="hover:text-gray-900 block px-3 py-2 text-base">Highlights</HashLink>
          <HashLink to="/contacts" className="hover:text-gray-900 block px-3 py-2 text-base">Contacts</HashLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
