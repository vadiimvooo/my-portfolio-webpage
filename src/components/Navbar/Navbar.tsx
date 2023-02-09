import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { navLinks } from '../../types/Links';
import { Switch } from '../Switch';
import './Navbar.scss';
import { BurgerMenu } from '../BurgerMenu';

type Props = {
  isChecked: boolean,
  changeIsChecked: React.Dispatch<React.SetStateAction<boolean>>,
  windowSize: number[],
  isBurgerMenuChecked: boolean,
  setBurgerMenuChecked: React.Dispatch<React.SetStateAction<boolean>>,
  isDarkTheme: boolean,
};

export const Navbar: React.FC<Props> = React.memo(({
  isChecked,
  changeIsChecked,
  windowSize,
  isBurgerMenuChecked,
  setBurgerMenuChecked,
  isDarkTheme,
}) => {

  return (
    <div className='Navbar'>
      <Link to="/" className="Navbar__main-link">Vadym Voiedilo</Link>
      {windowSize[0] > 1200 
        && (
        <div className="Navbar__navigation">
        <nav>
          <ul className='Navbar__list'>
            {navLinks.map(navLink => (
              <li className="Navbar__element" key={navLink.id}>
                <NavLink to={`${navLink.value}`} className="Navbar__link">
                  {navLink.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Switch isChecked={isChecked} changeIsChecked={changeIsChecked} />
      </div>
        )
      }

      {windowSize[0] <= 1200 && (
        <BurgerMenu 
          isBurgerMenuChecked={isBurgerMenuChecked} 
          setBurgerMenuChecked={setBurgerMenuChecked}
          isDarkTheme={isDarkTheme}
        />
      )
      }
    </div>
  );
});

