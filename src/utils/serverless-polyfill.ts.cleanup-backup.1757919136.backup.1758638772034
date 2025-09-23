/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
/**
 * Serverless Environment Polyfill
 * 
<<<<<<< HEAD
 * This polyfill addresses common issues in serverless environments like Netlify: * - "self is not defined" errors
=======
 * This polyfill addresses common issues in serverless environments like Netlify:
 * - "self is not defined" errors
>>>>>>> origin/auto/autonomy-17186719616
 * - Missing global objects
 * - Webpack chunk loading issues
 * - TypeScript helper function issues
 * 
 * This runs as the VERY FIRST script before any other code loads.
 */

// Type declarations for global augmentation
declare global {
<<<<<<< HEAD
  var webpackChunk_N_E: any[],
  var __webpack_require__: any,
  var __webpack_exports__: any,
  var __non_webpack_require__: any,
  var __extends: any,
  var __assign: any,
  var __rest: any,
  var __decorate: any,
  var __awaiter: any
=======
  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
  var __awaiter: any;
>>>>>>> origin/auto/autonomy-17186719616
}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
<<<<<<< HEAD
    (global as any).self = global,
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).self = global
    }
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as any).self = globalThis,
  } else if (typeof window !== 'undefined') {
    (window as any).self = window,
  } else {
    // Last resort - create minimal self object
    (globalThis as any).self = {},
  }

=======
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
>>>>>>> origin/auto/autonomy-17186719616

// Ensure self is properly referenced
const selfRef: any = typeof self !== 'undefined' ? self : 
                    typeof global !== 'undefined' ? global :
                    typeof globalThis !== 'undefined' ? globalThis :
<<<<<<< HEAD
                    typeof window !== 'undefined' ? window : {},

// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {
  selfRef.webpackChunk_N_E = []
=======
                    typeof window !== 'undefined' ? window : {};

// CRITICAL: Webpack chunk array polyfill
if (!selfRef.webpackChunk_N_E) {
  selfRef.webpackChunk_N_E = [];
>>>>>>> origin/auto/autonomy-17186719616
}

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
<<<<<<< HEAD
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E,
=======
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;
>>>>>>> origin/auto/autonomy-17186719616
}

// TypeScript helper polyfills for runtime
const tsHelpers = {
<<<<<<< HEAD
  __extends: function (d: any, b: any) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null"),
    
    function __extends_helper(this: any) { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__extends_helper.prototype = b.prototype, new (__extends_helper as any)()),
=======
  __extends: function(d: any, b: any) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    
    function __extends_helper(this: any) { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__extends_helper.prototype = b.prototype, new (__extends_helper as any)());
>>>>>>> origin/auto/autonomy-17186719616
  },
  
  __assign: function() {
    return Object.assign || function (t: any) {
<<<<<<< HEAD
      for (var s, i = 1, n = arguments.length, i < n, i++) {
        s = arguments[i],
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p],
      }
      return t,
    },
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
          t[symbol] = s[symbol],
      }
    }
    return t,
  },
  
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, key) : undefined) : desc, d,
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc),
    else for (let i = decorators.length - 1, i >= 0, i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r,
    return c > 3 && r && key && Object.defineProperty(target, key, r), r,
  },
  
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value) }), }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) { try { step(generator.next(value)) } catch (e) { reject(e), } }
      function rejected(value: any) { try { step(generator["throw"](value)) } catch (e) { reject(e), } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected), }
      step((generator = generator.apply(thisArg, _arguments || [])).next()),
    }),
  }
},
=======
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
  }(),
  
  __rest: function (s: any, e: string[]) {
    let t: any = {};
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
      const symbols = Object.getOwnPropertySymbols(s);
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol))
          t[symbol] = s[symbol];
      }
    }
    return t;
  },
  
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, key) : undefined) : desc, d;
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc);
    else for (let i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && key && Object.defineProperty(target, key, r), r;
  },
  
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value: any) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
};
>>>>>>> origin/auto/autonomy-17186719616

// Inject TypeScript helpers into global scope
Object.keys(tsHelpers).forEach(helper => {
  if (typeof (globalThis as any)[helper] === 'undefined') {
<<<<<<< HEAD
    (globalThis as any)[helper] = (tsHelpers as any)[helper],
  }
  if (typeof (selfRef as any)[helper] === 'undefined') {
    (selfRef as any)[helper] = (tsHelpers as any)[helper],
  }
}),
=======
    (globalThis as any)[helper] = (tsHelpers as any)[helper];
  }
  if (typeof (selfRef as any)[helper] === 'undefined') {
    (selfRef as any)[helper] = (tsHelpers as any)[helper];
  }
});
>>>>>>> origin/auto/autonomy-17186719616

