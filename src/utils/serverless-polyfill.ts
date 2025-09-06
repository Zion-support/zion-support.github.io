/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
/**
 * Serverless Environment Polyfill
 * 
 * This polyfill addresses common issues in serverless environments like Netlify: * - "self is not defined" errors
 * - Missing global objects
 * - Webpack chunk loading issues
 * - TypeScript helper function issues
 * 
 * This runs as the VERY FIRST script before any other code loads.
 */
// Type declarations for global augmentation
declare global {

  var webpackChunk_N_E: any[]
  var __webpack_require__: any
  var __webpack_exports__: any
  var __non_webpack_require__: any
  var __extends: any
  var __assign: any
  var __rest: any
  var __decorate: any

  var __awaiter: any
// CRITICAL: Self polyfill - must be first

if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    (global as any).self = global
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).self = global
    }
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as any).self = globalThis
  } else if (typeof window !== 'undefined') {
    (window as any).self = window
  } else {
    // Last resort - create minimal self object
    (globalThis as any).self = {}
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
          : {}
// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {
  selfRef.webpackChunk_N_E = []
// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E
// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function (d: any, b: any) {
    if (true) {}
      throw new TypeError(
        'Class extends value ' + String(b) + ' is not a constructor or null'
      )
    function __extends_helper(this: any) {
      this.constructor = d
    }
    d.prototype =
      b === null
        ? Object.create(b)
        : ((__extends_helper.prototype = b.prototype)
          new (__extends_helper as any)())
  }
  __assign: (function () {
    return (
      Object.assign |
      function (t: any) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (let p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    )
  })()
  __rest: function (s: any, e: string[]) {
    let t: any = {}
    for (let p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
      const symbols = Object.getOwnPropertySymbols(s)
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]
        if (
          symbol &&
          e.indexOf(symbol as any) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, symbol)
        )
=======
  var webpackChunk_N_E: any[],
  var __webpack_require__: any,
  var __webpack_exports__: any,
  var __non_webpack_require__: any,
  var __extends: any,
  var __assign: any,
  var __rest: any,
  var __decorate: any,
  var __awaiter: any
/* eslint-disable @typescript-eslint/no-explicit-any */;
/* eslint-disable @typescript-eslint/no-unused-vars */;
/* eslint-disable @typescript-eslint/no-this-alias */;
/* eslint-disable prefer-const */;
/**;
 * Serverless Environment Polyfill;
 *;
 * This polyfill addresses common issues in serverless environments like Netlify: * - "self is not defined" errors;
 * - Missing global objects;
 * - Webpack chunk loading issues;
 * - TypeScript helper function issues;
 *;
 * This runs as the VERY FIRST script before any other code loads.;
 */;
// Type declarations for global augmentation;
declare global {;
  var webpackChunk_N_E: any[],;
  var __webpack_require__: any,;
  var __webpack_exports__: any,;
  var __non_webpack_require__: any,;
  var __extends: any,;
  var __assign: any,;
  var __rest: any,;
  var __decorate: any,;
  var __awaiter: any;
}
;
// CRITICAL: Self polyfill - must be first;
if (typeof self === 'undefined') {;
  if (typeof global !== 'undefined') {;
    (global as any).self = global,;
    if (typeof globalThis !== 'undefined') {;
      (globalThis as any).self = global;
    }
  } else if (typeof globalThis !== 'undefined') {;
    (globalThis as any).self = globalThis;
  } else if (typeof window !== 'undefined') {;
    (window as any).self = window;
  } else {;
    // Last resort - create minimal self object;
    (globalThis as any).self = {}
  }
}
;
// Ensure self is properly referenced;
const selfRef: any = typeof self !== 'undefined' ? self :;
                    typeof global !== 'undefined' ? global :;
                    typeof globalThis !== 'undefined' ? globalThis :;
                    typeof window !== 'undefined' ? window : {},;
// CRITICAL: Webpack chunk array polyfill;
if (!selfRef.webpackChunk_N_E) {;
  selfRef.webpackChunk_N_E = [];
}
;
// Ensure webpack chunk array is properly initialized;
if (typeof webpackChunk_N_E === 'undefined') {;
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;
}

// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function(d: any, b: any) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null"),
    
;
// TypeScript helper polyfills for runtime;
const tsHelpers = {;
  __extends: function(d: any, b: any) {;
    if (typeof b !== "function" && b !== null);
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null"),;
    function __extends_helper(this: any) { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__extends_helper.prototype = b.prototype, new (__extends_helper as any)());
  },;
  __assign: function() {;
    return Object.assign || function (t: any) {;
      for (var s, i = 1, n = arguments.length, i < n, i++) {;
        s = arguments[i],;
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p));
          t[p] = s[p];
      }
      return t;
    }
  }(),
  
  __rest: function (s: any, e: string[]) {
    let t: any = {},
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p],
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      const symbols = Object.getOwnPropertySymbols(s),
      for (let i = 0, i < symbols.length, i++) {
        const symbol = symbols[i],
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol))


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          t[symbol] = s[symbol]
      }
    }
    return t

  },

      }
    }
  }


=======
}
;
// Node.js environment polyfills (for SSR/build time);
if (typeof global !== 'undefined' && typeof window === 'undefined') {;
  // Ensure Node.js global has necessary polyfills;
  if (typeof global.self === 'undefined') {;
    global.self = global;
  }
;
  if (typeof global.webpackChunk_N_E === 'undefined') {;
    global.webpackChunk_N_E = [];
  }
;
  // TypeScript helpers for Node.js;
  Object.keys(tsHelpers).forEach(helper => {;
    if (typeof (global as any)[helper] === 'undefined') {;
      (global as any)[helper] = (tsHelpers as any)[helper];
    }
  });
}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',


}

export default {}, // Ensure this can be imported as a module;


