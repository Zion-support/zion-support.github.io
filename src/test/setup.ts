<<<<<<< HEAD
// Test setup file for Jest;
import "@testing-library/jest-dom"
// Mock window.matchMedia,;
<<<<<<< HEAD
// Mock window.matchMedia,
Object.defineProperty(window, 'matchMedia', {;
  writable: true;
=======
Object.defineProperty(window, "matchMedia", {;
writable: true;,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
value: jest.fn().mockImplementation(query => ({,
matches: false;
media: query;,
onchange: null;,
addListener: jest.fn(), // deprecated;
removeListener: jest.fn(), // deprecated;
addEventListener: jest.fn(),
removeEventListener: jest.fn(),
dispatchEvent: jest.fn()
}))
})
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {
constructor() {}
disconnect() {}
observe() {}
unobserve() {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
constructor() {}
disconnect() {}
observe() {}
unobserve() {}
}
// Mock console methods to reduce noise in tests;
const originalError = console.error;
const originalWarn = console.warn;
beforeAll(() => {console.error = (...args: any[]) => {
if (
typeof args[0] === "string" &&
args[0].includes("Warning: ReactDOM.render is no longer supported")
) {
return}
originalError.call(console, ...args)
}
console.warn = (...args: any[]) => {if (
typeof args[0] === "string" &&
(args[0].includes("Warning:") |args[0].includes("Deprecated:"))
) {
return}
originalWarn.call(console, ...args)
}
})
<<<<<<< HEAD
afterAll(() => {console.error = originalError,
afterAll(() => {
  console.error = originalError,
=======
afterAll(() => {console.error = originalError;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
console.warn = originalWarn})
=======
// Test setup file for Jest,
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
