/**
 * safeConsoleError function
 * @param {string} message - Error message
 * @param {Error} error - Error object
 */
function safeConsoleError(message, error) {
  const env = globalThis.process?.env?.NODE_ENV ?? 'production';
  if (env === 'development') {
    console.error(message, error);
  }
}

/**
 * safeLocalStorage function
 * @returns {Storage|null} LocalStorage object or null
 */
function safeLocalStorage() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }
  } catch (error) {
    safeConsoleError('LocalStorage not available:', error);
  }
  return null;
}

/**
 * safeSessionStorage function
 * @returns {Storage|null} SessionStorage object or null
 */
function safeSessionStorage() {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return window.sessionStorage;
    }
  } catch (error) {
    safeConsoleError('SessionStorage not available:', error);
  }
  return null;
}

export { safeConsoleError, safeLocalStorage, safeSessionStorage };
