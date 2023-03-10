import React from 'react';
import Header from '../components/Header/Header';

const SecondLayout = ({ children }) => {
  return (
    <>
      <Header className="w-full" />
      <main>{children}</main>
    </>
  );
};

export default SecondLayout;
