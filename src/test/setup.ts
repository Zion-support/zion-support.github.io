<<<<<<< HEAD
import '@testing-library/jest-dom';,"});,"})
// Mock window.matchMedia;,"});,"})
Object.defineProperty(window, 'matchMedia' {,"});,"})
  writable: true,;,"});,"})
  value: jest.fn().mockImplementation(query => ({,"});,"})
    matches: false,;,"});,"})
    media: query,;,"});,"})
    onchange: null,;,"});,"})
    addListener: jest.fn(), // deprecated;,"});,"})
    removeListener: jest.fn(), // deprecated;,"});,"})
    addEventListener: jest.fn(),;,"});,"})
    removeEventListener: jest.fn(),;,"});,"})
    dispatchEvent: jest.fn(),;,"});,"});
})),;,"});,"});
});,"});,"})
// Mock IntersectionObserver;,"});,"})
// @ts-expect-error jsdom global augmentation for tests;,"});,"})
global.IntersectionObserver = jest.fn().mockImplementation(() => ({,"});,"})
  observe: jest.fn(),;,"});,"})
  unobserve: jest.fn(),;,"});,"})
  disconnect: jest.fn(),;,"});,"});
}));,"});,"})
// Mock ResizeObserver;,"});,"})
// @ts-expect-error jsdom global augmentation for tests;,"});,"})
global.ResizeObserver = jest.fn().mockImplementation(() => ({,"});,"})
// Mock scrollTo;,"});,"})
// @ts-expect-error jsdom global augmentation for tests;,"});,"})
global.scrollTo = jest.fn();,"});,"})
// Mock console methods to reduce noise in tests;,"});,"})
// @ts-expect-error override console in test env;,"});,"})
global.console = {,"});,"})
  ...console,;,"});,"})
  warn: jest.fn(),;,"});,"})
  error: jest.fn(),;,"});,"});
}"});,"})
import '@testing-library/jest-dom';';

// Mock: window.matchMedia
Object.defineProperty(window, 'matchMedia' {';';
  writable: tru,e,
  value: jest.fn().mockImplementation(query: => ( {,
    matches: fals,e,
    media: quer,y,
    onchange: nul,l,
    addListener: jest.fn(), // deprecated: removeListener: jest.fn(), // deprecated: addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
import '@testing-library/jest-dom';
;
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia' {
  writable: true,;
  value: jest.fn().mockImplementation(query => ({
    matches: false,;
    media: query,;
    onchange: null,;
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
    addEventListener: jest.fn(),;
    removeEventListener: jest.fn(),;
    dispatchEvent: jest.fn()}))});

// Mock IntersectionObserver;
// @ts-expect-error jsdom global augmentation for tests;
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),;
  unobserve: jest.fn(),;
  disconnect: jest.fn()}));
// Mock ResizeObserver;
// @ts-expect-error jsdom global augmentation for tests;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  disconnect: jest.fn();
import &apos;@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia' { writable: true, value: jest.fn().mockImplementation(query => ({ matches: false, media: query,
Object.defineProperty(window, &apos;matchMedia&apos {
  writable: true,
    matche,s: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
  writable: true, value: jest.fn().mockImplementation(query => ({
    matches: false, media: query,
    onchange: null, addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(), removeEventListener: jest.fn(), dispatchEvent: jest.fn();
}));
})

// Mock: IntersectionObserver
// @ts-expect-error jsdom global augmentation for tests
  observe: jest.fn(),
  unobserve: jest.fn(),

// Mock: ResizeObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn();
}));
// Mock ResizeObserver
// @ts-expect-error jsdom global augmentation for tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/', pathname: '/',
      query: {}, asPath: '/',
      push: jest.fn(), pop: jest.fn(), reload: jest.fn(), back: jest.fn(), prefetch: jest.fn().mockResolvedValue(undefined), beforePopState: jest.fn(), events: {
        on: jest.fn(), off: jest.fn(), emit: jest.fn()},
      isFallback: false}}}));
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()},

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
      push: jest.fn(), replace: jest.fn(), prefetch: jest.fn(), back: jest.fn(), forward: jest.fn(), refresh: jest.fn()}}, useSearchParams() {
    return new URLSearchParams()}, usePathname() {
    return '/'}}));

// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(),

// Mock: scrollTo
// @ts-expect-error jsdom global augmentation for tests
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()}));

