
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
