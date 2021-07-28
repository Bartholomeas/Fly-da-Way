import React from 'react';
import { theme } from 'assets/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/GlobalStyle';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
