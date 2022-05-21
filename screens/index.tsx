import { ThemeProvider } from 'styled-components';
import { FC } from 'react';

import { NextComponentType, NextPageContext } from 'next';
import GlobalStyle from '@/styles/global.styles';

import { useAppContext } from '../context';

const AppContent: FC<{Component: NextComponentType<NextPageContext, any, {}>; pageProps: any}> = (
  { Component, pageProps },
) => {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AppContent;
