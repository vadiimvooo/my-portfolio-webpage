import React from "react";
import cn from 'classnames';
import { Navbar } from "../../components/Navbar";
import { HashRouter} from 'react-router-dom';
import { Theme } from '../../types/Theme';
import './Page.scss';
import { PageBackground } from "../../components/PageBackground";
import { DeveloperInfo } from "../../components/DeveloperInfo";
import { AnimatedRoutes } from "../../components/AnimatedRoutes";

type Props = {
  isChecked: boolean,
  changeIsChecked: React.Dispatch<React.SetStateAction<boolean>>,
  theme: string,
  windowSize: number[],
  isBurgerMenuChecked: boolean,
  setBurgerMenuChecked: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Page: React.FC<Props> = React.memo(({ 
  isChecked, 
  changeIsChecked,
  theme,
  windowSize,
  isBurgerMenuChecked,
  setBurgerMenuChecked,
}) => {
  const isDarkTheme = theme === Theme.dark;

  return (
    <div className="page">
      <PageBackground isDarkTheme={isDarkTheme} />

      <HashRouter>
        <div className={cn(
            "page__content",
            { 'page__content--dark-theme': isDarkTheme },
          )
        }
        >
          <Navbar 
            isChecked={isChecked} 
            changeIsChecked={changeIsChecked} 
            windowSize={windowSize}
            isBurgerMenuChecked={isBurgerMenuChecked}
            setBurgerMenuChecked={setBurgerMenuChecked}
            isDarkTheme={isDarkTheme}
          />
          
          <div className="page__info">
            <DeveloperInfo isDarkTheme={isDarkTheme} />
            <div className="page__main-content">
              <AnimatedRoutes isDarkTheme={isDarkTheme} windowSize={windowSize} />
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
});
