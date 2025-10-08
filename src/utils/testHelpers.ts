/**
 * Comprehensive Testing Utilities
 * Provides helpers for testing React components, hooks, and utilities
 */

import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

/**
 * Custom render function with common providers
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult {
  function AllProviders({ children }: { children: React.ReactNode }) {
    return React.createElement(HelmetProvider, null, children);
  }

  return render(ui, { wrapper: AllProviders, ...options });
}

/**
 * Wait for a condition to be true with timeout
 */
export async function waitForCondition(
  condition: () => boolean | Promise<boolean>,
  timeout: number = 5000,
  interval: number = 100
): Promise<void> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const result = await condition();
    if (result) return;
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  throw new Error(`Condition not met within ${timeout}ms`);
}

/**
 * Mock window.matchMedia for testing responsive components
 */
export function mockMatchMedia(matches: boolean = true): void {
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
}

/**
 * Mock IntersectionObserver for testing lazy loading components
 */
export function mockIntersectionObserver(): void {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver as any;
}

/**
 * Mock ResizeObserver for testing responsive components
 */
export function mockResizeObserver(): void {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver as any;
}

/**
 * Mock Performance API for testing performance monitoring
 */
export function mockPerformanceAPI(): void {
  const mockPerformance = {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    navigation: {
      type: 'navigate',
      redirectCount: 0,
    },
    timing: {
      navigationStart: Date.now(),
      loadEventEnd: Date.now() + 1000,
      domContentLoadedEventEnd: Date.now() + 500,
    },
  };

  Object.defineProperty(window, 'performance', {
    writable: true,
    value: mockPerformance,
  });
}

/**
 * Create mock fetch response
 */
export function mockFetch(data: any, ok: boolean = true, status: number = 200): void {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok,
      status,
      json: () => Promise.resolve(data),
      text: () => Promise.resolve(JSON.stringify(data)),
      headers: new Headers(),
      redirected: false,
      statusText: ok ? 'OK' : 'Error',
      type: 'basic',
      url: '',
      clone: jest.fn(),
      body: null,
      bodyUsed: false,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      blob: () => Promise.resolve(new Blob()),
      formData: () => Promise.resolve(new FormData()),
      bytes: () => Promise.resolve(new Uint8Array()),
    } as Response)
  ) as jest.Mock;
}

/**
 * Create mock localStorage
 */
export function mockLocalStorage(): void {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
      get length() {
        return Object.keys(store).length;
      },
      key: (index: number) => {
        const keys = Object.keys(store);
        return keys[index] || null;
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
}

/**
 * Create test data factory
 */
export function createTestFactory<T>(template: T): (overrides?: Partial<T>) => T {
  return (overrides?: Partial<T>) => ({
    ...template,
    ...overrides,
  });
}

/**
 * Generate array of test data
 */
export function generateTestData<T>(
  factory: (index: number) => T,
  count: number
): T[] {
  return Array.from({ length: count }, (_, i) => factory(i));
}

/**
 * Suppress console errors/warnings during tests
 */
export function suppressConsole(methods: Array<'error' | 'warn' | 'log'> = ['error']): () => void {
  const originalMethods: Record<string, any> = {};

  methods.forEach((method) => {
    originalMethods[method] = console[method];
    console[method] = jest.fn();
  });

  return () => {
    methods.forEach((method) => {
      console[method] = originalMethods[method];
    });
  };
}

/**
 * Create delayed promise for testing async behavior
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Flush all pending promises
 */
export async function flushPromises(): Promise<void> {
  await new Promise((resolve) => setImmediate(resolve));
}

/**
 * Test if component renders without crashing
 */
export function testComponentRenders(
  component: ReactElement,
  description?: string
): void {
  it(description || 'renders without crashing', () => {
    const { container } = renderWithProviders(component);
    expect(container).toBeTruthy();
  });
}

/**
 * Test if component contains specific text
 */
export function testComponentContainsText(
  component: ReactElement,
  text: string | RegExp,
  description?: string
): void {
  it(description || `contains text: ${text}`, () => {
    const { getByText } = renderWithProviders(component);
    expect(getByText(text)).toBeInTheDocument();
  });
}

/**
 * Test if component has accessible name
 */
export function testComponentAccessibility(
  component: ReactElement,
  role: string,
  name: string | RegExp,
  description?: string
): void {
  it(description || `has accessible ${role}: ${name}`, () => {
    const { getByRole } = renderWithProviders(component);
    expect(getByRole(role, { name })).toBeInTheDocument();
  });
}

/**
 * Snapshot testing helper
 */
export function testComponentSnapshot(
  component: ReactElement,
  description?: string
): void {
  it(description || 'matches snapshot', () => {
    const { container } = renderWithProviders(component);
    expect(container.firstChild).toMatchSnapshot();
  });
}

/**
 * Performance testing helper
 */
export async function measureRenderTime(
  component: ReactElement
): Promise<number> {
  const startTime = performance.now();
  const { unmount } = renderWithProviders(component);
  const endTime = performance.now();
  unmount();
  return endTime - startTime;
}

/**
 * Memory leak detection helper
 */
export function detectMemoryLeaks(
  componentFactory: () => ReactElement,
  iterations: number = 100
): boolean {
  const initialMemory = (performance as any).memory?.usedJSHeapSize || 0;

  for (let i = 0; i < iterations; i++) {
    const { unmount } = renderWithProviders(componentFactory());
    unmount();
  }

  const finalMemory = (performance as any).memory?.usedJSHeapSize || 0;
  const memoryIncrease = finalMemory - initialMemory;

  // If memory increased by more than 10MB, likely a leak
  return memoryIncrease > 10 * 1024 * 1024;
}

export default {
  renderWithProviders,
  waitForCondition,
  mockMatchMedia,
  mockIntersectionObserver,
  mockResizeObserver,
  mockPerformanceAPI,
  mockFetch,
  mockLocalStorage,
  createTestFactory,
  generateTestData,
  suppressConsole,
  delay,
  flushPromises,
  testComponentRenders,
  testComponentContainsText,
  testComponentAccessibility,
  testComponentSnapshot,
  measureRenderTime,
  detectMemoryLeaks,
};
