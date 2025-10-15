import '@testing-library/jest-dom';
// Mock TextEncoder and TextDecoder;
import { TextEncoder, TextDecoder } from 'util';
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextEncoder = TextEncoder
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextDecoder = TextDecoder
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  // TODO: Implement
}
  writable: true,
  value: jest.fn().mockImplementation(query => ({
  // TODO: Implement
}
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()}))})
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  // TODO: Implement
}
  root = null
  rootMargin = ''
  thresholds = []
  constructor() {
  return;
}
  // TODO: Implement
}
  disconnect() {
  return;
}
  // TODO: Implement
}
  observe() {
  return;
}
  // TODO: Implement
}
  unobserve() {
  return;
}
  // TODO: Implement
}
  takeRecords() { return []; }
} as unknown as typeof IntersectionObserver
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  // TODO: Implement
}
  constructor() {
  return;
}
  // TODO: Implement
}
  disconnect() {
  return;
}
  // TODO: Implement
}
  observe() {
  return;
}
  // TODO: Implement
}
  unobserve() {
  return;
}
  // TODO: Implement
}
}