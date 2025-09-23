<<<<<<< HEAD
// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV:
    (typeof (globalThis as any).process !== 'undefined' &&

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


// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (
    typeof (globalThis as any).process !== 'undefined' &&
    (globalThis as any).process.env &&
    typeof (globalThis as any).process.env[key] === 'string'
  ) {

    return (globalThis as any).process && process.env[key];

  }

  return defaultValue
// Check if we're in development mode safely
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development'
// Check if we're in production mode safely
export function isProduction(): boolean {
  return getEnv('NODE_ENV') === 'production'

// Export the polyfilled process object
export const processEnv = null;
  typeof (globalThis as any).process !== 'undefined'
    ? (globalThis as any).process && process.env
/**;
* Environment Polyfill for Browser;
*;
* This polyfill ensures that process.env is always available in the browser environment.;
* It prevents the "Cannot read properties of undefined (reading 'env')" error.;
*/;
// Define safe defaults for environment variables;
const default_env = {
  NODE_ENV: 'production', // Default to production for safety;
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},
=======
/**
 * Environment Polyfill for Browser
 * 
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */

// Define safe defaults for environment variables
const defaultEnv = {
  NODE_ENV: 'production', // Default to production for safety
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
};
>>>>>>> origin/auto/autonomy-17186719616

// Create a safe process object
const createProcessObject = () => ({
  env: { ...defaultEnv },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',
<<<<<<< HEAD
  browser: true}),
=======
  browser: true,
});
>>>>>>> origin/auto/autonomy-17186719616

// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
<<<<<<< HEAD
    (globalThis as any).process = createProcessObject(),
  } else if (typeof (globalThis as any).process.env === 'undefined') {
    (globalThis as any).process.env = { ...defaultEnv },
=======
    (globalThis as any).process = createProcessObject();
  } else if (typeof (globalThis as any).process.env === 'undefined') {
    (globalThis as any).process.env = { ...defaultEnv };
>>>>>>> origin/auto/autonomy-17186719616
  }
}

// Ensure process is available on window
if (typeof window !== 'undefined') {
  if (typeof (window as any).process === 'undefined') {
<<<<<<< HEAD
    (window as any).process = createProcessObject(),
  } else if (typeof (window as any).process.env === 'undefined') {
    (window as any).process.env = { ...defaultEnv },
=======
    (window as any).process = createProcessObject();
  } else if (typeof (window as any).process.env === 'undefined') {
    (window as any).process.env = { ...defaultEnv };
>>>>>>> origin/auto/autonomy-17186719616
  }
}

// Ensure process is available globally
if (typeof (globalThis as any).process === 'undefined') {
<<<<<<< HEAD
  (globalThis as any).process = createProcessObject(),
=======
  (globalThis as any).process = createProcessObject();
>>>>>>> origin/auto/autonomy-17186719616
}

// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NODE_ENV) || 'production',
  NEXT_PUBLIC_APP_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_APP_URL) || '',
  NEXT_PUBLIC_SUPABASE_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) || '',
<<<<<<< HEAD
  NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || ''} as const,
=======
  NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || '',
} as const;
>>>>>>> origin/auto/autonomy-17186719616

// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env && typeof (globalThis as any).process.env[key] === 'string') {
<<<<<<< HEAD
    return (globalThis as any).process.env[key],
  }
  return defaultValue,
=======
    return (globalThis as any).process.env[key];
  }
  return defaultValue;
>>>>>>> origin/auto/autonomy-17186719616
}

// Check if we're in development mode safely
export function isDevelopment(): boolean {
<<<<<<< HEAD
  return getEnv('NODE_ENV') === 'development',
=======
  return getEnv('NODE_ENV') === 'development';
>>>>>>> origin/auto/autonomy-17186719616
}

// Check if we're in production mode safely
export function isProduction(): boolean {
<<<<<<< HEAD
  return getEnv('NODE_ENV') === 'production',
=======
  return getEnv('NODE_ENV') === 'production';
>>>>>>> origin/auto/autonomy-17186719616
}

// Export the polyfilled process object
export const processEnv = typeof (globalThis as any).process !== 'undefined' ? (globalThis as any).process.env : {
  NODE_ENV: 'production',
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
<<<<<<< HEAD
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},

// // // console.log('✅ Environment polyfill loaded successfully'),

export default safeEnv,
=======
  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
};

console.log('✅ Environment polyfill loaded successfully');

export default safeEnv;
>>>>>>> origin/auto/autonomy-17186719616
