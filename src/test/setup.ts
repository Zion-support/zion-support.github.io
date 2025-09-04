import '@testing-library/jest-dom';
;
// Global test setup;
global.ResizeObserver = jest.fn().mockImplementation(() => ({;
// Mock IntersectionObserver;
global.IntersectionObserver = jest.fn().mockImplementation(() => ({;
  "observe": "jes t.fn()", "unobserve": "jes t.fn()", "disconnect": "jes t.fn()"}));
  ...console, "warn": "jes t.fn()", "error": "jes t.fn()"}