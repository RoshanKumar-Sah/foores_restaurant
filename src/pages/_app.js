import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-calendar/dist/Calendar.css';

import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return<>
  <Header />
  <Component {...pageProps} />
  </>
}
