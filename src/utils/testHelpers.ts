/**
 * Test utilities and helpers for the application
 */

export const waitForCondition = async (
  condition: () => boolean,
  timeout = 5000,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const check = () => {
      if (condition()) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error('Timeout waiting for condition'));
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

/**
 * Wait for element to appear in DOM
 */
export const waitForElement = async (
  selector: string,
  timeout = 5000,
): Promise<Element> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const check = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Timeout waiting for element: ${selector}`));
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

/**
 * Mock localStorage
 */
  
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
};

/**
 * Create mock element
 */
};

/**
 * Mock IntersectionObserver
 */
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

/**
 * Mock ResizeObserver
 */
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
  };
  return error;
};

/**
 * Mock window.scrollTo
 */
};

/**
 * Mock window.getComputedStyle
 */
};