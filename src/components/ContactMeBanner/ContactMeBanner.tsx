import React from 'react'
import './ContactMeBanner.scss';
import { motion } from 'framer-motion';

export const ContactMeBanner: React.FC = () => {
  return (
    <motion.div 
      className='ContactMeBanner'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h3 className='ContactMeBanner__header'>You have a new project?</h3>
      <p className='ContactMeBanner__description'>Contact me now and i will help you to implement it</p>
    </motion.div>
  );
};