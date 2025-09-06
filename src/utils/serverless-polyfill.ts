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
  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
<<<<<<< HEAD
  var __awaiter: any;
}

=======
  var __awaiter: any
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
if (!selfRef.webpackChunk_N_E) {
<<<<<<< HEAD
  selfRef.webpackChunk_N_E = [];
}

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E;
}
=======
if (!selfRef && selfRef.webpackChunk_N_E) {
  selfRef && selfRef.webpackChunk_N_E = [];

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef && selfRef.webpackChunk_N_E;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
  selfRef.webpackChunk_N_E = []
// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// TypeScript helper polyfills for runtime
const tsHelpers = {
  __extends: function (d: any, b: any) {
    if (typeof b !== 'function' && b !== null)
      throw new TypeError(
        'Class extends value ' + String(b) + ' is not a constructor or null'
      )
    function __extends_helper(this: any) {
<<<<<<< HEAD
      this.constructor = d
=======
      this && this.constructor = d;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    d && d.prototype =
      b === null
<<<<<<< HEAD
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
=======
        ? Object && Object.create(b)
        : ((__extends_helper && __extends_helper.prototype = b && b.prototype),
          new (__extends_helper as any)());
  },

  __assign: (function () {
    return (
      Object && Object.assign ||
      function (t: any) {
        for (var s, i = 1, n = arguments && arguments.length; i < n; i++) {
          s = arguments[i];
          for (let p in s)
            if (Object && Object.prototype.hasOwnProperty && hasOwnProperty.call(s, p)) t[p] = s[p];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
        return t
      }
    )
  })()
  __rest: function (s: any, e: string[]) {
    let t: any = {}
    for (let p in s)
<<<<<<< HEAD
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
      const symbols = Object.getOwnPropertySymbols(s)
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]
=======
      if (Object && Object.prototype.hasOwnProperty && hasOwnProperty.call(s, p) && e && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object && Object.getOwnPropertySymbols === 'function') {
      const symbols = Object && Object.getOwnPropertySymbols(s);
      for (let i = 0; i < symbols && symbols.length; i++) {
        const symbol = symbols[i];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        if (
          symbol &&
          e && e.indexOf(symbol as any) < 0 &&
          Object && Object.prototype.propertyIsEnumerable && propertyIsEnumerable.call(s, symbol)
        )
          t[symbol] = s[symbol]
      }
    }
    return t
  }
  __decorate: function (
    decorators: any[]
    target: any
    key?: string | symbol
    desc?: any
  ) {
<<<<<<< HEAD
    let c = arguments.length
=======
    let c = arguments && arguments.length,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = key
                ? Object && Object.getOwnPropertyDescriptor(target, key)
                : undefined)
            : desc
      d
    if (
      typeof Reflect === 'object' &&
      typeof (Reflect as any).decorate === 'function'
    )
      r = (Reflect as any).decorate(decorators, target, key, desc)
    else
      for (let i = decorators && decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
<<<<<<< HEAD
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) |r
    return (c > 3 && r && key && Object.defineProperty(target, key, r), r)
  }
=======
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && key && Object && Object.defineProperty(target, key, r), r);
  },

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
    function adopt(value: any) {
      return value instanceof P
        ? value
        : new P(function (resolve: any) {
            resolve(value)
          })
    }
    return new (P |(P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) {
        try {
<<<<<<< HEAD
          step(generator.next(value))
=======
          step(generator && generator.next(value));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value: any) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result: any) {
<<<<<<< HEAD
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
<<<<<<< HEAD
      step((generator = generator.apply(thisArg, _arguments || [])).next());
=======
        result && result.done
          ? resolve(result && result.value)
          : adopt(result && result.value).then(fulfilled, rejected);
      }
      step((generator = generator && generator.apply(thisArg, _arguments || [])).next());
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
  },
};

