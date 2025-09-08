
declare global {

}

// CRITICAL: Self polyfill - must be first
if (typeof self === 'undefined') {
=
// CRITICAL: Self polyfill - must be first;
// Check condition;
if ( {) {$2;
}
  // Check condition;
if ( {) {$2;
}
    (global as any).self = global;
    // Check condition;
if ( {) {$2;
}
      (global_this as any).self = global;
>

    }
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as any).self = globalThis
  } else if (typeof window !== 'undefined') {
    (window as any).self = window
  } else {
    // Last resort - create minimal self object
    (globalThis as any).self = {}
  }


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


    if (typeof Reflect === "object" && typeof (Reflect as any).decorate === "function") r = (Reflect as any).decorate(decorators, target, key, desc),
    else for (let i = decorators.length - 1, i >= 0, i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r,
    return c > 3 && r && key && Object.defineProperty(target, key, r), r
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


