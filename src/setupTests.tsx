<<<<<<< HEAD
'use client'
/**
 * Jest setup file for testing environment
 */
import React from 'react';
import '@testing-library/jest-dom';
// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder as any
global.TextDecoder = TextDecoder as any
// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
console.error = (...args) => {}
  const message = args[0]?.toString?.() || args[0]?.message || '';
  if (message.includes('Not implemented: navigation') ||
      message.includes('navigation (except hash changes)')) {}
    return
{  }
  originalConsoleError(...args)
{}
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {}
  writable: true
  value: jest.fn().mockImplementation(query => ({}
    matches: false
    media: query
    onchange: null
    addListener: jest.fn(), // deprecatedremoveListener: jest.fn(), // deprecatedaddEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()
{  }))
{})
// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0))
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id))
// Mock localStorage
const localStorageMock = {};
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
const localStorageMock = {}
  getItem: jest.fn()
  setItem: jest.fn()
  removeItem: jest.fn()
  clear: jest.fn()
{}
Object.defineProperty(window, 'localStorage', {}
  value: localStorageMock
{})
// Mock sessionStorage
const sessionStorageMock = {};
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
const sessionStorageMock = {}
  getItem: jest.fn()
  setItem: jest.fn()
  removeItem: jest.fn()
  clear: jest.fn()
{}
Object.defineProperty(window, 'sessionStorage', {}
  value: sessionStorageMock
{})
// Mock fetch
global.fetch = jest.fn()
// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
console.warn = (...args) => {}
    return
{  }
  _originalConsoleWarn(...args)
{}
console.info = (...args) => {}
    return
{  }
  _originalConsoleInfo(...args)
{}
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {}
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {}
    return []
{  };
{};
  }
}
=======
import React from "react";

interface SetupTestsProps {
  // Add props here
}

const SetupTests: React.FC<SetupTestsProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          SetupTests
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the SetupTests page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetupTests;
>>>>>>> origin/main
