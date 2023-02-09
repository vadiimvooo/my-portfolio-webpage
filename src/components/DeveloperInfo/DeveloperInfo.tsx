import React from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import './DeveloperInfo.scss';
import me from '../../images/me.jpeg';
import { socialLinks } from '../../types/Links';

type Props = {
  isDarkTheme: boolean,
};

export const DeveloperInfo: React.FC<Props> = ({ isDarkTheme }) => {
  return (
    <section className='DeveloperInfo'>
      <div className="DeveloperInfo__image-container">
        <img src={me} alt="Vadym Voiedilo" className="DeveloperInfo__image"/>
      </div>

      <div className="DeveloperInfo__text-container">
        <h1 className="DeveloperInfo__name">Vadym Voiedilo</h1>

        <p 
          className={cn(
            'DeveloperInfo__dev',
            {'DeveloperInfo__dev--dark-theme': isDarkTheme},
          )}
        >
          Fullstack Developer
        </p>
      </div>

      <p className="DeveloperInfo__description">High level experience and development knowledge.</p>

      <div className="DeveloperInfo__links">
        {socialLinks.map(socialLink => (
          <a 
            href={socialLink.value}
            key={socialLink.id}
          >
            {socialLink.title}
          </a>
        ))}
      </div>

      <Button name="Contact me" link="https://t.me/ASDA7o"/>
    </section>
  );
};