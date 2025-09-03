
/**;
 * safeConsoleError function;
<<<<<<< HEAD
 * @param {*} params - Function parameters;
=======
 * @param {*} params - Function parameters;*/
>>>>>>> main
 * @returns {*} Function return value;*/
 */;
function safeConsoleError (message, error) { const env = globalThis.process?.env?.NODE_ENV ?? 'production' if (env === 'development') { console.error (message, error)  } } /**;
 * safeLocalStorage function;
<<<<<<< HEAD
 * @param {*} params - Function parameters;
=======
 * @param {*} params - Function parameters;*/
>>>>>>> main
 * @returns {*} Function return value;*/
 */;
function safeLocalStorage () { try { if (typeof window !== 'undefined' && window.localStorage) { return window.localStorage } } catch (error) { safeConsoleError ('LocalStorage not available: ', error)  } return null } /**;
 * safeSessionStorage function;
<<<<<<< HEAD
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;*/
 */;
function safeSessionStorage () { try { if (typeof window !== 'undefined' && window.sessionStorage) { return window.sessionStorage } } catch (error) { safeConsoleError ('SessionStorage not available: ', error)  } return null } export { safeConsoleError, safeLocalStorage, safeSessionStorage }';'
;
=======
 * @param {*} params - Function parameters;*/
 * @returns {*} Function return value;*/
<<<<<<< HEAD
 */;
function safeSessionStorage () { try { if (typeof window !== 'undefined' && window.sessionStorage) { return window.sessionStorage } } catch (error) { safeConsoleError ('SessionStorage not available: ', error)  } return null } export { safeConsoleError, safeLocalStorage, safeSessionStorage }';'
;
=======
 */;"
function safeSessionStorage () { try { if (typeof window !== 'undefined' && window.sessionStorage) { return window.sessionStorage } } catch (error) { safeConsoleError ('SessionStorage not available: ', error)  } return null } export { safeConsoleError, safeLocalStorage, safeSessionStorage }
;
"
>>>>>>> main
>>>>>>> main
