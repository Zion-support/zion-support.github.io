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
}

// CRITICAL: Self polyfill - must be first
origin/cursor/automate-test-improve-and-merge-code-2533
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
export default {}, // Ensure this can be imported as a module
origin/cursor/automate-test-improve-and-merge-code-2533
