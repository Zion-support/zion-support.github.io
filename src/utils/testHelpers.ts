/**
 * Testing Helpers and Utilities
 * 
 * Comprehensive testing utilities for React components, hooks
 * and integration tests with support for async operations.
 * 
 * Features:
 * - Component rendering helpers
 * - Mock data generators
 * - Async testing utilities
 * - DOM testing helpers
 * - Performance testing utilities
 * - Accessibility testing helpers
 */

import * as React from 'react';

export interface MockComponentProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface TestSetupOptions {
  mockLocalStorage?: boolean;
  mockSessionStorage?: boolean;
  mockFetch?: boolean;
  mockConsole?: boolean;
}

/**
 * Wait for specified milliseconds
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Wait for condition to be true
 */
export const waitFor = async (
  condition: () => boolean | Promise<boolean>,
  timeout = 5000,
  interval = 50,
): Promise<void> => {
  const startTime = Date.now();
  while (!(await Promise.resolve(condition()))) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Timeout waiting for condition after ${timeout}ms`);
    }
    await wait(interval);
  }
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
    
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      
      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element ${selector} not found after ${timeout}ms`));
        return;
      }
      
      setTimeout(checkElement, 50);
    };
    
    checkElement();
  });
};

/**
 * Mock localStorage for testing
 */
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  return {
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
  };
};

/**
 * Mock sessionStorage for testing
 */
export const mockSessionStorage = () => {
  const store: Record<string, string> = {};
  
  return {
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
  };
};

/**
 * Mock fetch for testing
 */
export const mockFetch = (response: any, status = 200) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
      headers: new Headers(),
    } as Response)
  );
};

/**
 * Performance measurement utility
 */
export class PerformanceMeasurer {
  private measurements: Map<string, number[]> = new Map();
  
  start(label: string): void {
    performance.mark(`${label}-start`);
  }
  
  end(label: string): number {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    
    const measure = performance.getEntriesByName(label, 'measure')[0];
    const duration = measure.duration;
    
    if (!this.measurements.has(label)) {
      this.measurements.set(label, []);
    }
    this.measurements.get(label)!.push(duration);
    
    return duration;
  }
  
  getResults(): Record<string, { average: number; count: number; total: number }> {
    const results: Record<string, { average: number; count: number; total: number }> = {};
    
    this.measurements.forEach((values, label) => {
      const total = values.reduce((sum, val) => sum + val, 0);
      results[label] = {
        average: total / values.length,
        count: values.length,
        total,
      };
    });
    
    return results;
  }
  
  clear(): void {
    this.measurements.clear();
    performance.clearMarks();
    performance.clearMeasures();
  }
}

/**
 * Accessibility testing helpers
 */
export const accessibilityHelpers = {
  checkColorContrast: (container: HTMLElement): string[] => {
    const issues: string[] = [];
    const elements = container.querySelectorAll('*');
    
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color && backgroundColor && color === backgroundColor) {
        issues.push(`Poor contrast detected on element: ${element.tagName}`);
      }
    });
    
    return issues;
  },
  
  checkAltText: (container: HTMLElement): string[] => {
    const issues: string[] = [];
    const images = container.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.alt) {
        issues.push(`Image missing alt text: ${img.src}`);
      }
    });
    
    return issues;
  },
  
  checkHeadingStructure: (container: HTMLElement): string[] => {
    const issues: string[] = [];
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) {
      issues.push('No headings found');
      return issues;
    }
    
    const firstHeading = headings[0];
    if (firstHeading.tagName !== 'H1') {
      issues.push('First heading should be H1');
    }
    
    return issues;
  },
  
  waitForNextTick: (): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, 0));
  },
};

/**
 * Mock data generators
 */
export const mockData = {
  user: (overrides: Partial<any> = {}) => ({
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    ...overrides,
  }),
  
  post: (overrides: Partial<any> = {}) => ({
    id: '1',
    title: 'Test Post',
    content: 'This is test content',
    author: 'Test Author',
    publishedAt: new Date().toISOString(),
    ...overrides,
  }),
  
  comment: (overrides: Partial<any> = {}) => ({
    id: '1',
    content: 'Test comment',
    author: 'Test Author',
    postId: '1',
    createdAt: new Date().toISOString(),
    ...overrides,
  }),
};

/**
 * Setup test environment
 */
export const setupTestEnvironment = (options: TestSetupOptions = {}) => {
  const { mockLocalStorage: mockLS, mockSessionStorage: mockSS, mockFetch: mockF, mockConsole: mockC } = options;
  
  if (mockLS) {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage(),
      writable: true,
    });
  }
  
  if (mockSS) {
    Object.defineProperty(window, 'sessionStorage', {
      value: mockSessionStorage(),
      writable: true,
    });
  }
  
  if (mockF) {
    mockFetch({});
  }
  
  if (mockC) {
    global.console = {
      ...console,
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
  }
};

/**
 * Cleanup test environment
 */
export const cleanupTestEnvironment = () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
};

/**
 * Create mock component
 */
export const createMockComponent = (name: string) => {
  const MockComponent = (props: MockComponentProps) => {
    return React.createElement('div', { 'data-testid': name, ...props });
  };
  
  MockComponent.displayName = name;
  return MockComponent;
};

/**
 * Generate test data
 */
export const generateTestData = <T>(
  generator: () => T,
  count: number = 10
): T[] => {
  return Array.from({ length: count }, generator);
};

/**
 * Wait for async operations to complete
 */
export const flushPromises = (): Promise<void> => {
  return new Promise(resolve => setImmediate(resolve));
};

/**
 * Mock IntersectionObserver
 */
export const mockIntersectionObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: jest.fn().mockImplementation(() => mockObserver),
  });
  
  return mockObserver;
};

/**
 * Mock ResizeObserver
 */
export const mockResizeObserver = () => {
  const mockObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: jest.fn().mockImplementation(() => mockObserver),
  });
  
  return mockObserver;
};

/**
 * Create test wrapper with providers
 */
export const createTestWrapper = (providers: React.ComponentType<any>[] = []) => {
  return ({ children }: { children: React.ReactNode }) => {
    return providers.reduceRight(
      (acc, Provider) => React.createElement(Provider, {}, acc),
      children
    );
  };
};

/**
 * Simulate user interaction
 */
export const simulateUserInteraction = {
  click: (element: Element) => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);
  },
  
  type: (element: HTMLInputElement, text: string) => {
    element.value = text;
    const event = new Event('input', { bubbles: true });
    element.dispatchEvent(event);
  },
  
  focus: (element: Element) => {
    const event = new FocusEvent('focus', { bubbles: true });
    element.dispatchEvent(event);
  },
  
  blur: (element: Element) => {
    const event = new FocusEvent('blur', { bubbles: true });
    element.dispatchEvent(event);
  },
};

/**
 * Assertion helpers
 */
export const assertions = {
  toBeInDocument: (element: Element | null) => {
    if (!element) {
      throw new Error('Element is null');
    }
    if (!document.contains(element)) {
      throw new Error('Element is not in document');
    }
  },
  
  toHaveTextContent: (element: Element, text: string) => {
    if (!element.textContent?.includes(text)) {
      throw new Error(`Element does not contain text: ${text}`);
    }
  },
  
  toHaveClass: (element: Element, className: string) => {
    if (!element.classList.contains(className)) {
      throw new Error(`Element does not have class: ${className}`);
    }
  },
};