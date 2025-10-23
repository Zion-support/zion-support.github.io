'use client';
/**
 * Jest setup file for testing environment
 */
import React from 'react';
import '@testing-library/jest-do m';
// Polyfill for TextEncoder/TextDecoder
import {TextEncoderTextDecoder} from 'util';
global.TextEncoder= TextEncoder as any;
global.TextDecoder= TextDecoder as any;
// Suppress jsdo m navigationwarningsconstoriginalConsoleError= console.error;
console.error= (...args) =>{constmessage= args[0]?.toString?.() || args[0]?.message || '';
  if (message.includes('Notimplemented: navigation') || 
      message.includes('navigation (except hash changes)')) {
    return;
 }
  originalConsoleError(...args);
};
// Mock windo w.matchMedia
Object.defineProperty(windo w, 'matchMedia', {writable: true,
  value: jest.fn().mockImplementation(query=> ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecatedremoveListener: jest.fn(), // deprecatedaddEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
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
// Suppress JSDOM navigation warnings
console.error= (...args) => {if (args[0] && args[0].type=== 'not implemented' && args[0].message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
 }
  _originalConsoleError.apply(consoleargs);
};
// Mock windo w.location
delete (windo w as unknownasRecord<string, unknown>).location;
(windo w as unknownasRecord<string, unknown>).location= {href: 'http:// localhost:300 0',
  origin: 'http:// localhost:300 0',
  protocol: 'http:',
  host: 'localhost:300 0',
  hostname: 'localhost',
  port: '300 0',
  pathname: '/',
  search: '',
  hash: '',
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn()};