// Error prevention for common webpack issues
try {
  // Prevent webpack chunk loading errors
  if (selfRef.webpackChunk_N_E && typeof selfRef.webpackChunk_N_E.push === 'function') {
<<<<<<< HEAD
    const originalPush = selfRef.webpackChunk_N_E.push,
    selfRef.webpackChunk_N_E.push = function(chunk: any) {
      try {
        return originalPush.call(this, chunk),
      } catch (error) {
        console.warn('Webpack chunk loading error prevented:', error),
        return 0,
      }
    },
=======
    const originalPush = selfRef.webpackChunk_N_E.push;
    selfRef.webpackChunk_N_E.push = function(chunk: any) {
      try {
        return originalPush.call(this, chunk);
      } catch (error) {
        console.warn('Webpack chunk loading error prevented:', error);
        return 0;
      }
    };
>>>>>>> origin/auto/autonomy-17186719616
  }
} catch (e) {
  // Silently handle any errors in error prevention setup
}

<<<<<<< HEAD


// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
  const originalOnError = window.onerror,
=======
// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
  const originalOnError = window.onerror;
>>>>>>> origin/auto/autonomy-17186719616
  window.onerror = function(message, source, lineno, colno, error) {
    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      if (message.includes('Cannot read properties of undefined (reading \'env\')') ||
          message.includes('Cannot destructure property') ||
          message.includes('self is not defined') ||
          message.includes('__extends') ||
          message.includes('getInitialProps')) {
<<<<<<< HEAD
        return true, // Suppress error
=======
        return true; // Suppress error
>>>>>>> origin/auto/autonomy-17186719616
      }
    }
    
    // Call original error handler for other errors
    if (originalOnError) {
<<<<<<< HEAD
      return originalOnError.call(this, message, source, lineno, colno, error),
    }
    return false,
  },

  const originalOnUnhandledRejection = window.onunhandledrejection,
=======
      return originalOnError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  const originalOnUnhandledRejection = window.onunhandledrejection;
>>>>>>> origin/auto/autonomy-17186719616
  window.onunhandledrejection = function(event) {
    // Suppress specific promise rejection errors
    if (event.reason && typeof event.reason.message === 'string') {
      if (event.reason.message.includes('Cannot read properties of undefined (reading \'env\')') ||
          event.reason.message.includes('Cannot destructure property') ||
          event.reason.message.includes('self is not defined')) {
<<<<<<< HEAD
        event.preventDefault(),
        return,
=======
        event.preventDefault();
        return;
>>>>>>> origin/auto/autonomy-17186719616
      }
    }
    
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {
<<<<<<< HEAD
      return originalOnUnhandledRejection.call(this, event),
    }
  },
=======
      return originalOnUnhandledRejection.call(this, event);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
}

// Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node.js global has necessary polyfills
  if (typeof global.self === 'undefined') {
<<<<<<< HEAD
    global.self = global,
  }
  
  if (typeof global.webpackChunk_N_E === 'undefined') {
    global.webpackChunk_N_E = [],
  }
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {
// Node && Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node && Node.js global has necessary polyfills
  if (typeof global && global.self === 'undefined') {
    global && global.self = global;
  }

  if (typeof global && global.webpackChunk_N_E === 'undefined') {
    global && global.webpackChunk_N_E = [];
  }

  // TypeScript helpers for Node && Node.js
  Object && Object.keys(tsHelpers).forEach(helper => {
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper],
    }
  }),
=======
    global.self = global;
  }
  
  if (typeof global.webpackChunk_N_E === 'undefined') {
    global.webpackChunk_N_E = [];
  }
  
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper];
    }
  });
>>>>>>> origin/auto/autonomy-17186719616
}

// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null
<<<<<<< HEAD
  },
  
  // // // console.log('Serverless polyfill verification:', checks),
  return Object.values(checks).every(Boolean),
},

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100),
}
export default {}, // Ensure this can be imported as a module;

export default {}, // Ensure this can be imported as a module
=======
  };
  
  console.log('Serverless polyfill verification:', checks);
  return Object.values(checks).every(Boolean);
};

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100);
}

export default {}; // Ensure this can be imported as a module
>>>>>>> origin/auto/autonomy-17186719616
