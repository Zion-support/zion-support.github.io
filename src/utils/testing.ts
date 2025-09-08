import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

// Testing utilities and helpers

// Custom render function with providers
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock data generators
export const generateMockUser = (overrides: Partial<any> = {}) => ({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://via.placeholder.com/150',
  role: 'user',
  createdAt: new Date().toISOString(),
  ...overrides,
});

export const generateMockPost = (overrides: Partial<any> = {}) => ({
  id: '1',
  title: 'Test Post',
  content: 'This is a test post content',
  author: generateMockUser(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  published: true,
  ...overrides,
});

export const generateMockComment = (overrides: Partial<any> = {}) => ({
  id: '1',
  content: 'This is a test comment',
  author: generateMockUser(),
  postId: '1',
  createdAt: new Date().toISOString(),
  ...overrides,
});

// API mocking utilities
export const mockApiResponse = <T>(data: T, delay: number = 0) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

export const mockApiError = (message: string = 'API Error', status: number = 500) => {
  return Promise.reject(new Error(`${status}: ${message}`));
};

// Mock fetch
export const mockFetch = (responses: Record<string, any>) => {
  const originalFetch = global.fetch;
  
  global.fetch = jest.fn((url: string) => {
    const response = responses[url];
    if (response) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(response),
        status: 200,
      } as Response);
    }
    return Promise.reject(new Error('Not found'));
  });

  return () => {
    global.fetch = originalFetch;
  };
};

// Test data factories
export const createTestData = {
  user: generateMockUser,
  post: generateMockPost,
  comment: generateMockComment,
  users: (count: number) => Array.from({ length: count }, (_, i) => generateMockUser({ id: `${i + 1}` })),
  posts: (count: number) => Array.from({ length: count }, (_, i) => generateMockPost({ id: `${i + 1}` })),
  comments: (count: number, postId: string = '1') => 
    Array.from({ length: count }, (_, i) => generateMockComment({ id: `${i + 1}`, postId })),
};

// Custom matchers
export const customMatchers = {
  toBeInTheDocument: (element: HTMLElement | null) => {
    return element !== null && document.body.contains(element);
  },
  
  toHaveTextContent: (element: HTMLElement | null, text: string) => {
    return element?.textContent?.includes(text) ?? false;
  },
  
  toHaveClass: (element: HTMLElement | null, className: string) => {
    return element?.classList.contains(className) ?? false;
  },
  
  toHaveAttribute: (element: HTMLElement | null, attribute: string, value?: string) => {
    if (!element) return false;
    const attrValue = element.getAttribute(attribute);
    return value ? attrValue === value : attrValue !== null;
  },
};

// Accessibility testing utilities
export const checkAccessibility = (container: HTMLElement) => {
  const issues: string[] = [];

  // Check for missing alt text on images
  const images = container.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.getAttribute('alt')) {
      issues.push(`Image ${index + 1} is missing alt text`);
    }
  });

  // Check for missing form labels
  const inputs = container.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    const label = id ? container.querySelector(`label[for="${id}"]`) : null;
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push(`Input ${index + 1} is missing a label`);
    }
  });

  // Check for heading hierarchy
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skipped at heading ${index + 1}`);
    }
    previousLevel = level;
  });

  // Check for missing focus management
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length > 0) {
    const firstElement = focusableElements[0] as HTMLElement;
    if (!firstElement.getAttribute('tabindex') && firstElement.tagName !== 'BUTTON') {
      issues.push('First focusable element should be properly marked');
    }
  }

  return issues;
};

// Performance testing utilities
export const measureRenderTime = async (component: React.ReactElement): Promise<number> => {
  const start = performance.now();
  const { unmount } = customRender(component);
  const end = performance.now();
  unmount();
  return end - start;
};

export const measureMemoryUsage = (): number => {
  if ('memory' in performance) {
    return (performance as any).memory.usedJSHeapSize;
  }
  return 0;
};

// Mock Intersection Observer
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
  return mockIntersectionObserver;
};

// Mock ResizeObserver
export const mockResizeObserver = () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;
  return mockResizeObserver;
};

// Mock matchMedia
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

// Mock localStorage
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: jest.fn((key: string) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        Object.keys(store).forEach(key => delete store[key]);
      }),
      length: Object.keys(store).length,
      key: jest.fn((index: number) => Object.keys(store)[index] || null),
    },
    writable: true,
  });
  
  return store;
};

// Mock sessionStorage
export const mockSessionStorage = () => {
  const store: Record<string, string> = {};
  
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: jest.fn((key: string) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        Object.keys(store).forEach(key => delete store[key]);
      }),
      length: Object.keys(store).length,
      key: jest.fn((index: number) => Object.keys(store)[index] || null),
    },
    writable: true,
  });
  
  return store;
};

// Test environment setup
export const setupTestEnvironment = () => {
  // Mock console methods to reduce noise in tests
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.warn = jest.fn();
    console.error = jest.fn();
  });
  
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
  
  // Mock timers
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    jest.useRealTimers();
  });
};

// Custom hooks for testing
export const useTestHook = <T>(hook: () => T): T => {
  const TestComponent = () => {
    const result = hook();
    return <div data-testid="hook-result">{JSON.stringify(result)}</div>;
  };
  
  const { getByTestId } = customRender(<TestComponent />);
  const result = getByTestId('hook-result').textContent;
  return result ? JSON.parse(result) : null;
};

// Snapshot testing utilities
export const createSnapshot = (component: React.ReactElement) => {
  const { container } = customRender(component);
  return container.firstChild;
};

// Integration test utilities
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return customRender(ui, options);
};

// Export everything
export * from '@testing-library/react';
export { customRender as render };
export default {
  customRender,
  generateMockUser,
  generateMockPost,
  generateMockComment,
  createTestData,
  mockApiResponse,
  mockApiError,
  mockFetch,
  customMatchers,
  checkAccessibility,
  measureRenderTime,
  measureMemoryUsage,
  mockIntersectionObserver,
  mockResizeObserver,
  mockMatchMedia,
  mockLocalStorage,
  mockSessionStorage,
  setupTestEnvironment,
  useTestHook,
  createSnapshot,
  renderWithProviders,
};