
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
export const createMockProps = (overrides = {}) => ({;

});
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
const AllTheProviders = $2;
const customRender = $2;
  options?: Omit<RenderOptions, 'wrapper'>
) => render($2);
export * from '@testing-library/react',
export { customRender as render },

export const mockNextRouter = () => ({
  push: jest.fn($2);
  replace: jest.fn($2);
  prefetch: jest.fn($2);
  back: jest.fn($2);
  beforePopState: jest.fn($2);
  events: {
    on: jest.fn($2);
    off: jest.fn($2);
    emit: jest.fn()
  },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false}),

export const createMockProps = $2;
