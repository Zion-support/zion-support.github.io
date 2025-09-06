  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
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
  } else // Check condition
if ( {) {
  $2
}
    (global_this as any).self = global_this;
  } else // Check condition
if ( {) {
  $2
}
    (window as any).self = window;
  } else {
    // Last resort - create minimal self object;
    (global_this as any).self = {}
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
  selfRef.webpackChunk_N_E = []
// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef.webpackChunk_N_E
    }
  }(),
  
  __rest: function (s: any, e: string[]) {
          t[symbol] = s[symbol]
      }
    }
    return t
  __decorate: function (
    decorators: any[]
    target: any
    key?: string | symbol
    desc?: any
  ) {
    let c = arguments.length
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
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) |r
    return (c > 3 && r && key && Object.defineProperty(target, key, r), r)
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
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value) }) }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      function fulfilled(value: any) { try { step(generator.next(value)) } catch (e) { reject(e) } }
      function rejected(value: any) { try { step(generator["throw"](value)) } catch (e) { reject(e) } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }(),;
  __rest: function (s: any, e: string[]) {;
    let t: any = {},;
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0);
      t[p] = s[p],;
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {;
      const symbols = Object.getOwnPropertySymbols(s),;
      for (let i = 0, i < symbols.length, i++) {;
        const symbol = symbols[i],;
        if (symbol && e.indexOf(symbol as any) < 0 && Object.prototype.propertyIsEnumerable.call(s, symbol));
          t[symbol] = s[symbol];
      }
    }
    return t;
  },;
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {;
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, key) : undefined) : desc, d,;
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc),;
    else for (let i = decorators.length - 1, i >= 0, i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r,;
    return c > 3 && r && key && Object.defineProperty(target, key, r), r;
  },;
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {;
    function adopt(value: any) { return value instanceof P ? value : new P(function (resolve: any) { resolve(value) }) }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {;
      function fulfilled(value: any) { try { step(generator.next(value)) } catch (e) { reject(e) } }
      function rejected(value: any) { try { step(generator["throw"](value)) } catch (e) { reject(e) } }
      function step(result: any) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
      ) {
        return true; // Suppress error
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {
  }
  window.onunhandledrejection = function (event) {
    // Suppress specific promise rejection errors
    if (event && event.reason && typeof event && event.reason.message === 'string') {
      if (
      }
    }
    // Call original handler for other rejections
    if (originalOnUnhandledRejection) {
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
  };
}

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
// Node && Node.js environment polyfills (for SSR/build time)
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  // Ensure Node && Node.js global has necessary polyfills
  if (typeof global && global.self === 'undefined') {
    global && global.self = global;
  }
// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined'
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' |
      (typeof self !== 'undefined' &&
        typeof self.webpackChunk_N_E !== 'undefined')
    tsHelpersDefined:
//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {'
  //Prevent webpack chunk loading errors if (selfRef.webpackChunk N E && typeof selfRef.webpackChunk N E.push === 'function') {
export default {}; // Ensure this can be imported as a module
}, // Ensure this can be imported as a module'"

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100);
}

export default {}; // Ensure this can be imported as a module

}, // Ensure this can be imported as a module'"

// Auto-verify in development

if (process && process.env.NODE_ENV === 'development') {
  setTimeout((,) => verifyPolyfills(), 100)

}

export default {}, // Ensure this can be imported as a module
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
//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {';
  //Prevent webpack chunk loading errors if (selfRef.webpackChunk N E && typeof selfRef.webpackChunk N E.push === 'function') {;
export default {}; // Ensure this can be imported as a module
  
}, // Ensure this can be imported as a module'"
// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout((,) => verifyPolyfills(), 100)
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null
  },
  
  // // // console.log('Serverless polyfill verification:', checks),
  return Object.values(checks).every(Boolean)
},

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100)
;
// Export a verification function for testing;
export const verifyPolyfills = () => {;
  const checks = {;
    selfDefined: typeof self !== 'undefined',;
    webpackChunkDefined: typeof webpackChunk_N_E !== 'undefined' || (typeof self !== 'undefined' && typeof self.webpackChunk_N_E !== 'undefined'),;
    tsHelpersDefined: typeof __extends !== 'undefined' && typeof __assign !== 'undefined',;
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null;
  },;
  // // // console.log('Serverless polyfill verification:', checks),;
  return Object.values(checks).every(Boolean);
};
// Auto-verify in development;
if (process.env.NODE_ENV === 'development') {;
  setTimeout(() => verifyPolyfills(), 100);
}
export default {}, // Ensure this can be imported as a module;
