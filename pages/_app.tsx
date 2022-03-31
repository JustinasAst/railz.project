import '../styles/globals.css';
import '../styles/css-files/Header.css';
import '../styles/Article.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
