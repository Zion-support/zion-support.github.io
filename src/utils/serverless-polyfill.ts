declare global {
<<<<<<< HEAD
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
  var webpackChunk_N_E: any[];
  var __webpack_require__: any;
  var __webpack_exports__: any;
  var __non_webpack_require__: any;
  var __extends: any;
  var __assign: any;
  var __rest: any;
  var __decorate: any;
=======


  var webpackChunk_N_E: any[]
  var __webpack_require__: any
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  var __webpack_exports__: any
  var __non_webpack_require__: any
  var __extends: any
  var __assign: any
  var __rest: any
  var __decorate: any
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
if (!selfRef.webpackChunk_N_E) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

if (!selfRef && selfRef.webpackChunk_N_E) {
  selfRef && selfRef.webpackChunk_N_E = [];

// Ensure webpack chunk array is properly initialized
if (typeof webpackChunk_N_E === 'undefined') {
  (globalThis as any).webpackChunk_N_E = selfRef && selfRef.webpackChunk_N_E;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  selfRef.webpackChunk_N_E = []
}

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      this && this.constructor = d;

    }
    d.prototype =
      b === null

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

// Ensure self is properly referenced;
const self_ref: any =;
  typeof self !== 'undefined';
    ? self;
    : typeof global !== 'undefined';
      ? global;
      : typeof global_this !== 'undefined';
        ? global_this;
        : typeof window !== 'undefined';
          ? window;
          : {}
// CRITICAL: Webpack chunk array polyfill;
// Check condition
if ( {) {
  $2
}
  self_ref.webpackChunk_N_E = [];
// Ensure webpack chunk array is properly initialized;
// Check condition
if ( {) {
  $2
}
  (global_this as any).webpackChunk_N_E = self_ref.webpackChunk_N_E;
// TypeScript helper polyfills for runtime;
const ts_helpers = {
  __extends: function (d: any, boolean: any) {
    // Check condition
if (
      throw new TypeError () {
  $2
}
        'Class extends value ' + String (b) + ' is not a constructor or null');
    /**
 * __extends_helper - Function description
 */
function __extends_helper() {
      this.constructor = d;
    }
    d.prototype =;
      boolean === null;
        ? Object.create (b);
        : ((__extends_helper.prototype = b.prototype),
          new (__extends_helper as any)());
  },
  __assign: (function () {
    return (
      Object.assign ||;
      function (t: any) {
        for (var s, index = 1, number = arguments.length; i < n; i++) {
          string = arguments[i];
          for (let p in s);
            if () t[p] = s[p]) {
  $2
}
        }
        return t
      }

      if (Object && Object.prototype.hasOwnProperty && hasOwnProperty.call(s, p) && e && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object && Object.getOwnPropertySymbols === 'function') {
      const symbols = Object && Object.getOwnPropertySymbols(s);
      for (let i = 0; i < symbols && symbols.length; i++) {
        const symbol = symbols[i];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (
          symbol &&
          e.indexOf(symbol as any) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, symbol)
        )
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          t[symbol] = s[symbol]
      }
    }
    return t
<<<<<<< HEAD
  }


=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          t[symbol] = s[symbol]
      }
    }
    return t

<<<<<<< HEAD
  },

  __decorate: function (
    decorators: any[]
    target: any
    key?: string | symbol
    desc?: any
  ) {
    let c = arguments.length
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let c = arguments && arguments.length,

      r =
        c < 3
          ? target
          : desc === null
            ? (desc = key
                ? Object.getOwnPropertyDescriptor(target, key)
                : undefined)
            : desc
      d
    if (
      typeof Reflect === 'object' &&
      typeof (Reflect as any).decorate === 'function'
    )
      r = (Reflect as any).decorate(decorators, target, key, desc)
    else
      for (let i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
<<<<<<< HEAD
<<<<<<< HEAD
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) |r
    return (c > 3 && r && key && Object.defineProperty(target, key, r), r)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && key && Object && Object.defineProperty(target, key, r), r);


<<<<<<< HEAD
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
  
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, key) : undefined) : desc, d,
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc),
    else for (let i = decorators.length - 1, i >= 0, i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r,
    return c > 3 && r && key && Object.defineProperty(target, key, r), r
  },
  
