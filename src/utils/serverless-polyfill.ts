// Serverless polyfill utilities for Next.js
declare global {
  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
  var __awaiter: any;
}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    (global as any).self = global;
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).self = global;
    }
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as any).self = globalThis;
  } else if (typeof window !== 'undefined') {
    (window as any).self = window;
  } else {
    // Last resort - create minimal self object
    (globalThis as any).self = {};
  }
}

// Ensure self is properly referenced
const selfRef: any =
  typeof self !== 'undefined'
    ? self
    : typeof global !== 'undefined'
      ? global
      : typeof globalThis !== 'undefined'
        ? globalThis
        : typeof window !== 'undefined'
          ? window
          : {};

// CRITICAL: Webpack chunk array polyfill
selfRef.webpackChunk_N_E = [];

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;
}

// TypeScript helpers polyfill
if (typeof __extends === 'undefined') {
  (globalThis as any).__extends = function (d: any, b: any) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}

if (typeof __assign === 'undefined') {
  (globalThis as any).__assign = Object.assign || function (t: any) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
}

if (typeof __rest === 'undefined') {
  (globalThis as any).__rest = function (s: any, e: string[]) {
    var t: any = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
}

if (typeof __decorate === 'undefined') {
  (globalThis as any).__decorate = function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
}

if (typeof __awaiter === 'undefined') {
  (globalThis as any).__awaiter = function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value: any) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
}

// Error handling for webpack chunks
const originalConsoleError = console.error;
console.error = function (...args: any[]) {
  const message = args.join(' ');
  
  // Prevent webpack chunk loading errors from breaking the app
  if (message.includes('Loading chunk') || 
      message.includes('Loading CSS chunk') ||
      message.includes('ChunkLoadError')) {
    console.warn('Webpack chunk loading error prevented:', args);
    return;
  }
  
  // Call original console.error for other errors
  originalConsoleError.apply(console, args);
};

// Global error handler for unhandled promise rejections
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason;
    const message = error?.message || error?.toString() || 'Unknown error';
    
    // Prevent specific serverless-related errors
    if (message.includes('Cannot read properties of undefined (reading \'env\')') ||
        message.includes('Cannot destructure property') ||
        message.includes('self is not defined') ||
        message.includes('__extends') ||
        message.includes('getInitialProps')) {
      event.preventDefault();
      console.warn('Serverless polyfill prevented error:', message);
    }
  });
}

// Verify polyfills are working
const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
  };
  
  console.log('Polyfill verification:', checks);
  return checks;
};

// Run verification after a short delay
if (typeof window !== 'undefined') {
  setTimeout(() => verifyPolyfills(), 100);
}

export default {}; // Ensure this can be imported as a module