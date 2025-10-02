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
<<<<<<< HEAD
  timeout = 5000
=======
  timeout = 5000,
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
): Promise<Element> => {
  await waitFor(() => !!document.querySelector(selector), timeout);
  return document.querySelector(selector)!;
};

/**
 * Wait for element to disappear from DOM
 */
export const waitForElementToBeRemoved = async (
  selector: string,
<<<<<<< HEAD
  timeout = 5000
=======
  timeout = 5000,
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
): Promise<void> => {
  await waitFor(() => !document.querySelector(selector), timeout);
};

/**
 * Simulate user click
 */
export const click = (element: Element): void => {
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(clickEvent);
};

/**
 * Simulate user typing
 */
export const type = (element: HTMLInputElement | HTMLTextAreaElement, text: string): void => {
  element.focus();
  element.value = text;
  const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(inputEvent);
  
  const changeEvent = new Event('change', {
    bubbles: true,
<<<<<<< HEAD
    cancelable: true,
=======
    cancelable: true
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
  });
  element.dispatchEvent(changeEvent);
};

/**
<<<<<<< HEAD
 * Mock localStorage
 */
export const mockLocalStorage = (): void => {
  const store: { [key: string]: string } = {};
  
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      },
      get length() {
        return Object.keys(store).length;
      },
      key: (index: number) => {
        const keys = Object.keys(store);
        return keys[index] || null;
      }
    },
    writable: true
  });
};

/**
 * Mock sessionStorage
 */
export const mockSessionStorage = (): void => {
  const store: { [key: string]: string } = {};
  
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        Object.keys(store).forEach(key => delete store[key]);
      },
      get length() {
        return Object.keys(store).length;
      },
      key: (index: number) => {
        const keys = Object.keys(store);
        return keys[index] || null;
      }
    },
    writable: true
  });
};

/**
 * Mock fetch
 */
export const mockFetch = (response: any, status = 200): void => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    })
  ) as jest.Mock;
};
=======
 * Clear input value
 */
