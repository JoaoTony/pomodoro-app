import type { AppProps } from 'next/app';

import { AppContexProvider } from '../context';

import AppContent from '../screens';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppContexProvider>
    <AppContent Component={Component} pageProps={pageProps} />
  </AppContexProvider>
);

export default MyApp;
