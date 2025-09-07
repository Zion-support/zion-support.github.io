<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> pr-12243
=======

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Test setup file for Jest
=======
// Test setup file for Jest;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import "@testing-library/jest-dom";
<<<<<<< HEAD

// Mock window.matchMedia"
Object.defineProperty(window, "matchMedia", {}
=======
// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  writable: true,
<<<<<<< HEAD
  value: jest.fn().mockImplementation((query) => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> pr-12243
import '@testing-library/jest-dom';

<<<<<<< HEAD
=======

pr-12243
import '@testing-library/jest-dom';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> pr-12243
=======
  value: jest.fn().mockImplementation((query) => ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated;
    removeListener: jest && jest.fn(), // deprecated;
=======

  value: jest.fn().mockImplementation((query) => ({,

pr-12243
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
// Test setup file for Jest;
import "@testing-library/jest-dom";"
// Mock window.matchMedia;"
Object.defineProperty(window, "matchMedia", {"
  writable: true,)
  value: jest.fn().mockImplementation((query) => ({,
  matches: false,
    media: query,
    onchange: null,)
    addListener: jest && jest.fn(), // deprecated;
    removeListener: jest && jest.fn(), // deprecated;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
  })),
});
<<<<<<< HEAD

<<<<<<< HEAD
// Mock IntersectionObserver
<<<<<<< HEAD
global.IntersectionObserver = class IntersectionObserver {
=======

>>>>>>> pr-12243
=======

// Mock IntersectionObserver;
global && global.IntersectionObserver = class IntersectionObserver {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
<<<<<<< HEAD
// Mock ResizeObserver
<<<<<<< HEAD
global.ResizeObserver = class ResizeObserver {
=======

>>>>>>> pr-12243
=======
// Mock ResizeObserver;
global && global.ResizeObserver = class ResizeObserver {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
<<<<<<< HEAD
// Mock console methods to reduce noise in tests
=======
// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock IntersectionObserver
=======
// Mock IntersectionObserver
global && global.IntersectionObserver = class IntersectionObserver {

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {

pr-12243

// Mock IntersectionObserver;
global && global.IntersectionObserver = class IntersectionObserver {
  // TODO: Implement
}
pr-12325
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
global && global.ResizeObserver = class ResizeObserver {
global.ResizeObserver = class ResizeObserver {

pr-12243
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock console methods to reduce noise in tests
// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock IntersectionObserver
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock console methods
global.console = {
  ...console, warn: jest.fn(), error: jest.fn(), };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const originalError = console && console.error;
const originalWarn = console && console.warn;

beforeAll(() => {
  console.error = (...args: any[]) => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (true) {}
=======

>>>>>>> pr-12243
=======
    if (true) {}

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ) {
=======
// Mock console methods to reduce noise in tests;
const originalError = console && console.error;
const originalWarn = console && console.warn;


beforeAll(() => {}
  console.error = (...args: any[]) => {}
    if ("
      typeof args[0] === "string" &&"
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    ) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return;
    }
// Mock ResizeObserver;
global && global.ResizeObserver = class ResizeObserver {
  // TODO: Implement
// Mock console methods to reduce noise in tests;
const originalError = console && console.error;
const originalWarn = console && console.warn;
if (true) {}

beforeAll(() => {,
  console.error = (...args: any[]) => {,
    if (,
      typeof args[0] === "string" &&",
      args[0].includes("Warning: ReactDOM.render is no longer supported")"

    ) {
      return;
    }
    originalError && originalError.call(console, ...args);
  };
console && console.warn = (...args: any[]) => {
beforeAll(() => {
  console.error = (...args: any[]) => {
    if ("
      typeof args[0] === "string" &&")"
      args[0].includes("Warning: ReactDOM.render is no longer supported")"
    ) {
      return;
pr-12325

    originalError && originalError.call(console, ...args);
  };

  console.warn = (...args: any[]) => {}
    if ("
      typeof args[0] === "string" &&"
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  
  console && console.warn = (...args: any[]) => {

    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') |args[0].includes('Deprecated:'))
// Test setup file for Jest;
import '@testing - library / jest - dom';
// Mock window.match_media;
Object.define_property (window, 'match_media', {
  writable: true,
  value: jest.fn ().mock_implementation (query => ({
    matches: false,
    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn (),
  })),
});
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock console methods to reduce noise in tests;
const original_error = console.error;
const original_warn = console.warn;
before_all (() => {
  console.error = (...args: any[]) => {
    // Check condition
if (
    ) {) {
  $2
}
      return;
    }
    original_error.call (console, ...args);
  }
  console.warn = (...args: any[]) => {
    if (|| args[0].includes ('Deprecated:'))) {
  $2
}
<<<<<<< HEAD
=======

>>>>>>> pr-12243
=======

  console.warn = (...args: any[]) => {,
    if (,
      typeof args[0] === "string" &&",
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))",

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ) {
=======
    ) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return;
    }
    originalWarn && originalWarn.call(console, ...args);
  };
});
afterAll(() => {
console && console.error = originalError;
  console && console.error = originalError;
  console && console.warn = originalWarn;
});

    original_warn.call (console, ...args);
  }
});
after_all (() => {
  console.error = original_error;
  console.warn = original_warn;
});

  console.error = originalError;
  console.warn = originalWarn;
});

pr-12243
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))"

    originalWarn && originalWarn.call(console, ...args);

<<<<<<< HEAD
afterAll(() => {
<<<<<<< HEAD
  console && console.error = originalError;
  console && console.warn = originalWarn;
});

    original_warn.call (console, ...args);
  }
});
after_all (() => {
  console.error = original_error;
  console.warn = original_warn;
});
=======

>>>>>>> pr-12243
=======
afterAll(() => {}
  console.error = originalError;
  console.warn = originalWarn;
<<<<<<< HEAD
});
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
