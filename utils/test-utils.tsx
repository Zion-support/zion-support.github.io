import React from 'react';
<<<<<<< HEAD

import { render, RenderOptions } from '@testing - library / react';
import { ThemeProvider } from 'next - themes';
;
const AllTheProviders = ({ children }: { children: React.ReactNode }) =>: any {

  return (
    <ThemeProvider attribute="class" default_theme="light">;
      {children}

    </ThemeProvider>
  );
}
;
const custom_render = (
  ui: React.ReactElement,
  options?: Omit < RenderOptions, 'wrapper'>) =>: any render (ui, { wrapper: AllTheProviders, ...options });
;
export * from '@testing - library / react';
export { custom_render as render }
;
export const mockNextRouter = () =>: any ({
  push: jest.fn (),
  replace: jest.fn (),
  prefetch: jest.fn (),
  back: jest.fn (),
  beforePopState: jest.fn (),
  events: {

    on: jest.fn()
    off: jest.fn()
    emit: jest.fn()
  }
  isFallback: false
  isLocale: false
  isReady: true
  defaultLocale: 'en'
  domainLocales: []
  isPreview: false

  },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
=======
  return (<ThemeProvider attribute="class" default_theme="light">;
      {children}
  }
  isFallback: false;
  isLocale: false;
  isReady: true;
  defaultLocale: 'en';
  domainLocales: [];
>>>>>>> origin/merge-pr-12271
  isPreview: false;

});
export const createMockProps = (overrides = {}) => ({
  ...overrides

    </ThemeProvider>;
  );
},;
const customRender = (;
  ui: React.ReactElement,;
  options?: Omit<RenderOptions, 'wrapper'>;
) => render(ui, { wrapper: AllTheProviders, ...options }),;
export * from '@testing-library/react',;
export { customRender as render },;
export const mockNextRouter = () => ({;
  push: jest.fn(),;
  replace: jest.fn(),;
  prefetch: jest.fn(),;
  back: jest.fn(),;
  beforePopState: jest.fn(),;
  events: {;
    on: jest.fn(),;
    off: jest.fn(),;
    emit: jest.fn();
  },;
  isFallback: false,;
  isLocale: false,;
  isReady: true,;
  defaultLocale: 'en',;
  domainLocales: [],;
  isPreview: false;

});
export const createMockProps = (overrides = {}) => ({;




  ...overrides;








});