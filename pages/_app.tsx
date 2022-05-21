import type { AppProps } from 'next/app';

import { AppContextProvider } from '@/context/index';

import AppContent from '@/screens/index';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppContextProvider>
    <AppContent Component={Component} pageProps={pageProps} />
  </AppContextProvider>
);

export default MyApp;
