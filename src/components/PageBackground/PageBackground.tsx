import React from 'react'

type Props = {
  isDarkTheme: boolean
}

export const PageBackground: React.FC<Props> = ({ isDarkTheme }) => {
  return (
    <>
      <div className="page__gradient" />

      <div className="page__element page__element--1"></div>

      <div className="page__element page__element--2"></div>

      <div className="page__element page__element--3"></div>

      {isDarkTheme && (
        <div className="page__dark-filter" />
      )}

      <div className="page__blur"></div>
    </>
  );
};
