import React from 'react';
import Header from './header/Header';
import Footer from './footerInfo/FooterInfo';

type ComponentsProps = {
  children?: React.ReactNode;
};

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