export const clear = (element: HTMLInputElement | HTMLTextAreaElement): void => {
  element.value = '';
  const changeEvent = new Event('change', {
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(changeEvent);
};

/**
 * Select option in select element
 */
export const selectOption = (element: HTMLSelectElement, value: string): void => {
  element.value = value;
  const changeEvent = new Event('change', {
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(changeEvent);
};

/**
 * Mock fetch API
 */
export class FetchMock {
  private responses: Map<string, any> = new Map();
  private originalFetch: typeof fetch;

  constructor() {
    this.originalFetch = globalThis.fetch;
  }

  mockResponse(url: string, response: any, options?: {
    status?: number;
    statusText?: string;
    headers?: Record<string, string>;
  }): void {
    this.responses.set(url, {
      response,
      status: options?.status || 200,
      statusText: options?.statusText || 'OK',
      headers: options?.headers || {}
    });
  }

  mockResponseOnce(url: string, response: any, options?: {
    status?: number;
    statusText?: string;
    headers?: Record<string, string>;
  }): void {
    this.mockResponse(url, response, options);
    
    // Remove after first call
    const original = this.responses.get(url);
    if (original) {
      this.responses.set(url, {
        ...original,
        once: true
      });
    }
  }

  install(): void {
    globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const url = typeof input === 'string' ? input : input.toString();
      const mockData = this.responses.get(url);
      if (mockData) {
        if (mockData.once) {
          this.responses.delete(url);
        }

        return new Response(JSON.stringify(mockData.response), {
          status: mockData.status,
          statusText: mockData.statusText,
          headers: mockData.headers
        });
      }

      return this.originalFetch(input, init);
    };
  }

  restore(): void {
    globalThis.fetch = this.originalFetch;
    this.responses.clear();
  }
}

/**
 * Mock localStorage
 */
export class LocalStorageMock {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  get length(): number {
    return Object.keys(this.store).length;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce

/**
 * Mock console methods
 */
<<<<<<< HEAD
export const mockConsole = (): void => {
  const originalConsole = { ...console };
  
  beforeEach(() => {
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
    console.info = jest.fn();
    console.debug = jest.fn();
  });
  
  afterEach(() => {
    Object.assign(console, originalConsole);
  });
};

/**
 * Setup test environment with mocks
 */
export const setupTestEnvironment = (options: TestSetupOptions = {}): void => {
  if (options.mockLocalStorage) {
    mockLocalStorage();
  }
  
  if (options.mockSessionStorage) {
    mockSessionStorage();
=======
export class ConsoleMock {
  private originalConsole: typeof console;
  logs: any[] = [];
  warnings: any[] = [];
  errors: any[] = [];

  constructor() {
    this.originalConsole = console;
  }

  install(): void {
    console.log = (...args: any[]) => this.logs.push(args);
    console.warn = (...args: any[]) => this.warnings.push(args);
    console.error = (...args: any[]) => this.errors.push(args);
  }

  restore(): void {
    console.log = this.originalConsole.log;
    console.warn = this.originalConsole.warn;
    console.error = this.originalConsole.error;
  }

  clear(): void {
    this.logs = [];
    this.warnings = [];
    this.errors = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
  }
  
  if (options.mockFetch) {
    mockFetch({});
  }
  
  if (options.mockConsole) {
    mockConsole();
  }
};

/**
 * Generate mock data
 */
export const generateMockData = {
  string: (length = 10): string => {
<<<<<<< HEAD
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  
  email: (): string => {
    return `test${generateMockData.number()}@example.com`;
  },
  
  url: (): string => {
    return `https://example.com/${generateMockData.string()}`;
  },
  
  date: (): Date => {
    return new Date(Date.now() - generateMockData.number(0, 365) * 24 * 60 * 60 * 1000);
  },
  
  number: (min = 0, max = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  boolean: (): boolean => {
    return Math.random() > 0.5;
  },
  
  array: <T>(generator: () => T, length = 5): T[] => {
    return Array.from({ length }, generator);
  },
  
=======
    return Math.random().toString(36).substring(2, 2 + length);
  },
  number: (min = 0, max = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  boolean: (): boolean => {
    return Math.random() > 0.5;
  },
  email: (): string => {
    return `test${generateMockData.number()}@example.com`;
  },
  url: (): string => {
    return `https://example.com/${generateMockData.string()}`;
  },
  date: (): Date => {
    return new Date(Date.now() - generateMockData.number(0, 365) * 24 * 60 * 60 * 1000);
  },
  array: <T>(generator: () => T, length = 5): T[] => {
    return Array.from({ length }, generator);
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
  object: <T extends Record<string, any>>(schema: { [K in keyof T]: () => T[K] }): T => {
    const result = {} as T;
    Object.keys(schema).forEach(key => {
      result[key as keyof T] = schema[key as keyof T]();
    });
    return result;
  }
};

/**
 * Performance measurement utility
 */
<<<<<<< HEAD
export class PerformanceTimer {
  private startTime: number = 0;
  private measurements: Map<string, number[]> = new Map();
  
=======
export class PerformanceTester {
  private startTime = 0;
  private measurements: Map<string, number[]> = new Map();

>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
  start(label: string): void {
    this.startTime = performance.now();
    performance.mark(`${label}-start`);
  }
<<<<<<< HEAD
  
  end(label: string): number {
    const endTime = performance.now();
    const duration = endTime - this.startTime;
    
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    
=======

  end(label: string): number {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    
    const duration = performance.now() - this.startTime;
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
    if (!this.measurements.has(label)) {
      this.measurements.set(label, []);
    }
    this.measurements.get(label)!.push(duration);
    
    return duration;
  }
<<<<<<< HEAD
  
  getAverage(label: string): number {
    const measurements = this.measurements.get(label);
    if (!measurements || measurements.length === 0) {
      return 0;
=======

  getAverage(label: string): number {
    const measurements = this.measurements.get(label) || [];
    if (measurements.length === 0) return 0;
    const sum = measurements.reduce((acc, val) => acc + val, 0);
    return sum / measurements.length;
  }

  getMedian(label: string): number {
    const measurements = this.measurements.get(label) || [];
    if (measurements.length === 0) return 0;
    const sorted = [...measurements].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
    }
    return measurements.reduce((sum, time) => sum + time, 0) / measurements.length;
  }
  
  getResults(): Record<string, { average: number; count: number; total: number }> {
    const results: Record<string, { average: number; count: number; total: number }> = {};
    
    this.measurements.forEach((measurements, label) => {
      const total = measurements.reduce((sum, time) => sum + time, 0);
      results[label] = {
        average: total / measurements.length,
        count: measurements.length,
        total
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
<<<<<<< HEAD
export const accessibilityHelpers = {
  checkAriaLabels: (container: HTMLElement): string[] => {
    const errors: string[] = [];
    const interactiveElements = container.querySelectorAll('button, input, select, textarea, a[href]');
=======
export const checkAccessibility = {
  hasAriaLabel: (element: Element): boolean => {
    return element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby');
  },
  hasRole: (element: Element, role: string): boolean => {
    return element.getAttribute('role') === role;
  },
  isFocusable: (element: Element): boolean => {
    const tabindex = element.getAttribute('tabindex');
    return tabindex !== '-1' && (element as HTMLElement).tabIndex >= 0;
  },
  hasAltText: (img: HTMLImageElement): boolean => {
    return Boolean(img.alt && img.alt.trim().length > 0);
  },
  hasValidContrast: (element: Element): boolean => {
    const computed = window.getComputedStyle(element);
    const color = computed.color;
    const background = computed.backgroundColor;
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
    
    interactiveElements.forEach(element => {
      const hasAriaLabel = element.hasAttribute('aria-label');
      const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim();
      const hasTitle = element.hasAttribute('title');
      
      if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent && !hasTitle) {
        errors.push(`Interactive element ${element.tagName} is missing accessible name`);
      }
    });
    
    return errors;
  },
  
  checkHeadingHierarchy: (container: HTMLElement): string[] => {
    const errors: string[] = [];
    const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1));
      
      if (index === 0 && level !== 1) {
        errors.push('First heading should be h1');
      }
      
      if (level > previousLevel + 1) {
        errors.push(`Heading level skipped from h${previousLevel} to h${level}`);
      }
      
      previousLevel = level;
    });
    
    return errors;
  },
  
  checkColorContrast: (container: HTMLElement): string[] => {
    // This is a simplified version - in real tests you'd use a proper contrast checking library
    const errors: string[] = [];
    const elements = container.querySelectorAll('*');
    
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic check for transparent backgrounds
      if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        errors.push(`Element has transparent background but colored text: ${color}`);
      }
    });
    
    return errors;
  }
};

/**
 * Component testing utilities
 */
<<<<<<< HEAD
export const componentHelpers = {
  renderWithProviders: <T extends Record<string, any>>(
    Component: React.ComponentType<T>,
    props: T = {} as T,
    providers: React.ComponentType<{ children: React.ReactNode }>[] = []
  ): React.ReactElement => {
    let element: React.ReactElement = React.createElement(Component, props);
    
    providers.reverse().forEach(Provider => {
      element = React.createElement(Provider, { children: element }, element);
    });
    
    return element;
  },
  
  mockProps: <T extends Record<string, any>>(
    defaultProps: Partial<T> = {},
    overrides: Partial<T> = {}
  ): T => {
    return { ...defaultProps, ...overrides } as T;
  },
  
  createMockEvent: (type: string, options: any = {}): Event => {
    return new Event(type, {
      bubbles: true,
      cancelable: true,
      ...options
    });
=======
export const setupTestEnvironment = (options: TestSetupOptions = {}): {
  cleanup: () => void;
  fetchMock: FetchMock;
  consoleMock: ConsoleMock;
} => {
  const fetchMock = new FetchMock();
  const consoleMock = new ConsoleMock();
  const localStorageMock = new LocalStorageMock();

  if (options.mockFetch) {
    fetchMock.install();
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
  }
};

<<<<<<< HEAD
/**
 * Async testing utilities
 */
export const asyncHelpers = {
  waitForAsync: async (callback: () => void | Promise<void>, timeout = 5000): Promise<void> => {
    const startTime = Date.now();
    
    while (true) {
      try {
        await callback();
        return;
      } catch (error) {
        if (Date.now() - startTime > timeout) {
          throw error;
        }
        await wait(50);
      }
=======
  if (options.mockConsole) {
    consoleMock.install();
  }

  if (options.mockLocalStorage) {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
  }

  if (options.mockSessionStorage) {
    Object.defineProperty(window, 'sessionStorage', {
      value: new LocalStorageMock(),
      writable: true
    });
  }

  const cleanup = () => {
    if (options.mockFetch) {
      fetchMock.restore();
    }
    if (options.mockConsole) {
      consoleMock.restore();
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
    }
  },
  
  flushPromises: (): Promise<void> => {
    return new Promise(resolve => setImmediate(resolve));
  },
  
  waitForNextTick: (): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, 0));
  }
};

export default {
  wait,
  waitFor,
  waitForElement,
  waitForElementToBeRemoved,
  click,
  type,
  mockLocalStorage,
  mockSessionStorage,
  mockFetch,
  mockConsole,
  setupTestEnvironment,
  generateMockData,
<<<<<<< HEAD
  PerformanceTimer,
  accessibilityHelpers,
  componentHelpers,
  asyncHelpers
=======
  PerformanceTester,
  checkAccessibility,
  setupTestEnvironment
>>>>>>> cursor/fix-errors-and-merge-to-main-94ce
};