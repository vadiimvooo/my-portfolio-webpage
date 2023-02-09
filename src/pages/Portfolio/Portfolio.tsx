import React from 'react';
import '../../styles/Section/Section.scss';
import './Portfolio.scss';
import cn from 'classnames';
import bike from '../../images/portfolio/Screenshot_1.png';
import dia from '../../images/portfolio/Screenshot_2.png';
import todo from '../../images/portfolio/Screenshot_3.png';
import { SwiperSlider } from '../../components/Swiper';
import { motion } from 'framer-motion';


type Props = {
  isDarkTheme: boolean,
}

const portfolioList = [
  {
    id: 0,
    imgUrl: bike,
    portfolioName:"Bike landing",
    portfolioDescription:"Fully responsive layout was made by using CSS Grid and Flexbox (mobiles, tablets, laptops, high screens). Stack: HTML5, SCSS"
  },
  {id: 1,
  imgUrl: dia,
  portfolioName: "Dia landing",
  portfolioDescription: "Fully responsive layout was made by using CSS Grid and Flexbox (mobiles, tablets, laptops, high screens). Stack: HTML5, SCSS"},
  {
    id: 2,
    imgUrl: todo,
    portfolioName: "Todo app",
    portfolioDescription: "This is an app where you can make your own list of todos. Stack: HTML5, SCSS, React.js, JS, BEM"
  }]

export const Portfolio: React.FC<Props> = ({ isDarkTheme }) => {

  return (
    <motion.section 
      className="Portfolio Section"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="Portfolio__header-container Section__header-container">
        <h2 className={cn(
          "Portfolio__header Section__header",
          { 'Section--dark-theme': isDarkTheme },
        )}>
          Portfolio
        </h2>
        <p className="Portfolio__header-description Section__header-description">
          My recent work
        </p>
      </div>
      <SwiperSlider isDarkTheme={isDarkTheme} portfolioList={portfolioList} />
    </motion.section>
  );
};
