import { ThemeProvider } from 'styled-components';
import { FC } from 'react';

import { NextComponentType, NextPageContext } from 'next';
import GlobalStyle from '../styles/global.styles';

import { useAppContex } from '../context';

const AppContent: FC<{Component: NextComponentType<NextPageContext, any, {}>; pageProps: any}> = (
  { Component, pageProps },
) => {
  const { theme } = useAppContex();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AppContent;
