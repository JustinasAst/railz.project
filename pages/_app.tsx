import '../styles/globals.css';
import '../styles/Article.css';
import '../styles/Product.css';
import '../styles/Header.css';
import '../styles/RailzApi.css';
import '../styles/ExitBackground.css';
import '../styles/Footer.css';
import type { AppProps } from 'next/app';
import AuthProvider from '../context';
import Header from '../components/header/Header';
import ExitBackgound from '../components/exitBackground/ExitBackgound';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Header />
        <ExitBackgound>
          <Component {...pageProps} />
        </ExitBackgound>
      </AuthProvider>
    </>
  );
}

export default MyApp;
