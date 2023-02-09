import React from 'react';
import cn from 'classnames';
import './QualificationCard.scss';

type Props = {
  profession: string,
  country: string,
  city: string,
  university: string,
  start: string,
  end: string,
  degree?: string,
  isDarkTheme: boolean,
}

export const QualificationCard: React.FC<Props> = ({ 
  profession,
  country,
  city,
  university,
  start,
  end,
  degree,
  isDarkTheme,
}) => {
  return (
    <div className="QualificationCard">
      <div className="QualificationCard__profession">
        <h3 className={cn(
          "QualificationCard__profession-name",
          { 'QualificationCard--dark-theme': isDarkTheme },
        )}>
          {profession}
        </h3>

        {degree && (
          <p 
            className={cn(
              'QualificationCard__profession-degree',
              { "QualificationCard--dark-theme": isDarkTheme },
            )}
          >
            {degree}
          </p>
        )}
      </div>

      <div className="QualificationCard__description">
        <p 
          className="QualificationCard__location" 
          style={{ color: isDarkTheme ? 'rgb(150, 150, 150)' : ''}}
        >
          {`${country}, ${city} - ${university}`}
        </p>
        <p className="QualificationCard__duration">
          {`${start} - ${end}`}
        </p>
      </div>
    </div>
  );
};
