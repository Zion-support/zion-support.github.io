<<<<<<< HEAD
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));
=======
import React from 'react';
>>>>>>> origin/main

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

<<<<<<< HEAD
// Mock IntersectionObserver
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
// @ts-ignore
global.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock window.scrollTo
global.window.scrollTo = jest.fn();
=======
export default function Setup({ }: SetupProps) {
  return (
    <div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD


  // Core mocking utilities;
fn: vi.fn.bind(vi),
  mock: vi.mock.bind(vi),
  spyOn: vi.spyOn.bind(vi),
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind (vi),
  useRealTimers: vi.useRealTimers.bind (vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind (vi),
  runAllTimers: vi.runAllTimers.bind (vi),
  // Reset / clear mocks;
>>>>>>> origin/main
