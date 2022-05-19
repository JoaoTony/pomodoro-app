import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyle from '../styles/global.styles';

import { LIGHT, DARK } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DARK}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
