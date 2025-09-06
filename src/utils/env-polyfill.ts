/**
 * Environment Polyfill for Browser
 *
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */
// Define safe defaults for environment variables

const defaultEnv = {
  NODE_ENV: 'production', // Default to production for safety

// Create a safe process object
const createProcessObject = () => ({
  env: { ...defaultEnv },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',

// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject()
  } else if (typeof (globalThis as any).process.env === 'undefined') {
=======

console && console.log('✅ Environment polyfill loaded successfully');
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


export default safeEnv;
export default safeEnv;
}
}
}
}
<<<<<<< HEAD



console.log ('✅ Environment polyfill loaded successfully');
export default safe_env;
export default safe_env;
export default safe_env;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
