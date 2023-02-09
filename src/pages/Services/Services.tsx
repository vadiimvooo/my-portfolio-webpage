import React from 'react'
import cn from 'classnames';
import frontEnd from '../../images/full-stack.jpg';
import './Services.scss';
import { motion } from 'framer-motion';

type Props = {
  isDarkTheme: boolean,
}

export const Services: React.FC<Props> = ({ isDarkTheme }) => {
  return (
    <motion.section 
      className="Services Section"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="Section__header-container Services__header-container">
        <h2 className={cn(
            "Skills__header Section__header",
            { 'Section--dark-theme': isDarkTheme },
          )}
        >
          Services
        </h2>
        <p 
          className="Skills__header-description Section__header-description"
        >
          What i offer
        </p>
      </div>

      <p className="Services__description">
        I develop user interface, Web page development, I create UX element interface & I position your company.
      </p>
      <img 
        src={frontEnd}
        alt="front-end"
        width="400px"
        className="Services__image"
      />
      <p className={cn(
        {'Section--dark-theme': isDarkTheme},
        "Services__service-name",
      )}>
        Fullstack developer
      </p>
    </motion.section>
  );
};
