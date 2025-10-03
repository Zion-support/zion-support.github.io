/**
 * Test utilities and helpers for the application
 */

/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean,
  timeout = 5000,
): Promise<void> => {
  const start = Date.now();
  while (!condition() && Date.now() - start < timeout) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (!condition()) {
    throw new Error(`Timeout waiting for condition after ${timeout}ms`);
  }
};

/**
 * Wait for element to appear in DOM
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000,
): Promise<Element> => {
  await waitFor(() => !!document.querySelector(selector), timeout);
  return document.querySelector(selector)!;
};

/**
 * Wait for element to disappear from DOM
 */
export const waitForElementToBeRemoved = async (
  selector: string,
  timeout = 5000,
): Promise<void> => {
  await waitFor(() => !document.querySelector(selector), timeout);
};

/**
 * Simulate user click
 */
export const simulateClick = (element: Element): void => {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
};

/**
 * Simulate user input
 */
export const simulateInput = (element: HTMLInputElement, value: string): void => {
  element.value = value;
  const event = new Event('input', { bubbles: true });
  element.dispatchEvent(event);
};

/**
 * Mock fetch response
 */
export const mockFetch = (response: any, status = 200): void => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
  });
};

/**
 * Mock localStorage
 */
export const mockLocalStorage = (): void => {
  const store: { [key: string]: string } = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      },
    },
    writable: true,
  });
};

/**
 * Mock window.location
 */
export const mockLocation = (url: string): void => {
  delete (window as any).location;
  window.location = new URL(url) as any;
};

/**
 * Create mock element
 */
export const createMockElement = (tagName: string, attributes: Record<string, string> = {}): HTMLElement => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};

/**
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = (): void => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = (): void => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

/**
 * Mock matchMedia
 */
export const mockMatchMedia = (matches: boolean): void => {
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

/**
 * Wait for async component to render
 */
export const waitForAsyncComponent = async (
  component: React.ComponentType<any>,
  _props: any = {},
  timeout = 5000,
): Promise<void> => {
  await waitFor(() => {
    try {
      const element = document.querySelector(`[data-testid="${component.name}"]`);
      return !!element;
    } catch {
      return false;
    }
  }, timeout);
};

/**
 * Mock console methods for testing
 */
export const mockConsole = (): void => {
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.log = jest.fn();
    console.error = jest.fn();
    console.warn = jest.fn();
    console.info = jest.fn();
  });
  
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
};

/**
 * Create mock router
 */
export const createMockRouter = (pathname = '/', search = ''): any => ({
  pathname,
  search,
  hash: '',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  reload: jest.fn(),
  prefetch: jest.fn(),
});

/**
 * Mock Next.js router
 */
export const mockNextRouter = (pathname = '/', query = {}): void => {
  const mockRouter = createMockRouter(pathname);
  mockRouter.query = query;
  
  jest.mock('next/router', () => ({
    useRouter: () => mockRouter,
    withRouter: (Component: any) => Component,
  }));
};

/**
 * Create test environment setup
 */
export const setupTestEnvironment = (): void => {
  mockLocalStorage();
  mockIntersectionObserver();
  mockResizeObserver();
  mockMatchMedia(true);
  mockConsole();
};

/**
 * Clean up test environment
 */
export const cleanupTestEnvironment = (): void => {
  // Clean up any global mocks
  if (typeof global.fetch !== 'undefined') {
    // delete global.fetch;
  }
  
  // Clear localStorage
  if (window.localStorage) {
    window.localStorage.clear();
  }
  
  // Reset window.location
  if (window.location) {
    window.location = new URL('http://localhost:3000') as any;
  }
};

/**
 * Create mock API response
 */
export const createMockApiResponse = <T>(data: T, status = 200): Response => ({
  ok: status >= 200 && status < 300,
  status,
  statusText: status === 200 ? 'OK' : 'Error',
  headers: new Headers(),
  body: null,
  bodyUsed: false,
  redirected: false,
  type: 'basic' as ResponseType,
  url: '',
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  blob: () => Promise.resolve(new Blob()),
  formData: () => Promise.resolve(new FormData()),
  json: () => Promise.resolve(data),
  text: () => Promise.resolve(JSON.stringify(data)),
  clone: () => createMockApiResponse(data, status),
} as Response);

/**
 * Mock fetch with different responses
 */
export const mockFetchResponses = (responses: Array<{ url: string; response: any; status?: number }>): void => {
  global.fetch = jest.fn().mockImplementation((url: string) => {
    const match = responses.find(r => url.includes(r.url));
    if (match) {
      return Promise.resolve(createMockApiResponse(match.response, match.status));
    }
    return Promise.resolve(createMockApiResponse({}, 404));
  });
};

/**
 * Wait for network requests to complete
 */
export const waitForNetworkRequests = async (timeout = 5000): Promise<void> => {
  await waitFor(() => {
    // Check if there are any pending fetch requests
    return !(global.fetch as any)?.mock?.calls?.some((call: any) => !call[1]?.resolved);
  }, timeout);
};

/**
 * Create mock error
 */
export const createMockError = (message: string, status = 500): Error => {
  const error = new Error(message) as any;
  error.status = status;
  error.response = {
    status,
    statusText: 'Internal Server Error',
    data: { message },
  };
  return error;
};

/**
 * Mock window.scrollTo
 */
export const mockScrollTo = (): void => {
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
  });
};

/**
 * Mock window.getComputedStyle
 */
export const mockGetComputedStyle = (styles: Record<string, string> = {}): void => {
  Object.defineProperty(window, 'getComputedStyle', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      getPropertyValue: (prop: string) => styles[prop] || '',
      ...styles,
    })),
  });
};

/**
 * Create mock event
 */
export const createMockEvent = (type: string, options: any = {}): Event => {
  const event = new Event(type, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
  return event;
};

/**
 * Mock setTimeout and setInterval
 */
export const mockTimers = (): void => {
  jest.useFakeTimers();
};

/**
 * Restore real timers
 */
export const restoreTimers = (): void => {
  jest.useRealTimers();
};

/**
 * Advance timers by specified time
 */
export const advanceTimers = (ms: number): void => {
  jest.advanceTimersByTime(ms);
};

/**
 * Run all pending timers
 */
export const runAllTimers = (): void => {
  jest.runAllTimers();
};

/**
 * Run only pending timers
 */
export const runOnlyPendingTimers = (): void => {
  jest.runOnlyPendingTimers();
};

/**
 * Clear all timers
 */
export const clearAllTimers = (): void => {
  jest.clearAllTimers();
};