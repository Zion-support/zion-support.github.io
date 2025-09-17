// Test setup file for Jest
import "@testing-library/jest-dom";
// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
import '@testing-library/jest-dom';
// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
  })),
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
// Mock ResizeObserver
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
// Mock console methods to reduce noise in tests
const originalError = console && console.error;
const originalWarn = console && console.warn;
beforeAll(() => {
  console.error = (...args: any[]) => {
    ) {
      return;
    }
    originalError && originalError.call(console, ...args);
  };
  console && console.warn = (...args: any[]) => {
    if (
    ) {
      return;
    }
    originalWarn && originalWarn.call(console, ...args);
  };
afterAll(() => {
