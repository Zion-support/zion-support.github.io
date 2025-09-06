// Auto-verify in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => verifyPolyfills(), 100)
}

export default {}, // Ensure this can be imported as a module
