/* eslint - disable @typescript - eslint / no - explicit - any */;
/* eslint - disable @typescript - eslint / no - unused - vars */;
/* eslint - disable @typescript - eslint / no - this - alias */;
/* eslint - disable prefer - const */;
/**;
* Serverless Environment Polyfill;
*;
* This polyfill addresses common issues in serverless environments like Netlify:;
* - "self is not defined" errors;
* - Missing global objects;
* - Webpack chunk loading issues;
* - TypeScript helper function issues;
*;
* This runs as the VERY FIRST script before any other code loads.;
*/;
// Type declarations for global augmentation;
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
        return t;
      }
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
        return original_push.call (this, chunk);
      } catch (error) {
        console.warn ('Webpack chunk loading error prevented:', error);
        return 0;
      }
    }
  }
} catch (e) {
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
  const originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function (event) {
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
    errorHandlersSet: typeof window !== 'undefined' && window.onerror !== null,
  }
  console.log ('Serverless polyfill verification:', checks);
  return Object.values (checks).every (Boolean);
}
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