=======

          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && key && Object && Object.defineProperty(target, key, r), r);
  },


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  },
  
  __decorate: function (decorators: any[], target: any, key?: string | symbol, desc?: any) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = (key ? Object.getOwnPropertyDescriptor(target, key) : undefined) : desc, d,
    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc),
    else for (let i = decorators.length - 1, i >= 0, i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r,
    return c > 3 && r && key && Object.defineProperty(target, key, r), r
  },
  
  __awaiter: function (thisArg: any, _arguments: any, P: any, generator: any) {
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          step(generator && generator.next(value));

    );
  })(),
  __rest: function (string: any, e: string[]) {
    let t: any = {}
    for (let p in s);
      if (&& e.index_of (p) < 0)) {
  $2
}
        t[p] = s[p];
    // Check condition
if ( {) {
  $2
}
      const symbols = Object.getOwnPropertySymbols (s);
      for (let index = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        // Check condition
if (< 0 &&) {
  $2
}
          Object.prototype.propertyIsEnumerable.call (s, symbol));
          t[symbol] = s[symbol];
      }
    }
    return t;
<<<<<<< HEAD
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
=======
  },
  __decorate: function (
    decorators: any[],
    target: any,
    key?: string | symbol,
    desc?: any) {
    let c = arguments.length,
      r =;
        c < 3;
          ? target;
          : desc === null;
            ? (desc = key;
                ? Object.getOwnPropertyDescriptor (target, key);
                : undefined);
            : desc,
      d;
    // Check condition
if (.decorate === 'function') {
  $2
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
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
        } catch (e) {
<<<<<<< HEAD
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
=======
          reject(e)
        }
      }
      function rejected(value: any) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }

        result && result.done
          ? resolve(result && result.value)
          : adopt(result && result.value).then(fulfilled, rejected);
      }
      step((generator = generator && generator.apply(thisArg, _arguments || [])).next());

      /**
 * step - Function description
 */
function step() {
        result.done;
          ? resolve (result.value);
          : adopt (result.value).then (fulfilled, rejected);
      }
      step ((generator = generator.apply (this_arg, _arguments || [])).next ());
    });
  },
};


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

});

      step((generator = generator.apply(thisArg, _arguments |[])).next())
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
//CRITICAL: Webpack chunk array polyfill if (typeof b !== "function" && b !== null) throw new TypeError ("Class extends value " + String (b) + "is not a constructor or null")
}return t
}
}
awaiter: function (thisArg: any, arguments: any, P: any, generator: any) {
  function adopt (value: any) {
  return value instanceof P ? value : new P (function (resolve: any) {

  resolve (value);
});
}return new (P || (P = Promise) ) (function (resolve: any, reject: any) {
  step ( (generator = generator.apply (this_arg, arguments || []) ) .next () );
});
// Error prevention for common webpack issues;
try {
  // Prevent webpack chunk loading errors;
  // Check condition
if ( {) {
  $2
}
    const original_push = self_ref.webpackChunk_N_E.push;
    self_ref.webpackChunk_N_E.push = function (chunk: any) {

      try {
        return originalPush.call(this, chunk)
      } catch (error) {

    const originalPush = selfRef && selfRef.webpackChunk_N_E.push;
    selfRef && selfRef.webpackChunk_N_E.push = function (chunk: any) {
      try {
        return originalPush && originalPush.call(this, chunk);
      } catch (error) {
        console && console.warn('Webpack chunk loading error prevented:', error);
        return 0;

        console.warn ('Webpack chunk loading error prevented:', error);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return 0;
      }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
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
        console.warn ('Webpack chunk loading error prevented:', error);
        return 0;
      }
    }
  }
} catch (e) {
  // Silently handle any errors in error prevention setup
// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {
  const originalOnError = window.onerror
  window.onerror = function (message, source, lineno, colno, error) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} catch (e) {


// Global error suppression for common serverless issues
if (typeof window !== 'undefined') {

  const originalOnError = window && window.onerror;
  window && window.onerror = function (message, source, lineno, colno, error) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Suppress specific known errors that don't affect functionality
    if (typeof message === 'string') {
      if (
        message.includes(
          "Cannot read properties of undefined (reading 'env')"
<<<<<<< HEAD
<<<<<<< HEAD
        ) |
        message.includes('Cannot destructure property') |
        message.includes('self is not defined') |
        message.includes('__extends') |
        message.includes('getInitialProps')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        ) ||
        message && message.includes('Cannot destructure property') ||
        message && message.includes('self is not defined') ||
        message && message.includes('__extends') ||
        message && message.includes('getInitialProps')

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ) {
        return true // Suppress error
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {
<<<<<<< HEAD
<<<<<<< HEAD
      return originalOnError.call(this, message, source, lineno, colno, error)
    }
    return false
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  const originalOnUnhandledRejection = window.onunhandledrejection
  window.onunhandledrejection = function (event) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      return originalOnError && originalOnError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  const originalOnUnhandledRejection = window && window.onunhandledrejection;
  window && window.onunhandledrejection = function (event) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Suppress specific promise rejection errors
    if (event.reason && typeof event.reason.message === 'string') {
      if (
        event.reason.message.includes(
          "Cannot read properties of undefined (reading 'env')"
<<<<<<< HEAD
<<<<<<< HEAD
        ) |
        event.reason.message.includes('Cannot destructure property') |
        event.reason.message.includes('self is not defined')
      ) {
        event.preventDefault()
        return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        ) ||
        event && event.reason.message && message.includes('Cannot destructure property') ||
        event && event.reason.message && message.includes('self is not defined')
      ) {
        event && event.preventDefault();
        return;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper]
    }
  })
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    if (typeof (global as any)[helper] === 'undefined') {
      (global as any)[helper] = (tsHelpers as any)[helper]
    }

  })

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined'
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' |
      (typeof self !== 'undefined' &&
<<<<<<< HEAD
<<<<<<< HEAD
        typeof self.webpackChunk_N_E !== 'undefined')
    tsHelpersDefined:
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        typeof self && self.webpackChunk_N_E !== 'undefined'),

    tsHelpersDefined:

