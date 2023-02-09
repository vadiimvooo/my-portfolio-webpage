import React from 'react';
import './Switch.scss';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

type Props = {
  isChecked: boolean,
  changeIsChecked: React.Dispatch<React.SetStateAction<boolean>>,
  className?: string,
};

export const Switch: React.FC<Props> = React.memo(({ isChecked, changeIsChecked, className }) => {
  return (
    <label className={`${className || ''}  Switch`}>
      <input 
        type="checkbox" 
        className='Switch__checkbox' 
        checked={isChecked} 
        onChange={() => changeIsChecked(!isChecked)}
      />
      <span className="Switch__slider">
        {isChecked 
          ? <MdOutlineDarkMode className="Switch__slider-mode"/> 
          : <MdOutlineLightMode className='Switch__slider-mode'/>
        }
      </span>
    </label>
  );
});
