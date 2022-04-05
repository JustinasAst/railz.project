import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface ComponentsProps {
  children: any;
}

const Layout: React.FC<ComponentsProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
