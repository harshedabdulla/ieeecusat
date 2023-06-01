import React from 'react';
import { motion } from 'framer-motion';
import logocusat2 from '../assets/logocusat2.png';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-4/5">
        <motion.h1
          className="text-4xl text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-center mt-2 text-[#49A79D]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          IEEE CUSAT STUDENT BRANCH
        </motion.p>
        <div className="flex flex-col sm:flex-row mt-8">
          <div className="w-full sm:w-2/5">
            <motion.div
              className="flex items-center justify-center sm:justify-start h-full w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src={logocusat2}
                alt="IEEE Logo"
                className="h-64 w-64 object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full sm:w-3/5 px-4 mt-4 sm:mt-0">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A student branch of the IEEE was established at Cochin University of
              Science and Technology in 1986 as the 4th Student Branch Chapter in
              IEEE Kerala section. Majority of the members are undergraduates from
              School of Engineering. The IEEE student members receive all the
              technical and professional benefits of IEEE membership at subsidized
              rates. The branch is supervised by a Branch Counsellor who is a
              faculty member of the university having an IEEE membership. We
              continue our voyage across the skies of career building and critical
              skills, with all our 200 plus members in tow. Challenges and
              experiences have only made us better over the years, and here we are
              one of the finest branches in the hub.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
