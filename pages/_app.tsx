import '../styles/globals.css';
import '../styles/css/Article.css';
import '../styles/css/Footer.css';
import '../styles/css/Header.css';
import '../styles/css/MenuExitOverlay.css';
import '../styles/css/Product.css';
import '../styles/css/RailzPage.css';

import type { AppProps } from 'next/app';
import AuthProvider from '../context';
import Header from '../components/header/Header';
import MenuExitOverlay from '../components/menuExitOverlay/MenuExitOverlay';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Header />
        <MenuExitOverlay>
          <Component {...pageProps} />
        </MenuExitOverlay>
      </AuthProvider>
    </>
  );
}

export default MyApp;
