import '@testing-library/jest-dom';
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', { "writable": true,
  "value": vi.fn().mockImplementation(query => ({ matches: false,
    "media": query,
    "onchange": null,
    "addListener": vi.fn(), // deprecated;
    "removeListener": vi.fn(), // deprecated;
    "addEventListener": vi.fn(),
    "removeEventListener": vi.fn(),
    "dispatchEvent": vi.fn(),})),});
// Mock IntersectionObserver;
global.IntersectionObserver = vi.fn().mockImplementation(() => ({ "observe": vi.fn(),
  "unobserve": vi.fn(),
  "disconnect": vi.fn(),}));
// Mock ResizeObserver;
global.ResizeObserver = vi.fn().mockImplementation(() => ({ "observe": vi.fn(),
  "unobserve": vi.fn(),
  "disconnect": vi.fn(),}));
// Mock scrollTo;
global.scrollTo = vi.fn();
// Mock console methods to reduce noise in tests;
global.console = {;
  ...console,
import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ writable: 'true',; value: vi.fn().mockImplementation(query => ({ matches: false,; media: 'query',; onchange: 'null',; addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),; removeEventListener: vi.fn(),; dispatchEvent: vi.fn(),;,})),;,}); global.IntersectionObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),; unobserve: vi.fn(),; disconnect: vi.fn(),;,})); global.ResizeObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),; unobserve: vi.fn(),; disconnect: vi.fn(),;,})); global.scrollTo = vi.fn(); global.console = {; ...console,; warn: vi.fn(),; error: vi.fn(),;,}
  "warn": vi.fn(),
  "error": vi.fn(),}
import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ writable: true,value: vi.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn(),,})),,}); global.IntersectionObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),unobserve: vi.fn(),disconnect: vi.fn(),,})); global.ResizeObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),unobserve: vi.fn(),disconnect: vi.fn(),,})); global.scrollTo = vi.fn(); global.console = {; ...console,warn: vi.fn(),error: vi.fn(),,}
import '@testing-library/jest-dom'; Object.defineProperty(window,'matchMedia',{ writable: true,value: vi.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn(),,})),,}); global.IntersectionObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),unobserve: vi.fn(),disconnect: vi.fn(),,})); global.ResizeObserver = vi.fn().mockImplementation(() => ({ observe: vi.fn(),unobserve: vi.fn(),disconnect: vi.fn(),,})); global.scrollTo = vi.fn(); global.console = {; ...console,warn: vi.fn(),error: vi.fn(),,}
