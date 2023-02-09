import React from 'react';
import cn from 'classnames';
import { TfiHtml5 } from 'react-icons/tfi';
import { 
  SiCss3,
  SiJavascript,
  SiReact,
  SiMaterialui,
  SiTypescript,
  SiAdobephotoshop,
  SiFigma,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import './Skills.scss'
import '../../styles/Section/Section.scss'
import { motion } from 'framer-motion';

type Props = {
  isDarkTheme: boolean,
}

export const Skills: React.FC<Props> = ({ isDarkTheme }) => {
  const icons: any[] = [
    {title: 'Html', element: TfiHtml5, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {title: 'Css', element: SiCss3, link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics'},
    {title: 'Javascript', element: SiJavascript, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'},
    {title: 'React.js', element: SiReact, link: 'https://reactjs.org/docs/getting-started.html'},
    {title: 'Material UI', element: SiMaterialui, link: 'https://mui.com/'},
    {title: 'Sass', element: DiSass, link: 'https://sass-lang.com/'},
    {title: 'Typescript', element: SiTypescript, link: 'https://www.typescriptlang.org/'},
    {title: 'Photoshop', element: SiAdobephotoshop, link: 'https://www.adobe.com/products/photoshop.html'},
    {title: 'Figma', element: SiFigma, link: 'https://www.figma.com/community'},
  ]

  return (
    <motion.section 
      className="Skills Section"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="Skills__header-container Section__header-container">
        <h2 className={cn(
            "Skills__header Section__header",
            { 'Section--dark-theme': isDarkTheme },
          )}
        >
          Skills
        </h2>
        <p 
          className="Skills__header-description Section__header-description"
        >
          My technical level
        </p>
      </div>

      <div className="Skills__profession-container">
        <h3 
          className={cn(
            "Skills__profession-header",
            { 'Section--dark-theme': isDarkTheme },
          )}
        >
          Frontend Developer
        </h3>
        <p className="Skills__profession-description">More than 1 year</p>
      </div>

      <div className="Skills__cards">
        {icons.map((icon, i) => {
          const Icon = icon.element;

          return (
            <a 
              href={icon.link} 
              className="Skills__card"
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <Icon 
                className={cn(
                  "Skills__icons",
                  { 'Section--dark-theme': isDarkTheme },
                )}
                key={i}
              />
              <p 
                className={cn(
                  "Skills__icon-title",
                  { 'Section--dark-theme': isDarkTheme },
                )}
              >
                {icon.title}
              </p>
            </a>
          )
        })}
      </div>
    </motion.section>
  );
};
