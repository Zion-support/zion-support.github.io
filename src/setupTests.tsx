

/**

 */
/* eslint-disable no-console */








console.error = (...args) => {// TODO: Add content;}
}
// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console

// eslint-disable-next-line no-console
console.error = (...args) => {

  if (message.includes('Not implemented: navigation') ||
      message.includes('navigation (except hash changes)')) {// TODO: Add content;}
}

  }



Object.defineProperty(window, 'matchMedia', {// TODO: Add content;}

  writable: true,
  value: jest.fn().mockImplementation(query => ({// TODO: Add content;}

  matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
  removeListener: jest.fn(), // deprecated,
  addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))





const localStorageMock = {// TODO: Add content;}

  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
Object.defineProperty(window, 'localStorage', {// TODO: Add content;}



const sessionStorageMock = {Object.defineProperty(window, 'sessionStorage', {}






// Mock console methods for cleaner test output
// eslint-disable-next-line no-console

// eslint-disable-next-line no-console

console.warn = (...args) => {// TODO: Add content;}
}
// eslint-disable-next-line no-console
console.warn = (...args) => {

  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}

}




(window as unknown as Record<string, unknown>).location = {// TODO: Add content;}
}
          </string>
// eslint-disable-next-line no-console
console.info = (...args) => {
  const message = args[0]?.toString?.() || ''
          </string>
  if (message.includes('ReactDOM.render is no longer supported')) {
    return
          </string>
  }
  originalConsoleInfo(...args)
          </string>
}
          </string>
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
          </string>
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return []
          </string>
  }
}
          </string>
// Suppress JSDOM navigation warnings
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
  }
  originalConsoleError(...args)
          </string>
}
          </string>
// Mock window.location
delete (window as unknown as Record<string, unknown>).location
          </string>
(window as unknown as Record<string, unknown>).location = {
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn()
