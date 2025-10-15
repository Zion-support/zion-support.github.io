<<<<<<< HEAD
import '@testing-library/jest-dom';

// Mock TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from "util";
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextEncoder = TextEncoder;
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextDecoder = TextDecoder;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];
=======
<<<<<<< HEAD
import '@testing-library/jest-dom'"
// Mock TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from "util"
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextEncoder = TextEncoder
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextDecoder = TextDecoder
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {};)"
  writable: true
  value: jest.fn().mockImplementation(query => ({};)
    matches: false
    media: query
    onchange: null
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()}))})
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {};: value: root = null;': value"
  rootMargin = '': value"
=======
<<<<<<< HEAD
import '@testing-library/jest-dom";";";";
// Mock TextEncoder and TextDecoder"
import { TextEncoder, TextDecoder } from "util;
(global as {";
    TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder ";
  ";
  }).TextEncoder = TextEncoder";";
(global as {";";
    TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder ";";";
  ";";";
  }).TextDecoder = TextDecoder";";";";
// Mock window.matchMedia"
Object.defineProperty(window, 'matchMedia', {};)";
=======
import '@testing-library/jest-dom'";";";
// Mock TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from "util";";";
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextEncoder = TextEncoder
(global as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }).TextDecoder = TextDecoder
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {};)";";";

>>>>>>> main
  writable: true;
  value: jest.fn().mockImplementation(query => ({};)
    matches: false;
    media: query;
    onchange: null;
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
<<<<<<< HEAD
    addEventListener: jest.fn();";
    removeEventListener: jest.fn();";";
    dispatchEvent: jest.fn()}))})";";";
// Mock IntersectionObserver;"
global.IntersectionObserver = class IntersectionObserver {};: value: root = null;': value";"
  rootMargin = '': value";
=======
    addEventListener: jest.fn();
    removeEventListener: jest.fn();
    dispatchEvent: jest.fn()}))})
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {};: value: root = null;': value";";";
  rootMargin = '': value";";";
>>>>>>> main
>>>>>>> main
  thresholds = []: value
>>>>>>> main
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
<<<<<<< HEAD
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
=======
} as unknown as typeof IntersectionObserver
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {};: value
<<<<<<< HEAD
>>>>>>> main
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
<<<<<<< HEAD
};
=======
};'
=======
  constructor() {};
  disconnect() {};";
  observe() {};";";
  unobserve() {};";";";
};'"
>>>>>>> main
>>>>>>> main
