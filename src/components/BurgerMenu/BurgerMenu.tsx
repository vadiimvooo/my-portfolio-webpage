import React from 'react';
import './BurgerMenu.scss';
import { AiOutlineMenu } from 'react-icons/ai';

type Props = {
  isBurgerMenuChecked: boolean,
  setBurgerMenuChecked: React.Dispatch<React.SetStateAction<boolean>>,
  isDarkTheme: boolean,
}

export const BurgerMenu: React.FC<Props> = ({
  isBurgerMenuChecked,
  setBurgerMenuChecked,
  isDarkTheme,
}) => {

  return (
    <div className='BurgerMenu'>
      <label className='BurgerMenu__button-container'>
        <input 
          type="button" 
          className='BurgerMenu__button-input'
          onClick={() => {
            setBurgerMenuChecked(true);
            document.body.style.overflow="hidden"
          }}
        />
        <span className="BurgerMenu__button" >
          <AiOutlineMenu className='BurgerMenu__button-image' style={{fill: isDarkTheme ? 'white' : '#383838'}}/>
        </span>
      </label>
    </div>
  );
};
