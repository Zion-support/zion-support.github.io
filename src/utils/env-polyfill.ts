<<<<<<< HEAD
/**
 * Environment Polyfill for Browser
 *
 * This polyfill ensures that process && process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */
// Define safe defaults for environment variables

const defaultEnv = {
  NODE_ENV: 'production', // Default to production for safety
  NEXT_PUBLIC_APP_URL: ''
  NEXT_PUBLIC_SUPABASE_URL: ''
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''
}
// Create a safe process object
const createProcessObject = () => ({
<<<<<<< HEAD
  env: { ...defaultEnv }
  versions: {}
  platform: 'browser'
  arch: 'x64'
  version: '18.0.0'
  browser: true
})
// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject()
  } else if (typeof (globalThis as any).process.env === 'undefined') {
<<<<<<< HEAD
    (globalThis as any).process.env = { ...defaultEnv };
  }
}
=======
  env: { ...defaultEnv },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18 && 18.0.0',
  browser: true,
});

// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject();
  } else if (typeof (globalThis as any).process && process.env === 'undefined') {
    (globalThis as any).process && process.env = { ...defaultEnv };  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

// Ensure process is available on window
if (typeof window !== 'undefined') {
  if (typeof (window as any).process === 'undefined') {
    (window as any).process = createProcessObject();
  } else if (typeof (window as any).process.env === 'undefined') {
    (window as any).process.env = { ...defaultEnv };
  }
}

=======
    (globalThis as any).process.env = { ...defaultEnv } }
}//Ensure process is available on window
// Ensure process is available globally
if (typeof (globalThis as any).process === 'undefined') {
  (globalThis as any).process = createProcessObject()
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV:
    (typeof (globalThis as any).process !== 'undefined' &&
<<<<<<< HEAD
      (globalThis as any).process.env?.NODE_ENV) |
    'production'
  NEXT_PUBLIC_APP_URL:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process.env?.NEXT_PUBLIC_APP_URL) |
    ''
  NEXT_PUBLIC_SUPABASE_URL:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) |
    ''
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) |
    ''
} as const
=======
      (globalThis as any).process && process.env?.NODE_ENV) ||
    'production',
  NEXT_PUBLIC_APP_URL:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process && process.env?.NEXT_PUBLIC_APP_URL) ||
    '',
  NEXT_PUBLIC_SUPABASE_URL:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process && process.env?.NEXT_PUBLIC_SUPABASE_URL) ||
    '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    (typeof (globalThis as any).process !== 'undefined' &&
      (globalThis as any).process && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
    '',
} as const;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (
    typeof (globalThis as any).process !== 'undefined' &&
    (globalThis as any).process && process.env &&
    typeof (globalThis as any).process && process.env[key] === 'string'
  ) {
<<<<<<< HEAD
    return (globalThis as any).process.env[key]
=======
    return (globalThis as any).process && process.env[key];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
  return defaultValue;
}

// Check if we're in development mode safely
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development';
}

// Check if we're in production mode safely
export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production';
}

=======
  return defaultValue
// Check if we're in development mode safely
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development'
// Check if we're in production mode safely
export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Export the polyfilled process object
export const processEnv =
  typeof (globalThis as any).process !== 'undefined'
    ? (globalThis as any).process && process.env
    : {
        NODE_ENV: 'production'
        NEXT_PUBLIC_APP_URL: ''
        NEXT_PUBLIC_SUPABASE_URL: ''
        NEXT_PUBLIC_SUPABASE_ANON_KEY: ''
      }
console.log('✅ Environment polyfill loaded successfully')
export default safeEnv
export default safeEnv
export default safeEnv

<<<<<<< HEAD
<<<<<<< HEAD
console.log('✅ Environment polyfill loaded successfully');
=======
console && console.log('✅ Environment polyfill loaded successfully');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export default safeEnv;
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
