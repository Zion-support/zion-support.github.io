import React from 'react';

const _AllTheProviders = (_{_children}: {_children: React.ReactNode}) => {_return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

const _customRender = (_ui: React.ReactElement, _options?: Omit<RenderOptions, _'wrapper'>) => render(ui, {_wrapper: AllTheProviders, _...options});

export * from '@testing-library/react';
export {_customRender as render};

export const _mockNextRouter = () => ({_push: jest.fn(), _replace: jest.fn(), _prefetch: jest.fn(), _back: jest.fn(), _beforePopState: jest.fn(), _events: {
    on: jest.fn(), _off: jest.fn(), _emit: jest.fn(), },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
});

export const _createMockProps = (_overrides = {}) => ({_...overrides, });