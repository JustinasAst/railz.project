import '../styles/globals.css';
import '../styles/Article.css';
import '../styles/Footer.css';
import '../styles/Header.css';
import '../styles/ExitBackground.css';
import '../styles/Product.css';
import '../styles/RailzPage.css';

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
