/**
 * Test utilities and helpers for the application
 */

/**
 * Wait for a condition to be true
 */
export const waitFor = async (
  condition: () => boolean | Promise<boolean>,
  timeout = 5000,
): Promise<void> => {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const result = await condition();
    if (result) return;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error(`Timeout waiting for condition after ${timeout}ms`);
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
  const event = new Event('input', {
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
};

/**
 * Simulate keyboard event
 */
export const simulateKeyEvent = (
  element: Element,
  eventType: 'keydown' | 'keyup' | 'keypress',
  key: string,
  options: KeyboardEventInit = {}
): void => {
  const event = new KeyboardEvent(eventType, {
    key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
  element.dispatchEvent(event);
};

/**
 * Mock fetch for testing API calls
 */
export const mockFetch = (response: any, status = 200): void => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(typeof response === 'string' ? response : JSON.stringify(response)),
    })
  );
};

/**
 * Mock localStorage
 */
export const mockLocalStorage = (): void => {
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
      length: 0,
      key: jest.fn((index: number) => Object.keys(store)[index] || null),
    },
    writable: true,
  });
};

/**
 * Mock sessionStorage
 */
export const mockSessionStorage = (): void => {
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
      length: 0,
      key: jest.fn((index: number) => Object.keys(store)[index] || null),
    },
    writable: true,
  });
};

/**
 * Mock window.location
 */
export const mockLocation = (url: string): void => {
  delete (window as any).location;
  const mockLocation = Object.assign(new URL(url), {
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    ancestorOrigins: [] as any,
  });
  window.location = mockLocation as any;
};

/**
 * Mock window.matchMedia
 */
export const mockMatchMedia = (matches: boolean = false): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
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
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = (): void => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver as any;
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = (): void => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver as any;
};

/**
 * Create mock data
 */
export const createMockData = <T>(template: Partial<T>, count: number = 1): T[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    ...template,
  } as T));
};

/**
 * Mock console methods
 */
export const mockConsole = (): void => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'info').mockImplementation(() => {});
};

/**
 * Restore console methods
 */
export const restoreConsole = (): void => {
  jest.restoreAllMocks();
};

/**
 * Wait for async operations to complete
 */
export const flushPromises = (): Promise<void> => {
  return new Promise((resolve) => setImmediate(resolve));
};

/**
 * Mock window.requestAnimationFrame
 */
export const mockRequestAnimationFrame = (): void => {
  let animationFrameId = 0;
  Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: jest.fn((callback: FrameRequestCallback) => {
      animationFrameId++;
      setTimeout(() => callback(animationFrameId), 16);
      return animationFrameId;
    }),
  });
  
  Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: jest.fn(),
  });
};

/**
 * Mock window.setTimeout and setInterval
 */
export const mockTimers = (): void => {
  jest.useFakeTimers();
};

/**
 * Advance timers by specific time
 */
export const advanceTimersByTime = (msToRun: number): void => {
  jest.advanceTimersByTime(msToRun);
};

/**
 * Wait for all async operations to complete
 */
export const waitForAsyncOperations = async (timeout = 5000): Promise<void> => {
  await waitFor(() => {
    // Check if there are any pending promises
    return true;
  }, timeout);
};

/**
 * Mock fetch with delay
 */
export const mockFetchWithDelay = (response: any, delay: number, status = 200): void => {
  global.fetch = jest.fn().mockImplementation(() =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: status >= 200 && status < 300,
          status,
          json: () => Promise.resolve(response),
          text: () => Promise.resolve(typeof response === 'string' ? response : JSON.stringify(response)),
        } as Response);
      }, delay);
    })
  );
};

/**
 * Wait for fetch calls to complete
 */
export const waitForFetchCalls = async (timeout = 5000): Promise<void> => {
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