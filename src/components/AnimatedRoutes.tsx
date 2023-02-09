import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { About } from '../pages/About';
import { NotFoundPage } from '../pages/NutFoundPage';
import { Portfolio } from '../pages/Portfolio';
import { Services } from '../pages/Services';
import { Skills } from '../pages/Skills';
import { ContactMeBanner } from './ContactMeBanner';

import { AnimatePresence } from 'framer-motion';

type Props = {
  isDarkTheme: boolean,
  windowSize: any[],
}

export const AnimatedRoutes: React.FC<Props> = ({ isDarkTheme, windowSize }) => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About isDarkTheme={isDarkTheme} windowSize={windowSize} />} />
        <Route path="/about" element={<About isDarkTheme={isDarkTheme} windowSize={windowSize} />} />
        <Route path="/skills" element={<Skills isDarkTheme={isDarkTheme} />} />
        <Route path="/services" element={<Services isDarkTheme={isDarkTheme} />} />
        <Route path="/portfolio" element={
          <>
            <Portfolio isDarkTheme={isDarkTheme} />
            <ContactMeBanner />
          </>
        } />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}
