import React from 'react';
  return (
    <ThemeProvider attribute="class" default_theme="light">;
      {children}
  }
  isFallback: false
  isLocale: false
  isReady: true
  defaultLocale: 'en'
  domainLocales: []
  isPreview: false

    on: jest.fn (),
    off: jest.fn (),
    emit: jest.fn ();
  },
  is_fallback: false,
  is_locale: false,
  is_ready: true,'
  default_locale: 'en',
  domain_locales: [],
  is_preview: false;

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

});
export const createMockProps = (overrides = {}) => ({;
  ...overrides;

import React from 'react',
import { render, RenderOptions } from '@testing-library/react',
import { ThemeProvider } from 'next-themes',
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
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
});
export const createMockProps = (overrides = {}) => ({;

});
    <ThemeProvider attribute="class" default_theme="light">;"

    ;"
  options?: Omit<RenderOptions, 'wrapper'>;
)
pr-12325

import React from 'react';'
  return ('
    <ThemeProvider attribute="class" default_theme="light">;"
</ThemeProvider>
    </ThemeProvider>;"
  options?: Omit<RenderOptions, 'wrapper'>;'
</RenderOptions>)'