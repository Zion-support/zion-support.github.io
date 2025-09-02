
/**;
 * safeConsoleError function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
function safeConsoleError (message, error) {} const env = globalThis.process?.env?.NODE_ENV ?? &apos;production&apos; if (env === &apos;development&apos;) { console.error (message, error)  } } /**;
 * safeLocalStorage&apos; function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
function safeLocalStorage () { try { if (typeof window !== &apos;undefined&apos; && window.localStorage) { return window.localStorage } } catch (error) { safeConsoleError (&apos;LocalStorage not available: &apos;, error)  } return null } /**;
 * safeSessionStorage&apos; function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
function safeSessionStorage () { try { if (typeof window !== &apos;undefined&apos; && window.sessionStorage) { return window.sessionStorage } } catch (error) { safeConsoleError (&apos;SessionStorage not available: &apos;, error)  } return null }&apos; export { safeConsoleError, safeLocalStorage, safeSessionStorage }';
;&apos;'