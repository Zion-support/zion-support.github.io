import React from 'react';
<<<<<<< HEAD

import { render, RenderOptions } from '@testing - library / react';
import { ThemeProvider } from 'next - themes';
;
const AllTheProviders = ({ children }: { children: React.ReactNode }) =>: any {

=======
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
});
export const createMockProps = (overrides = {}) => ({

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
=======

  },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false;

});
export const createMockProps = (overrides = {}) => ({


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
export const createMockProps = (overrides = {}) => ({;

  ...overrides;

=======
;
export const createMockProps = (overrides = {}) =>: any ({
  ...overrides;




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
});