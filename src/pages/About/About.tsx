import React, { useRef } from 'react';
import cn from 'classnames';
import { AboutCard } from '../../components/AboutCard';
import { AboutCards } from '../../types/AboutCards';
import expIcon from '../../images/icons/experience.svg';
import darkExpIconfrom from '../../images/icons/experience-dark.svg';
import projectsIcon from '../../images/icons/Projects.svg';
import projectsIconDark from '../../images/icons/Projects-dark.svg';
import education from '../../images/icons/education.svg';
import educationDark from '../../images/icons/education-dark.svg';
import './About.scss';
import './Qualification.scss';
import './AboutMe.scss';
import { QualificationCard } from '../../components/QualificationCard';
import { QualificationCards } from '../../types/QualificationCards';
import { motion } from 'framer-motion';
import { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar';
import { Scrollbar } from 'smooth-scrollbar-react';

type Props = {
  isDarkTheme: boolean,
  windowSize: any[],
}

export const About: React.FC<Props> = ({ isDarkTheme, windowSize }) => {
  const aboutCard: AboutCards[] = [
    { 
      id: 1,
      link: !isDarkTheme ? expIcon : darkExpIconfrom,
      description: 'Years experience',
      years: '1',
    },
    { 
      id: 2,
      link: !isDarkTheme ? projectsIcon : projectsIconDark,
      description: 'Projects completed',
      years: '4' 
    },
  ];

  const scrollbar = useRef<BaseScrollbar | null>(null);

  const qualificationCards: QualificationCards[] = [
    {
      id: 1,
      profession: "Automation",
      city: "Lviv",
      university: "Ukrainian Academy of Printing",
      country: "Ukraine",
      start: '2017',
      end: '2021',
      degree: 'Bachelor degree',
    },
    {
      id: 2,
      profession: "Automation",
      city: "Lviv",
      university: "Ukrainian Academy of Printing",
      country: "Ukraine",
      start: '2021',
      end: '2023',
      degree: 'Master\'s degree',
    },
  ]
  
  return (
    <motion.div 
      className='AboutMe'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <section className="About AboutMe__section">
        <div className="About-container">
          <h2 className="About__header">About</h2>
          <p className="About__description">
            Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.
          </p>
          <div className="About__experience-container">
            {aboutCard.map(card => (
              <AboutCard
                isDarkTheme={isDarkTheme}
                description={card.description} 
                link={card.link} 
                years={card.years}
                key={card.id}
              />
            ))}
            
          </div>
        </div>
      </section>
      <section className="Qualification AboutMe__section">
        <div className="Qualification__header-container">
          <h2 className="Qualification__header">Qualification</h2>
          <p className="Qualification__description">
            My personal journey
          </p>
        </div>
        <div className="Qualification__profession">
          <img src={
            !isDarkTheme 
              ? education
              : educationDark
            } 
            alt="" 
            className="Qualification__icon" 
          />
          <p className={cn(
            "Qualification__profession-description",
            { 'Qualification--dark-theme': isDarkTheme }
          )}>
            Education
          </p>
        </div>
          
        {windowSize[0] <= 1024
          ? (
            <Scrollbar
              damping={0.08}
              ref={scrollbar}
              renderByPixels
            >
              <div className="Qualification__cards">
                {qualificationCards.map(qualificationCard => (
                    <QualificationCard 
                      key={qualificationCard.id}
                      country={qualificationCard.country}
                      profession={qualificationCard.profession}
                      city={qualificationCard.city}
                      university={qualificationCard.university}
                      start={qualificationCard.start}
                      end={qualificationCard.end}
                      degree={qualificationCard.degree}
                      isDarkTheme={isDarkTheme}
                    />
                  
                ))}
              </div>
            </Scrollbar>
          )
          : (
            <div className="Qualification__cards">
              {qualificationCards.map(qualificationCard => (
                <QualificationCard 
                  key={qualificationCard.id}
                  country={qualificationCard.country}
                  profession={qualificationCard.profession}
                  city={qualificationCard.city}
                  university={qualificationCard.university}
                  start={qualificationCard.start}
                  end={qualificationCard.end}
                  degree={qualificationCard.degree}
                  isDarkTheme={isDarkTheme}
                />
              ))}
            </div>
          )}
        
      </section>
    </motion.div>
  );
};