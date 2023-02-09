import React from 'react'
import './Button.scss';

type Props = {
  name: string,
  link: string,
}

export const Button: React.FC<Props> = ({ name, link }) => {
  return (
    <a href={link} className="Button">{name}</a>
  );
};
