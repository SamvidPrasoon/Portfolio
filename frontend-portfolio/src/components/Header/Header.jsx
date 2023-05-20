import React from 'react';
import { FaHandPeace, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { color, motion } from 'framer-motion';
const Header = () => {
  return (
    <motion.section
      class='bg-white dark:bg-gray-900 bg-gradient-to-b from-blue-50 to-transparent  w-full h-full absolute '
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: 'tween' }}
    >
      <div class='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative'>
        <h1 class='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Hello I am Samvid A full Stack Web Developer
        </h1>
        <p class='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200'>
          <span className='text-4xl'>Welcome To My Portfolio</span>
          <br /> Explore My Projects Built On Different Tech Stacks
          <FaHandPeace className='m-3 text-2xl inline text-yellow-300' /> .
        </p>
        <div className='grid grid-cols-4  gap-4 mt-5 '>
          <motion.div
            className='  text-center rounded-full text-blue-600 p-2'
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 2 }}
          >
            <FaReact
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                display: 'inline-block',
                width: '50px',
                height: '50px',
              }}
            />
          </motion.div>
          <motion.div
            className='text-center rounded-full text-indigo-400 p-2'
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 2 }}
          >
            <FaNode
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                display: 'inline-block',
                width: '50px',
                height: '50px',
              }}
            />
          </motion.div>
          <motion.div
            className='text-center rounded-full  text-green-400 p-2'
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 2 }}
          >
            <SiMongodb
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                display: 'inline-block',
                width: '50px',
                height: '50px',
              }}
            />
          </motion.div>
          <motion.div
            className='text-center rounded-full text-blue-500 p-2'
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 2 }}
          >
            <SiMysql
              style={{
                textAlign: 'center',
                verticalAlign: 'center',
                display: 'inline-block',
                width: '50px',
                height: '50px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
