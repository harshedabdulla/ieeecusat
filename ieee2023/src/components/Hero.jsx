import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animation from '../assets/84855-engineering-infrastructure.json';
import { Link } from 'react-router-dom';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
  };

  const animationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }
  };

  return (
    <div>
      <section className="bg-black dark:bg-violet-900 mt-4 w-screen">
        <motion.div
          className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mr-auto place-self-center lg:col-span-7">
            <motion.h3
              className="max-w-2xl mb-4 text-3xl tracking-tight leading-none md:text-2xl xl:text-4xl text-white"
              variants={textVariants}
            >
              IEEE STUDENT BRANCH
            </motion.h3>
            <motion.h6
              className="max-w-4xl mb-4 tracking-tight leading-none xl:text-2xl font-extrabold text-white"
              variants={textVariants}
            >
              COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY
            </motion.h6>
            <hr className="w-80" />
            <br />
            <motion.p
              className="max-w-2xl mb-6 text-[#49A79D] lg:mb-8 md:text-lg lg:text-xl"
              variants={textVariants}
            >
              We the management, faculty and students of Cochin University of Science and
              Technology, make it a point to align ourselves with the goals and vision of
              IEEE. We push all the members to innovate, partake and grow through the
              various activities that are conducted for and by the club.
            </motion.p>
            <Link to="/events">
              <motion.a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-[#49A79D] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                variants={buttonVariants}
              >
                EVENTS
              </motion.a>
            </Link>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#49A79D] border border-[#49A79D] rounded-lg focus:ring-4 focus:ring-gray-100"
              variants={buttonVariants}
            >
              Learn more
            </motion.a>
          </div>
          <motion.div
            className="lg:mt-0 lg:col-span-5 lg:flex hidden md:block"
            variants={animationVariants}
          >
            <Lottie animationData={animation} height={400} width={300} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
