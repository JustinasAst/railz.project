import '../styles/globals.css';
import '../styles/Article.css';
import '../styles/Product.css';
import '../styles/Header.css';
import '../styles/RailzApi.css';
import type { AppProps } from 'next/app';
import AuthProvider from '../context';
import Header from '../components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
