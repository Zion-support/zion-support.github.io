// In-memory storage for fallback with optimizations
const inMemoryStore = {};
let localStorageAvailable = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max
function isLocalStorageAvailable() {
    const now = Date.now();
    // Use cached result if checked recently
    if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
        return localStorageAvailable}
    lastAvailabilityCheck = now;
    try {
        if (typeof window === 'undefined'
        const testKey = '__localStorage_test__'
        localStorage.setItem(testKey, 'test'
  const env = globalThis.process?.env?.NODE_ENV ?? 'production'
  if (env === 'production'