import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
};
isFallback: false;
isLocale: false;
isReady: true;
defaultLocale: 'en';
domainLocales: [];
isPreview: false 
});

export const createMockProps = (overrides = {}) => ({
  ...overrides,
});
