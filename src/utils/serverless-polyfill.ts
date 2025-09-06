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
// TypeScript helper polyfills for runtime
          step(generator.next(value))
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
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments |[])).next())
    })
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

    const originalPush = selfRef && selfRef.webpackChunk_N_E.push;
    selfRef && selfRef.webpackChunk_N_E.push = function (chunk: any) {
      try {
        return originalPush && originalPush.call(this, chunk);
      } catch (error) {
        console && console.warn('Webpack chunk loading error prevented:', error);
        return 0;

        console.warn ('Webpack chunk loading error prevented:', error);
        return 0;
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
        message && message.includes(
          "Cannot read properties of undefined (reading 'env')"

        ) ||
        message && message.includes('Cannot destructure property') ||
        message && message.includes('self is not defined') ||
        message && message.includes('__extends') ||
        message && message.includes('getInitialProps')

      ) {
        return true; // Suppress error
      }
    }
    // Call original error handler for other errors
    if (originalOnError) {

  // Silently handle any errors in error prevention setup;
  const originalOnUnhandledRejection = window.onunhandledrejection;
  window.onunhandledrejection = function (event) {

      return originalOnError && originalOnError.call(this, message, source, lineno, colno, error);
    }
    return false;
  };

  const originalOnUnhandledRejection = window && window.onunhandledrejection;
  window && window.onunhandledrejection = function (event) {

    // Suppress specific promise rejection errors
    if (event && event.reason && typeof event && event.reason.message === 'string') {
      if (
        event && event.reason.message && message.includes(
          "Cannot read properties of undefined (reading 'env')"

        ) ||
        event && event.reason.message && message.includes('Cannot destructure property') ||
        event && event.reason.message && message.includes('self is not defined')
      ) {
        event && event.preventDefault();
        return;

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
