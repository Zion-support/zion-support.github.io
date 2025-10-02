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
  condition: () => boolean,
  timeout = 5000,
  interval = 50,
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
    cancelable: true,
  });
  element.dispatchEvent(changeEvent);
};

/**

/**
 * Mock console methods
 */
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
  start(label: string): void {
    performance.mark(`${label}-start`);
  }
    if (!this.measurements.has(label)) {
      this.measurements.set(label, []);
    }
    this.measurements.get(label)!.push(duration);
    
    return duration;
  }
    }
    return measurements.reduce((sum, time) => sum + time, 0) / measurements.length;
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
    
    return errors;
  }
};

/**
 * Component testing utilities
 */
  }
};

    }
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
};