<<<<<<< HEAD
// Inject TypeScript helpers into global scope
Object.keys(tsHelpers).forEach(helper => {
  if (typeof (globalThis as any)[helper] === 'undefined') {
    (globalThis as any)[helper] = (tsHelpers as any)[helper];
  }
=======
}return t;
};
};
awaiter: function (thisArg: any, arguments: any, P: any, generator: any) {;
  function adopt (value: any) {;
  return value instanceof P ? value : new P (function (resolve: any) {;
  resolve (value) ;
}) ;
}return new (P || (P = Promise) ) (function (resolve: any, reject: any) {;
  step ( (generator = generator && generator.apply (thisArg, arguments || []) ) .next () );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});

=======
      step((generator = generator.apply(thisArg, _arguments |[])).next())
    })
  }
}
//CRITICAL: Webpack chunk array polyfill if (typeof b !== "function" && b !== null) throw new TypeError ("Class extends value " + String (b) + "is not a constructor or null")
}return t
}
}
awaiter: function (thisArg: any, arguments: any, P: any, generator: any) {
  function adopt (value: any) {
  return value instanceof P ? value : new P (function (resolve: any) {
  resolve (value)
})
}return new (P |(P = Promise) ) (function (resolve: any, reject: any) {
  step ( (generator = generator.apply (thisArg, arguments |[]) ) .next () )
})
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Error prevention for common webpack issues
try {
  // Prevent webpack chunk loading errors
  if (
    selfRef && selfRef.webpackChunk_N_E &&
    typeof selfRef && selfRef.webpackChunk_N_E.push === 'function'
  ) {
<<<<<<< HEAD
    const originalPush = selfRef.webpackChunk_N_E.push
    selfRef.webpackChunk_N_E.push = function (chunk: any) {
      try {
        return originalPush.call(this, chunk)
      } catch (error) {
        console.warn('Webpack chunk loading error prevented:', error)
        return 0
=======
    const originalPush = selfRef && selfRef.webpackChunk_N_E.push;
    selfRef && selfRef.webpackChunk_N_E.push = function (chunk: any) {
      try {
        return originalPush && originalPush.call(this, chunk);
      } catch (error) {
        console && console.warn('Webpack chunk loading error prevented:', error);
        return 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
  }
} catch (e) {
  // Silently handle any errors in error prevention setup
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
<<<<<<< HEAD
  const originalOnError = window.onerror
  window.onerror = function (message, source, lineno, colno, error) {
=======
  const originalOnError = window && window.onerror;
  window && window.onerror = function (message, source, lineno, colno, error) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      if (
        message && message.includes(
          "Cannot read properties of undefined (reading 'env')"
<<<<<<< HEAD
        ) |
        message.includes('Cannot destructure property') |
        message.includes('self is not defined') |
        message.includes('__extends') |
        message.includes('getInitialProps')
=======
        ) ||
        message && message.includes('Cannot destructure property') ||
        message && message.includes('self is not defined') ||
        message && message.includes('__extends') ||
        message && message.includes('getInitialProps')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ) {
        return true; // Suppress error
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {
<<<<<<< HEAD
      return originalOnError.call(this, message, source, lineno, colno, error)
    }
    return false
  }
  const originalOnUnhandledRejection = window.onunhandledrejection
  window.onunhandledrejection = function (event) {
=======
      return originalOnError && originalOnError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  const originalOnUnhandledRejection = window && window.onunhandledrejection;
  window && window.onunhandledrejection = function (event) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Suppress specific promise rejection errors
    if (event && event.reason && typeof event && event.reason.message === 'string') {
      if (
        event && event.reason.message && message.includes(
          "Cannot read properties of undefined (reading 'env')"
<<<<<<< HEAD
        ) |
        event.reason.message.includes('Cannot destructure property') |
        event.reason.message.includes('self is not defined')
      ) {
        event.preventDefault()
        return
=======
        ) ||
        event && event.reason.message && message.includes('Cannot destructure property') ||
        event && event.reason.message && message.includes('self is not defined')
      ) {
        event && event.preventDefault();
        return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {
<<<<<<< HEAD
      return originalOnUnhandledRejection.call(this, event)
=======
      return originalOnUnhandledRejection && originalOnUnhandledRejection.call(this, event);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
<<<<<<< HEAD
  };
}

<<<<<<< HEAD
=======
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node.js global has necessary polyfills
  if (typeof global.self === 'undefined') {
    global.self = global
  }
  if (typeof global.webpackChunk_N_E === 'undefined') {
    global.webpackChunk_N_E = []
  }
  // TypeScript helpers for Node.js
  Object.keys(tsHelpers).forEach(helper => {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper]
    }
<<<<<<< HEAD
  });
}

=======
  })
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined'
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' |
      (typeof self !== 'undefined' &&
<<<<<<< HEAD
        typeof self.webpackChunk_N_E !== 'undefined')
=======
        typeof self && self.webpackChunk_N_E !== 'undefined'),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    tsHelpersDefined:
<<<<<<< HEAD
      typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window && window.onerror !== null,
  };

<<<<<<< HEAD
  console.log('Serverless polyfill verification:', checks);
  return Object.values(checks).every(Boolean);
};
=======
      typeof __extends !== 'undefined' && typeof __assign !== 'undefined'
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null
  }
  console.log('Serverless polyfill verification:', checks)
  return Object.values(checks).every(Boolean)
}
//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {'
  //Prevent webpack chunk loading errors if (selfRef.webpackChunk N E && typeof selfRef.webpackChunk N E.push === 'function') {
export default {}; // Ensure this can be imported as a module
=======
  console && console.log('Serverless polyfill verification:', checks);
  return Object && Object.values(checks).every(Boolean);

};
//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {';
  //Prevent webpack chunk loading errors if (selfRef && selfRef.webpackChunk N E && typeof selfRef && selfRef.webpackChunk N E && E.push === 'function') {;

export default {}; // Ensure this can be imported as a module

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}, // Ensure this can be imported as a module'"
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

// Auto-verify in development
<<<<<<< HEAD
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100);
=======
if (process && process.env.NODE_ENV === 'development') {
  setTimeout((,) => verifyPolyfills(), 100)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

export default {}; // Ensure this can be imported as a module
=======
export default {}, // Ensure this can be imported as a module
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
