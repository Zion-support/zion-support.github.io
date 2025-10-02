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
    this.startTime = performance.now();
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
  }
};

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
};