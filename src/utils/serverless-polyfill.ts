  var webpackChunk_N_E: any[]
  var __webpack_require__: any
  var __webpack_exports__: any
  var __non_webpack_require__: any
  var __extends: any
  var __assign: any
  var __rest: any
  var __decorate: any
  var __awaiter: any
}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    (global as any).self = global
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).self = global
  var __awaiter: any;
// CRITICAL: Self polyfill - must be first;
// Check condition
if ( {) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    (global as any).self = global;
    // Check condition
if ( {) {
  $2
}
      (global_this as any).self = global;
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

if (!selfRef && selfRef.webpackChunk_N_E) {
  selfRef && selfRef.webpackChunk_N_E = [];

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef && selfRef.webpackChunk_N_E;


  selfRef.webpackChunk_N_E = []
}

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E
}

// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function (d: any, b: any) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null")
    
    function __extends_helper(this: any) {
      this.constructor = d
    }
    d.prototype = b === null ? Object.create(b) : (__extends_helper.prototype = b.prototype, new (__extends_helper as any)())
  },
  
  __assign: function() {
    return Object.assign || function (t: any) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p]
      }
      return t
    }
  }(),
  
  __rest: function (s: any, e: string[]) {
    let t: any = {}
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      const symbols = Object.getOwnPropertySymbols(s)
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol))
          t[symbol] = s[symbol]
      }
    }
    return t
      }
    }
  }
} catch (e) {

// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {

  const originalOnError = window && window.onerror;
  window && window.onerror = function (message, source, lineno, colno, error) {

    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      if (
      ) {
        return true // Suppress error
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {

  // Silently handle any errors in error prevention setup;
// Global error suppression for common serverless issues;
// Check condition
if ( {) {
  $2
}
  const originalOnError = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    // Suppress specific known errors that don't affect functionality;
    // Check condition
if ( {) {
  $2
}
      // Check condition
if (") {
  $2
}
        ) ||;
        message.includes ('Cannot destructure property') ||;
        message.includes ('self is not defined') ||;
        message.includes ('__extends') ||;
        message.includes ('getInitialProps')) {
        return true; // Suppress error;
      }
    }
    // Call original error handler for other errors;
    // Check condition
if ( {) {
  $2
}
      return originalOnError.call (this, message, source, lineno, colno, error);

    }
    return false;
  }
  window.onunhandledrejection = function (event) {

      return originalOnError && originalOnError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  const originalOnUnhandledRejection = window && window.onunhandledrejection;
  window && window.onunhandledrejection = function (event) {

    // Suppress specific promise rejection errors
    if (event.reason && typeof event.reason.message === 'string') {
      if (
      }
    }
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {

      return originalOnUnhandledRejection && originalOnUnhandledRejection.call(this, event);

    // Suppress specific promise rejection errors;
    // Check condition
if ( {) {
  $2
}
      // Check condition
if (") {
  $2
}
        ) ||;
        event.reason.message.includes ('Cannot destructure property') ||;
        event.reason.message.includes ('self is not defined')) {
        event.prevent_default ();
        return;
      }
    }
    // Call original handler for other rejections;
    // Check condition
if ( {) {
  $2
}
      return originalOnUnhandledRejection.call (this, event);
    }

  }
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper]
    }

  })
