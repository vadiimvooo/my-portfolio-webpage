import React from 'react';
import './AboutCard.scss';
import cn from 'classnames';

type Props = {
  description: string,
  years: string,
  link: string,
  isDarkTheme: boolean,
}

export const AboutCard: React.FC<Props> = ({
  description,
  years,
  link,
  isDarkTheme,
}) => {

  return (
    <div className="AboutCard" key={link}>
      <img src={link} alt={description} className="AboutCard__image" />
      <div className='AboutCard__description-container'>
        <p className={cn(
          'AboutCard__description', 
          { 'AboutCard--dark-theme': isDarkTheme }
        )}>
          {description}
        </p>
        <p className={cn(
          'AboutCard__years', 
          { 'AboutCard--dark-theme': isDarkTheme },
        )}>
          {years}
        </p>
      </div>
    </div>
  );
};
