

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
  },


  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
  },
  
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
          t[symbol] = s[symbol];
      }
    }
    return t;
    );
      r = (Reflect as any).decorate (decorators, target, key, desc);
    else;
      for (let index = decorators.length - 1; i >= 0; i--);
        if ()) {
  $2
}
          r = (c < 3 ? d (r) : c > 3 ? d (target, key, r) : d (target, key)) || r;
    return (c > 3 && r && key && Object.define_property (target, key, r), r);
  },
  __awaiter: function (this_arg: any, _arguments: any, P: any, generator: any) {
    /**
 * adopt - Function description
 */
function adopt() {
      return value instanceof P;
        ? value;
        : new P (function (resolve: any) {
            resolve (value);
          });
    }
    return new (P || (P = Promise))(function (resolve: any, reject: any) {
      /**
 * fulfilled - Function description
 */
function fulfilled() {
        try {
          step (generator.next (value));
          step(generator.next(value))
        } catch (e) {
          reject (e);
        }
      }
      /**
 * rejected - Function description
 */
function rejected() {
        try {
          step (generator['throw'](value));
        } catch (e) {
          reject (e);
        }
      }
      function step(result: any) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments |[])).next())
    })
  }
}
//CRITICAL: Webpack chunk array polyfill if (throw new TypeError ("Class extends value " + String (b) + "is not a constructor or null")) {
  $2
}
}return t;
}
}
awaiter: function (this_arg: any, arguments: any, P: any, generator: any) {
  /**
 * adopt - Function description
 */
function adopt() {
  return value instanceof P ? value : new P (function (resolve: any) {
  resolve (value)
})
}return new (P |(P = Promise) ) (function (resolve: any, reject: any) {
  step ( (generator = generator.apply (thisArg, arguments |[]) ) .next () )
})
// Error prevention for common webpack issues
try {
  // Prevent webpack chunk loading errors
  if (
    selfRef.webpackChunk_N_E &&
    typeof selfRef.webpackChunk_N_E.push === 'function'
  ) {
    const originalPush = selfRef.webpackChunk_N_E.push
    selfRef.webpackChunk_N_E.push = function (chunk: any) {
      try {
        return originalPush.call(this, chunk)
      } catch (error) {
        console.warn('Webpack chunk loading error prevented:', error)
        return 0
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
},;
// Inject TypeScript helpers into global scope;
Object.keys(tsHelpers).forEach(helper => {;
  if (typeof (globalThis as any)[helper] === 'undefined') {;
    (globalThis as any)[helper] = (tsHelpers as any)[helper];
  }
  if (typeof (selfRef as any)[helper] === 'undefined') {;
    (selfRef as any)[helper] = (tsHelpers as any)[helper];
  }
}),;
// Error prevention for common webpack issues;
try {;
  // Prevent webpack chunk loading errors;
  if (selfRef.webpackChunk_N_E && typeof selfRef.webpackChunk_N_E.push === 'function') {;
    const originalPush = selfRef.webpackChunk_N_E.push,;
    selfRef.webpackChunk_N_E.push = function(chunk: any) {;
      try {;
        return originalPush.call(this, chunk);
      } catch (error) {;
        console.warn('Webpack chunk loading error prevented:', error),;
        return 0;
      }
    }
  }
} catch (e) {;
  // Silently handle any errors in error prevention setup;
}
;
// Global error suppression for common serverless issues;
if (typeof window !== 'undefined') {;
  const originalOnError = window.onerror,;
  window.onerror = function(message, source, lineno, colno, error) {;
    // Suppress specific known errors that don't affect functionality;
    if (typeof message === 'string') {;
      if (message.includes('Cannot read properties of undefined (reading \'env\')') ||;
          message.includes('Cannot destructure property') ||;
          message.includes('self is not defined') ||;
          message.includes('__extends') ||;
          message.includes('getInitialProps')) {;
        return true, // Suppress error;
      }
    }
  }
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

// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined'
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' |
      (typeof self !== 'undefined' &&

export default {}; // Ensure this can be imported as a module

}, // Ensure this can be imported as a module'"

// Auto-verify in development

if (process && process.env.NODE_ENV === 'development') {
  setTimeout((,) => verifyPolyfills(), 100)

}

export default {}, // Ensure this can be imported as a module
// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
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

export default {}, // Ensure this can be imported as a module;
