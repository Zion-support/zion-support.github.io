import React from 'react';

import { render, RenderOptions } from '@testing - library / react';
import { ThemeProvider } from 'next - themes';
;
const AllTheProviders = ({ children }: { children: React.ReactNode }) =>: any {

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}

});
export const createMockProps = (overrides = {}) => ({

  ...overrides;

  ...overrides;




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
});