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
declare global {
  var __awaiter: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
  var webpackChunk_N_E: any[];
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
const selfRef: any = typeof self !== 'undefined' ? self : 
                    typeof global !== 'undefined' ? global : 
                    typeof globalThis !== 'undefined' ? globalThis : 
                    typeof window !== 'undefined' ? window : {};

// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {
  selfRef.webpackChunk_N_E = [];
}

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;
}

// TypeScript helper functions polyfill
const tsHelpers = {
  __extends: function(d: any, b: any) {
    if (typeof b !== 'function' && b !== null) {
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    }
    d.prototype = Object.create(b && b.prototype, { constructor: { value: d, writable: true, configurable: true } });
    if (b) Object.setPrototypeOf(d, b);
  },
  __assign: function() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          result[key] = source[key];
        }
      }
    }
    return result;
  },
  __rest: function (s: any, e: string[]) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
      t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      for (var i = 0, symbols = Object.getOwnPropertySymbols(s); i < symbols.length; i++) {
        if (e.indexOf(symbols[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbols[i])) {
          t[symbols[i]] = s[symbols[i]];
        }
      }
    }
    return t;
  },
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  },
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value: any) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
};

// Assign TypeScript helpers to global scope
Object.assign(globalThis, tsHelpers);

// Webpack chunk loading error handler
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    const error = event.error;
    if (error && error.message) {
      const message = error.message;
      
      // Prevent webpack chunk loading errors from crashing the app
      if (message.includes('Loading chunk') || 
          message.includes('Loading CSS chunk') ||
          message.includes('ChunkLoadError')) {
        console.warn('Webpack chunk loading error prevented:', error);
        event.preventDefault();
        return false;
      }
      
      // Handle common serverless environment errors
      if (message.includes('Cannot read properties of undefined (reading \'env\')') ||
          message.includes('Cannot destructure property') ||
          message.includes('self is not defined') ||
          message.includes('__extends') ||
          message.includes('getInitialProps')) {
        console.warn('Serverless environment error handled:', error);
        event.preventDefault();
        return false;
      }
    }
  });
}

// Additional polyfills for serverless environments
if (typeof globalThis !== 'undefined') {
  // Ensure process is available
  if (typeof process === 'undefined') {
    (globalThis as any).process = { env: {} };
  }
  
  // Ensure Buffer is available
  if (typeof Buffer === 'undefined') {
    (globalThis as any).Buffer = Buffer || {};
  }
}

// Export for module systems
export default {}; // Ensure this can be imported as a module