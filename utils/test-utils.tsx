<<<<<<< HEAD
import React from 'react',
import { render, RenderOptions } from '@testing-library/react',
import { ThemeProvider } from 'next-themes',
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute=&quot;class&quot; defaultTheme=&quot;light&quot;>
=======
import React from 'react';

const _AllTheProviders = (_{_children}: {_children: React.ReactNode}) => {_return (
    <ThemeProvider attribute="class" defaultTheme="light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {children}
    </ThemeProvider>
  )
},

<<<<<<< HEAD
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options }),

export * from '@testing-library/react',
export { customRender as render },

export const mockNextRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
=======
const _customRender = (_ui: React.ReactElement, _options?: Omit<RenderOptions, _'wrapper'>) => render(ui, {_wrapper: AllTheProviders, _...options});

export * from '@testing-library/react';
export {_customRender as render};

export const _mockNextRouter = () => ({_push: jest.fn(), _replace: jest.fn(), _prefetch: jest.fn(), _back: jest.fn(), _beforePopState: jest.fn(), _events: {
    on: jest.fn(), _off: jest.fn(), _emit: jest.fn(), },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false
}),

<<<<<<< HEAD
export const createMockProps = (overrides = {}) => ({
  ...overrides
}),
=======
export const _createMockProps = (_overrides = {}) => ({_...overrides, });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
