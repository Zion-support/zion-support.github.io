import React from 'react';
<<<<<<< HEAD
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
=======
import { render, RenderOptions } from '@testing - library / react';
import { ThemeProvider } from 'next - themes';
;
const AllTheProviders = ({ children }: { children: React.ReactNode }) =>: any {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <ThemeProvider attribute="class" default_theme="light">;
      {children}
<<<<<<< HEAD
    </ThemeProvider>
  );
}
const customRender = (
  ui: React.ReactElement
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });
export * from '@testing-library/react';
export { customRender as render }
export const mockNextRouter = () => ({
  push: jest.fn()
  replace: jest.fn()
  prefetch: jest.fn()
  back: jest.fn()
  beforePopState: jest.fn()
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
});
export const createMockProps = (overrides = {}) => ({
  ...overrides
=======
    </ThemeProvider>);
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
    on: jest.fn (),
    off: jest.fn (),
    emit: jest.fn ();
  },
  is_fallback: false,
  is_locale: false,
  is_ready: true,
  default_locale: 'en',
  domain_locales: [],
  is_preview: false;
});
;
export const createMockProps = (overrides = {}) =>: any ({
  ...overrides;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
});