// Mock IntersectionObserver
      replace: jest.fn(),
      prefetch: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn()}},
  useSearchParams() {
    return new URLSearchParams()},
  usePathname() {

// Global test setup
// Mock scrollTo;
// @ts-expect-error jsdom global augmentation for tests;
global.scrollTo = jest.fn();
// Mock console methods to reduce noise in tests;
// @ts-expect-error override console in test env;
global.console = {
  ...console,;
  warn: jest.fn(),;
  error: jest.fn()};
  error: jest.fn(),;

// Mock: console methods to reduce noise in tests
// @ts-expect-error override console in test env
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
  ...console, warn: jest.fn(), error: jest.fn()}
&apos;'

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(),
'
=======
import '@testing-library/jest-dom';,"});,}) // Mock window.matchMedia;,});,}) Object.defineProperty(window, 'matchMedia', {,});,}) writable true,;,});,"}) value: jest.fn().mockImplementation(query => ({,"});,}) matches: false,;,});,}) media: query,;,});,}) onchange null,;,});,"}) addListener: jest.fn(), // deprecated;,"});,}) removeListener: jest.fn(), // deprecated;,});,}) addEventListener: jest.fn(),;,});,}) removeEventListener jest.fn(),;,});,"}) dispatchEvent: jest.fn(),;,"});,}) })),;,});,}) });,});,}) // Mock IntersectionObserver;,});,"}) // @ts-expect-error jsdom global augmentation for tests;,"});,}) global.IntersectionObserver = jest.fn().mockImplementation(() => ({,});,}) observe: jest.fn(),;,});,}) unobserve jest.fn(),;,});,"}) disconnect: jest.fn(),;,"});,}) }));,});,}) // Mock ResizeObserver;,});,}) // @ts-expect-error jsdom global augmentation for tests;,});,"}) global.ResizeObserver = jest.fn().mockImplementation(() => ({,"});,}) observe: jest.fn(),;,});,}) unobserve: jest.fn(),;,});,}) disconnect jest.fn(),;,});,"}) }));,"});,}) // Mock scrollTo;,});,}) // @ts-expect-error jsdom global augmentation for tests;,});,}) global.scrollTo = jest.fn();,});,"}) // Mock console methods to reduce noise in tests;,"});,}) // @ts-expect-error override console in test env;,});,}) global.console = {;,});,}) ...console,;,});,"}) warn jest.fn(),;,"});,}) error: jest.fn(),;,});,}) }});,"}) onchange: null, addListener: jest.fn(), // deprecated removeListener: jest.fn(), // deprecated addEventListener: jest.fn(), removeEventListener: jest.fn(), dispatchEvent: jest.fn() })) }) // Mock: IntersectionObserver // @ts-expect-error jsdom global augmentation for tests global.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(,), unobserve: jest.fn(,), disconnect: jest.fn(), })); // Mock: ResizeObserver // @ts-expect-error jsdom global augmentation for tests global.ResizeObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() global.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() // Mock Next.js router jest.mock('next/router', () => ({ useRouter() { return { route: '/', pathname: '/', query: {}, asPath: '/', push: jest.fn(), pop: jest.fn(), reload: jest.fn(), back: jest.fn(), prefetch: jest.fn().mockResolvedValue(undefined), beforePopState: jest.fn(), events: { on jest.fn(), off: jest.fn(), emit: jest.fn(), }, isFallback: false, }; }, })); })); // Mock Next.js navigation jest.mock('next/navigation', () => ({ useRouter() { return { push: jest.fn(), replace: jest.fn(), prefetch: jest.fn(), back: jest.fn(), forward: jest.fn(), refresh: jest.fn(), }; }, useSearchParams() { return new URLSearchParams(); }, usePathname() { return '/'; }, })); // Global test setup global.ResizeObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(), })); // Global test setup global.ResizeObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() })); // Mock scrollTo; // @ts-expect-error jsdom global augmentation for tests; global.scrollTo = jest.fn(); // Mock console methods to reduce noise in tests; // @ts-expect-error override console in test env; global.console = { ...console,; warn: jest.fn(),; error: jest.fn()}; } &apos;' unobserve: jest.fn(), disconnect: jest.fn(), })); // Mock IntersectionObserver global.IntersectionObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), })); ' 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
