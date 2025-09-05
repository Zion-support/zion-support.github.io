import '@testing-library/jest-dom';

// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
<<<<<<< HEAD
  "observe": jes t.fn(), "unobserve": jes t.fn(), "disconnect": jes t.fn()}));
=======';
  "disconnect": jest.fn();
import &apos;@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia' { "writable": true, "value": jest.fn().mockImplementation(query => ({ matches: false, "media": query,
Object.defineProperty(window, &apos;matchMedia&apos {
  "writable": true,
    matche,"s": false,
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
  "writable": true, "value": jest.fn().mockImplementation(query => ({
   , "matches": false, "media": query,
    "onchange": null, "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(), "removeEventListener": jest.fn(), "dispatchEvent": jest.fn()}))})

// "Mock": IntersectionObserver
// @ts-expect-error jsdom global augmentation for tests
  observe: jest.fn(),
  "unobserve": jest.fn(),

// "Mock": ResizeObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()}));
// Mock ResizeObserver
// @ts-expect-error jsdom global augmentation for tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({ "observe": jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()
  observe: jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      "route": '/', "pathname": '/',
      "query": {}, "asPath": '/',
      "push": jest.fn(), "pop": jest.fn(), "reload": jest.fn(), "back": jest.fn(), "prefetch": jest.fn().mockResolvedValue(undefined), "beforePopState": jest.fn(), "events": {
        on: jest.fn(), "off": jest.fn(), "emit": jest.fn()},
      "isFallback": false}}}));';';
      "route": '/',
      "pathname": '/',
      "query": {},
      "asPath": '/',
      "push": jest.fn(),
      "pop": jest.fn(),
      "reload": jest.fn(),
      "back": jest.fn(),
      "prefetch": jest.fn().mockResolvedValue(undefined),
      "beforePopState": jest.fn(),
      "events": {
        on: jest.fn(),
        "off": jest.fn(),
        "emit": jest.fn()},

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
      "push": jest.fn(), "replace": jest.fn(), "prefetch": jest.fn(), "back": jest.fn(), "forward": jest.fn(), "refresh": jest.fn()}}, useSearchParams() {
    return new URLSearchParams()}, usePathname() {
    return '/'}}));

// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({"observe": jest.fn(),

// "Mock": scrollTo
// @ts-expect-error jsdom global augmentation for tests
  observe: jest.fn(), "unobserve": jest.fn(), "disconnect": jest.fn()}));
>>>>>>> origin/merge-pr-11138

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  "observe": jes t.fn(), "unobserve": jes t.fn(), "disconnect": jes t.fn()}));
  ...console, "warn": jes t.fn(), "error": jes t.fn()}
;';';