'use client'
/**
 * Jest setup file for testing environment
 */
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecatedremoveListener: jest.fn(), // deprecatedaddEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }
  _originalConsoleWarn(...args)
}
console.info = (...args) => {
  }
  _originalConsoleInfo(...args)
}
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
=======
 }))
});
// Mock requestAnimationFrame
global.requestAnimationFrame= jest.fn(cb=> setTimeout(cb0));
global.cancelAnimationFrame= jest.fn(id=> clearTimeout(id));
// MocklocalStorageconstlocalStorageMock= {getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()};
Object.defineProperty(windo w, 'localStorage', {value: localStorageMock});
// MocksessionStorageconstsessionStorageMock= {getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()};
Object.defineProperty(windo w, 'sessionStorage', {value: sessionStorageMock});
// Mock fetch
global.fetch= jest.fn();
// Mock console methods for cleaner testoutputconstoriginalConsoleWarn= console.warn;
constoriginalConsoleInfo= console.info;
console.warn= (...args) => {return;
 }
  _originalConsoleWarn(...args);
};
console.info= (...args) => {return;
 }
  _originalConsoleInfo(...args);
};
// Mock PerformanceObserver
global.PerformanceObserver= class MockPerformanceObserve r {static reado nlysupportedEntry Types: reado nly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  constructor(publiccallback: PerformanceObserverCallback){}
  observe() {}
  disconnect() {}
  takeRecords() {return [];
 }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
// Suppress JSDOM navigation warnings
console.error= (...args) => {if (args[0] && args[0].type=== 'not implemented' && args[0].message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
  protocol: 'http:',
  host: 'localhost:300 0',
  hostname: 'localhost',
  port: '300 0',
  pathname: '/',
  search: '',
  hash: '',
  reload: jest.fn(),
  assign: jest.fn(),
