import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import './App.scss';
import { Page } from './pages/Page';
import { Theme } from './types/Theme';
import { AiOutlineClose } from 'react-icons/ai';
import { Switch } from './components/Switch';
import './styles/burger-animation/burger-animation.css';

import {
  CSSTransition,
} from 'react-transition-group';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const [isBurgerMenuChecked, setBurgerMenuChecked] = useState(false);
  const theme = isChecked ? Theme.dark : Theme.light;
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const escFunction = useCallback((event: any) => {
    if (event.key === "Escape" && isBurgerMenuChecked) {
      setBurgerMenuChecked(false);
      document.body.style.overflow=""
    }
  }, [isBurgerMenuChecked]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    document.addEventListener("keydown", escFunction, false);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="App">
        <Page 
          isChecked={isChecked} 
          changeIsChecked={setIsChecked} 
          theme={theme} 
          windowSize={windowSize}
          isBurgerMenuChecked={isBurgerMenuChecked}
          setBurgerMenuChecked={setBurgerMenuChecked}
        />
          <CSSTransition
            in={isBurgerMenuChecked}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div 
              className="App__burger-menu"
              onClick={() => {
                setBurgerMenuChecked(!isBurgerMenuChecked);
                document.body.style.overflow="";
              }}
            > 
              <nav 
                className='App__burger-menu-nav'
                onClick={e => e.stopPropagation()}
              >
                <div className={cn(
                  "App__burger-menu-filter",
                  {'App__burger-menu-filter--dark-theme': theme === Theme.dark}
                )}></div>
                <ul className='App__burger-menu-list'>
                  <li className="App__burger-item">
                    <a href="#/about" className={cn(
                      'App__burger-link',
                      {'App__burger-link--dark-theme': theme === Theme.dark}
                    )}
                    onClick={() => {
                      setBurgerMenuChecked(false);
                      document.body.style.overflow="";
                    }}
                    >
                      About
                    </a>
                  </li>
                  <li className="App__burger-item">
                    <a href="#/skills" className={cn(
                      'App__burger-link',
                      {'App__burger-link--dark-theme': theme === Theme.dark}
                    )}
                    onClick={() => {
                      setBurgerMenuChecked(false);
                      document.body.style.overflow="";
                    }}
                    >
                      Skills
                    </a>
                  </li>
                  <li className="App__burger-item">
                    <a href="#/services" className={cn(
                      'App__burger-link',
                      {'App__burger-link--dark-theme': theme === Theme.dark}
                    )}
                    onClick={() => {
                      setBurgerMenuChecked(false);
                      document.body.style.overflow="";
                    }}
                    >
                      Services
                    </a>
                  </li>
                  <li className="App__burger-item">
                    <a href="#/portfolio" className={cn(
                      'App__burger-link',
                      {'App__burger-link--dark-theme': theme === Theme.dark}
                    )}
                    onClick={() => {
                      setBurgerMenuChecked(false);
                      document.body.style.overflow="";
    ;                }}
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
                <Switch isChecked={isChecked} changeIsChecked={setIsChecked} className="App__switch" />
              </nav>

              <label className='App__button-container'>
                <input 
                  type="button" 
                  className='App__button-input'
                  onClick={(e) => {
                    e.stopPropagation();
                    setBurgerMenuChecked(false);
                  }}
                />
                <span className="App__button">
                  <AiOutlineClose style={{fill: theme === Theme.dark ? 'white' : '#383838'}} className="App__button-image"/>
                </span>
              </label>
            </div>
          </CSSTransition>
    </div>
  );
}

export default App;
