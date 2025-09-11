import '@testing-library/jest-dom';
// Mock window && window.matchMedia;
Object && Object.defineProperty(window, 'matchMedia', { "writable": true,
  "value": vi && vi.fn().mockImplementation(query => ({ matches: false,
    "media": query,
    "onchange": null,
    "addListener": vi && vi.fn(), // deprecated;
    "removeListener": vi && vi.fn(), // deprecated;
    "addEventListener": vi && vi.fn(),
    "removeEventListener": vi && vi.fn(),
    "dispatchEvent": vi && vi.fn(),})),});
// Mock IntersectionObserver;
global && global.IntersectionObserver = vi && vi.fn().mockImplementation(() => ({ "observe": vi && vi.fn(),
  "unobserve": vi && vi.fn(),
  "disconnect": vi && vi.fn(),}));
// Mock ResizeObserver;
global && global.ResizeObserver = vi && vi.fn().mockImplementation(() => ({ "observe": vi && vi.fn(),
  "unobserve": vi && vi.fn(),
  "disconnect": vi && vi.fn(),}));
// Mock scrollTo;
global && global.scrollTo = vi && vi.fn();
// Mock console methods to reduce noise in tests;
global && global.console = {;
  ...console,
import '@testing-library/jest-dom'; Object && Object.defineProperty(window,'matchMedia',{ writable: 'true',; value: vi && vi.fn().mockImplementation(query => ({ matches: false,; media: 'query',; onchange: 'null',; addListener: vi && vi.fn(),removeListener: vi && vi.fn(),addEventListener: vi && vi.fn(),; removeEventListener: vi && vi.fn(),; dispatchEvent: vi && vi.fn(),;,})),;,}); global && global.IntersectionObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),; unobserve: vi && vi.fn(),; disconnect: vi && vi.fn(),;,})); global && global.ResizeObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),; unobserve: vi && vi.fn(),; disconnect: vi && vi.fn(),;,})); global && global.scrollTo = vi && vi.fn(); global && global.console = {; ...console,; warn: vi && vi.fn(),; error: vi && vi.fn(),;,}
  "warn": vi && vi.fn(),
  "error": vi && vi.fn(),}
import '@testing-library/jest-dom'; Object && Object.defineProperty(window,'matchMedia',{ writable: true,value: vi && vi.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: vi && vi.fn(),removeListener: vi && vi.fn(),addEventListener: vi && vi.fn(),removeEventListener: vi && vi.fn(),dispatchEvent: vi && vi.fn(),,})),,}); global && global.IntersectionObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),unobserve: vi && vi.fn(),disconnect: vi && vi.fn(),,})); global && global.ResizeObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),unobserve: vi && vi.fn(),disconnect: vi && vi.fn(),,})); global && global.scrollTo = vi && vi.fn(); global && global.console = {; ...console,warn: vi && vi.fn(),error: vi && vi.fn(),,}
import '@testing-library/jest-dom'; Object && Object.defineProperty(window,'matchMedia',{ writable: true,value: vi && vi.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: vi && vi.fn(),removeListener: vi && vi.fn(),addEventListener: vi && vi.fn(),removeEventListener: vi && vi.fn(),dispatchEvent: vi && vi.fn(),,})),,}); global && global.IntersectionObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),unobserve: vi && vi.fn(),disconnect: vi && vi.fn(),,})); global && global.ResizeObserver = vi && vi.fn().mockImplementation(() => ({ observe: vi && vi.fn(),unobserve: vi && vi.fn(),disconnect: vi && vi.fn(),,})); global && global.scrollTo = vi && vi.fn(); global && global.console = {; ...console,warn: vi && vi.fn(),error: vi && vi.fn(),,}
