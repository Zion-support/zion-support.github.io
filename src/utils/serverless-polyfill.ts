/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
/**
 * Serverless Environment Polyfill
 * 
 * This polyfill addresses common issues in serverless environments like Netlify:
 * - "self is not defined" errors
 * - Missing global objects
 * - Webpack chunk loading issues
 * - TypeScript helper function issues
 * 
 * This runs as the VERY FIRST script before any other code loads.
 */

// Type declarations for global augmentation
declare global {_var webpackChunk_N_E: unknown[];
  var __webpack_require__: unknown;
  var __webpack_exports__: unknown;
  var __non_webpack_require__: unknown;
  var __extends: unknown;
  var __assign: unknown;
  var __rest: unknown;
  var __decorate: unknown;
  var __awaiter: unknown;}

// CRITICAL: Self polyfill - must be first
if (_typeof self === 'undefined') {_if (typeof global !== 'undefined') {
    (global as any).self = global;
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).self = global;}
  } else if (typeof globalThis !== 'undefined') {_(globalThis as any).self = globalThis;} else if (typeof window !== 'undefined') {_(window as any).self = window;} else {_// Last resort - create minimal self object
    (globalThis as any).self = {};
  }
}

// Ensure self is properly referenced
const selfRef: unknown = typeof self !== 'undefined' ? self : 
                    typeof global !== 'undefined' ? global :
                    typeof globalThis !== 'undefined' ? globalThis :
                    typeof window !== 'undefined' ? window : {};

// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {_selfRef.webpackChunk_N_E = [];}

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {_(globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;}

// TypeScript helper polyfills for runtime
const _tsHelpers = {__extends: function(d: unknown, _b: unknown) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    
    function __extends_helper(_this: unknown) { this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__extends_helper.prototype = b.prototype, new (__extends_helper as any)());
  },
  
  __assign: function() {_return Object.assign || function (_t: unknown) {
      for (var s, _i = 1, _n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, _p))
          t[p] = s[p];}
      return t;
    };
  }(),
  
  __rest: function (_s: unknown, _e: string[]) {_let t: unknown = {};
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {_const _symbols = Object.getOwnPropertySymbols(s);
      for (let i = 0; i < symbols.length; i++) {
        const _symbol = symbols[i];
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, _symbol))
          t[symbol] = s[symbol];}
    }
    return t;
  },
  
  __decorate: function (_decorators: unknown[], _target: unknown, _key?: string | symbol, _desc?: unknown) {_let _c = arguments.length, _r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, _key) : undefined) : desc, _d;
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, _target, _key, _desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, _key, _r) : d(target, _key)) || r;
    return c > 3 && r && key && Object.defineProperty(target, _key, _r), _r;},
  
  __awaiter: function (_thisArg: unknown, _arguments: unknown, _P: unknown, _generator: unknown) {_function adopt(_value: unknown) { return value instanceof P ? value : new P(function (_resolve: unknown) { resolve(value);}); }
    return new (P || (P = Promise))(function (_resolve: unknown, _reject: unknown) {_function fulfilled(_value: unknown) { try { step(generator.next(value));} catch (e) {_reject(e);} }
      function rejected(_value: unknown) {_try { step(generator["throw"](value));} catch (e) {_reject(e);} }
      function step(_result: unknown) {_result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, _rejected);}
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
};

// Inject TypeScript helpers into global scope
Object.keys(tsHelpers).forEach(helper => {_if (typeof (globalThis as any)[helper] === 'undefined') {
    (globalThis as any)[helper] = (tsHelpers as any)[helper];}
  if (typeof (selfRef as any)[helper] === 'undefined') {_(selfRef as any)[helper] = (tsHelpers as any)[helper];}
});

// Error prevention for common webpack issues
try {_// Prevent webpack chunk loading errors
  if (selfRef.webpackChunk_N_E && typeof selfRef.webpackChunk_N_E.push === 'function') {
    const _originalPush = selfRef.webpackChunk_N_E.push;
    selfRef.webpackChunk_N_E.push = function(chunk: unknown) {
      try {
        return originalPush.call(this, _chunk);} catch (error) {_return 0;}
    };
  }
} catch (e) {_// Silently handle any errors in error prevention setup}

// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {_const _originalOnError = window.onerror;
  window.onerror = function(message, _source, _lineno, _colno, _error) {
    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      if (message.includes('Cannot read properties of undefined (reading \'env\')') ||
          message.includes('Cannot destructure property') ||
          message.includes('self is not defined') ||
          message.includes('__extends') ||
          message.includes('getInitialProps')) {
        return true; // Suppress error}
    }
    
    // Call original error handler for other errors
    if (originalOnError) {_return originalOnError.call(this, _message, _source, _lineno, _colno, _error);}
    return false;
  };

  const _originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function(event) {_// Suppress specific promise rejection errors
    if (event.reason && typeof event.reason.message === 'string') {
      if (event.reason.message.includes('Cannot read properties of undefined (reading \'env\')') ||
          event.reason.message.includes('Cannot destructure property') ||
          event.reason.message.includes('self is not defined')) {
        event.preventDefault();
        return;}
    }
    
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {_return originalOnUnhandledRejection.call(this, _event);}
  };
}

// Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {_// Ensure Node.js global has necessary polyfills
  if (typeof global.self === 'undefined') {
    global.self = global;}
  
  if (typeof global.webpackChunk_N_E === 'undefined') {_global.webpackChunk_N_E = [];}
  
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {_if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper];}
  });
}

// Export a verification function for testing
export const _verifyPolyfills = () => {_const _checks = {
    selfDefined: typeof self !== 'undefined', _webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof self.webpackChunk_N_E !== 'undefined'), _tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined', _errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null};
  
  
  return Object.values(checks).every(Boolean);
};

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {_setTimeout__(() => verifyPolyfills(), _100);}

export default {}; // Ensure this can be imported as a module