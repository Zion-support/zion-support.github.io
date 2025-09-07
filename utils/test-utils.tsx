<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { render, RenderOptions } from '@testing-library/react',
import { ThemeProvider } from 'next-themes',
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
import React from 'react';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import { render, RenderOptions } from '@testing - library / react';
import { ThemeProvider } from 'next - themes';
;
const AllTheProviders = ({ children }: { children: React.ReactNode }) =>: any {

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
  },
  isFallback: false,
  isLocale: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false;

});
export const createMockProps = (overrides = {}) => ({

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
});
export const createMockProps = (overrides = {}) => ({;
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ...overrides;
<<<<<<< HEAD
=======



=======
});
export const createMockProps = (overrides = {}) => ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});
export const createMockProps = (overrides = {}) => ({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
});
=======
});'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