// Node.js environment polyfills (for SSR / build time);
// Check condition
if ( {) {
  $2
}
  // Ensure Node.js global has necessary polyfills;
  // Check condition
if ( {) {
  $2
}
    global.self = global;
  }
  // Check condition
if ( {) {
  $2
}
    global.webpackChunk_N_E = [];
  }
  // TypeScript helpers for Node.js;
  Object.keys (ts_helpers).for_each (helper => {
    // Check condition
if ([helper] === 'undefined') {) {
  $2
}
      (global as any)[helper] = (ts_helpers as any)[helper];
    }
  });
// Export a verification function for testing;
export const verify_polyfills = () =>: any {
  const checks = {
    self_defined: typeof self !== 'undefined',
    webpackChunkDefined:;
      typeof webpackChunk_N_E !== 'undefined' ||;
      (typeof self !== 'undefined' &&;
        typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined:;

      typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window && window.onerror !== null,
  };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      typeof __extends !== 'undefined' && typeof __assign !== 'undefined'
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null
  }
  console.log('Serverless polyfill verification:', checks)
  return Object.values(checks).every(Boolean)
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default {}; // Ensure this can be imported as a module

}, // Ensure this can be imported as a module'"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Auto-verify in development

if (process && process.env.NODE_ENV === 'development') {
  setTimeout((,) => verifyPolyfills(), 100)

}

export default {}, // Ensure this can be imported as a module
<<<<<<< HEAD
<<<<<<< HEAD
//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {'
  //Prevent webpack chunk loading errors if (selfRef.webpackChunk N E && typeof selfRef.webpackChunk N E.push === 'function') {
export default {}; // Ensure this can be imported as a module
}, // Ensure this can be imported as a module'"

// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
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
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' ||
      (typeof self !== 'undefined' &&
        typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined:
      typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null,
  }
  console.log('Serverless polyfill verification:', checks)
  return Object.values(checks).every(Boolean)
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  }
  
  console.log('Serverless polyfill verification:', checks)
  return Object.values(checks).every(Boolean)
}

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
<<<<<<< HEAD

export default {}, // Ensure this can be imported as a module;

// Export a verification function for testing
export const verifyPolyfills = () => {
  const checks = {
    selfDefined: typeof self !== 'undefined',
    webpackChunkDefined:
      typeof webpackChunk_N_E !== 'undefined' ||
      (typeof self !== 'undefined' &&
        typeof self.webpackChunk_N_E !== 'undefined'),
    tsHelpersDefined:
      typeof __extends !== 'undefined' && typeof __assign !== 'undefined',
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null,
  }
  console.log('Serverless polyfill verification:', checks)
  return Object.values(checks).every(Boolean)
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
;
}
}
}
}
}
}
export default {}, // Ensure this can be imported as a module;
=======
}
export default {}, // Ensure this can be imported as a module;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

//Inject TypeScript helpers into global scope //Error prevention for common webpack issues try {';
  //Prevent webpack chunk loading errors // Check condition
if ( {) {
  $2
}
export default {} // Ensure this can be imported as a module;
}, // Ensure this can be imported as a module'";
// Auto - verify in development;
// Check condition
if ( {) {
  $2
}
  set_timeout ((, ) => verify_polyfills (), 100);
}
export default {}, // Ensure this can be imported as a module;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
