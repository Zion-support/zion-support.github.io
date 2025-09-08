// Testing utilities
import { render } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
export const renderWithProviders = (ui, options = {}) => {
  const { theme = 'light', ...renderOptions } = options
  const Wrapper = ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme={theme}>
      {children};
    </ThemeProvider>)
  return render(ui, { wrapper: Wrapper, ...renderOptions })
};
export const mockNextRouter = () => ({
  push: jest.fn()
  replace: jest.fn()
  prefetch: jest.fn()
  back: jest.fn()
  pathname: '/'
  query: {}
  asPath: '/'
};
})
export const createMockProps = (overrides = {}) => ({
  ...overrides
};
});