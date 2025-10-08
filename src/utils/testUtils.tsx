/**
 * Test Utilities
 * Helper functions for testing React components and utilities
 */

import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';

/**
 * Mock performance API for testing
 */
export function mockPerformanceAPI() {
  if (typeof window === 'undefined') return;

  if (!window.performance) {
    (window as any).performance = {};
  }

  if (!window.performance.now) {
    window.performance.now = () => Date.now();
  }

  if (!window.performance.mark) {
    window.performance.mark = ((name: string) => ({
      name,
      entryType: 'mark' as const,
      startTime: Date.now(),
      duration: 0,
      toJSON: () => ({}),
      detail: undefined,
    })) as any;
  }

  if (!window.performance.measure) {
    window.performance.measure = ((name: string) => ({
      name,
      entryType: 'measure' as const,
      startTime: Date.now(),
      duration: 0,
      toJSON: () => ({}),
      detail: undefined,
    })) as any;
  }
}

/**
 * Mock localStorage for testing
 */
export function mockLocalStorage() {
  const store: Record<string, string> = {};

  const mockStorage = {
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
    get length() {
      return Object.keys(store).length;
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
  };

  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: true,
    });
  }

  return mockStorage;
}

/**
 * Mock fetch API for testing
 */
export function mockFetch(responseData: unknown, options: { status?: number; ok?: boolean } = {}) {
  const mockResponse = {
    ok: options.ok ?? true,
    status: options.status ?? 200,
    json: async () => responseData,
    text: async () => JSON.stringify(responseData),
    blob: async () => new Blob([JSON.stringify(responseData)]),
    headers: new Headers(),
  };

  global.fetch = jest.fn(() => Promise.resolve(mockResponse as any));
  return global.fetch;
}

/**
 * Wait for next tick (useful for async tests)
 */
export function waitForNextTick(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

/**
 * Wait for a condition to be true
 */
export async function waitFor(
  condition: () => boolean,
  timeout = 5000,
  interval = 50
): Promise<void> {
  const startTime = Date.now();

  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error('Timeout waiting for condition');
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
}

/**
 * Create a mock function with tracking
 */
export function createMockFn<T extends (...args: unknown[]) => any>(
  implementation?: T
): jest.Mock<ReturnType<T>, Parameters<T>> {
  return jest.fn(implementation) as unknown as jest.Mock<ReturnType<T>, Parameters<T>>;
}

/**
 * Suppress console errors in tests
 */
export function suppressConsoleError(): () => void {
  const originalError = console.error;
  console.error = jest.fn();

  return () => {
    console.error = originalError;
  };
}

/**
 * Suppress console warnings in tests
 */
export function suppressConsoleWarn(): () => void {
  const originalWarn = console.warn;
  console.warn = jest.fn();

  return () => {
    console.warn = originalWarn;
  };
}

/**
 * Test data generators
 */
export const testData = {
  user: (overrides = {}) => ({
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user',
    createdAt: new Date().toISOString(),
    ...overrides,
  }),

  error: (overrides = {}) => ({
    message: 'Test error',
    code: 'TEST_ERROR',
    status: 500,
    ...overrides,
  }),

  apiResponse: <T,>(data: T, overrides = {}) => ({
    success: true,
    data,
    timestamp: new Date().toISOString(),
    ...overrides,
  }),
};

/**
 * Delay execution (useful for testing loading states)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random test data
 */
export const random = {
  string: (length = 10): string => {
    return Math.random().toString(36).substring(2, 2 + length);
  },

  number: (min = 0, max = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  boolean: (): boolean => {
    return Math.random() > 0.5;
  },

  email: (): string => {
    return `${random.string(8)}@example.com`;
  },

  url: (): string => {
    return `https://example.com/${random.string(8)}`;
  },
};

/**
 * Assert that a function throws an error
 */
export async function assertThrows(
  fn: () => any | Promise<any>,
  expectedError?: string | RegExp
): Promise<void> {
  let threw = false;
  let error: unknown;

  try {
    await fn();
  } catch (e) {
    threw = true;
    error = e;
  }

  if (!threw) {
    throw new Error('Expected function to throw an error');
  }

  if (expectedError) {
    const message = (error as any)?.message || String(error);
    if (typeof expectedError === 'string') {
      if (!message.includes(expectedError)) {
        throw new Error(
          `Expected error message to include "${expectedError}", but got "${message}"`
        );
      }
    } else {
      if (!expectedError.test(message)) {
        throw new Error(
          `Expected error message to match ${expectedError}, but got "${message}"`
        );
      }
    }
  }
}

export default {
  mockPerformanceAPI,
  mockLocalStorage,
  mockFetch,
  waitForNextTick,
  waitFor,
  createMockFn,
  suppressConsoleError,
  suppressConsoleWarn,
  testData,
  delay,
  random,
  assertThrows,
};