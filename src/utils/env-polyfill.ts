<<<<<<< HEAD
=======
/**
 * Environment Polyfill for Browser
 * 
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */
// Define safe defaults for environment variables
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

const defaultEnv = {
  NODE_ENV: 'production', // Default to production for safety
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// Create a safe process object
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  NEXT_PUBLIC_APP_URL: ''
  NEXT_PUBLIC_SUPABASE_URL: ''
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''
}
// Create a safe process object
const createProcessObject = () => ({
  env: { ...defaultEnv }
  versions: {}
  platform: 'browser'
  arch: 'x64'
  version: '18.0.0'
  browser: true
})
<<<<<<< HEAD
<<<<<<< HEAD
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},

  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
}
>>>>>>> // Create a safe process object
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},

  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
}
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},

// Create a safe process object
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const createProcessObject = () => ({
  env: { ...defaultEnv },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  browser: true}),

  browser: true,
})
  browser: true}),

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Ensure process is available on globalThis
=======
  browser: true}),

  browser: true,
})
>>>>>>> // Ensure process is available on globalThis
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject()
  } else if (typeof (globalThis as any).process.env === 'undefined') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default safeEnv
export default safeEnv
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    (globalThis as any).process.env = { ...defaultEnv }
  }
}
;
// Ensure process is available on window;
if (typeof window !== 'undefined') {;
  if (typeof (window as any).process === 'undefined') {;
    (window as any).process = createProcessObject();
  } else if (typeof (window as any).process.env === 'undefined') {;
    (window as any).process.env = { ...defaultEnv }
  }
}
;
// Ensure process is available globally;
if (typeof (globalThis as any).process === 'undefined') {;
  (globalThis as any).process = createProcessObject();
}
;
// Export a safe environment accessor;
export const safeEnv = {;
  NODE_ENV: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NODE_ENV) || 'production',;
  NEXT_PUBLIC_APP_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_APP_URL) || '',;
  NEXT_PUBLIC_SUPABASE_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) || '',;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || ''} as const,;
// Safe environment getter function;
export function getEnv(key: string, defaultValue = ''): string {;
  if (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env && typeof (globalThis as any).process.env[key] === 'string') {;
    return (globalThis as any).process.env[key];
  }
  return defaultValue;
}
;
// Check if we're in development mode safely;
export function isDevelopment(): boolean {;
  return getEnv('NODE_ENV') === 'development';
}
;
// Check if we're in production mode safely;
export function isProduction(): boolean {;
  return getEnv('NODE_ENV') === 'production';
}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662

export default safeEnv;
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    (globalThis as any).process.env = { ...defaultEnv } }
}//Ensure process is available on window
// Ensure process is available globally
if (typeof (globalThis as any).process === 'undefined') {
  (globalThis as any).process = createProcessObject()
// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV:
    (typeof (globalThis as any).process !== 'undefined' &&
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
// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (
    typeof (globalThis as any).process !== 'undefined' &&
    (globalThis as any).process.env &&
    typeof (globalThis as any).process.env[key] === 'string'
  ) {
    return (globalThis as any).process.env[key]
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
    ? (globalThis as any).process.env
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

export default safeEnv;
export default safeEnv;
}
}
}
}
    (globalThis as any).process.env = { ...defaultEnv }
  }
}
;
// Ensure process is available on window;
if (typeof window !== 'undefined') {;
  if (typeof (window as any).process === 'undefined') {;
    (window as any).process = createProcessObject();
  } else if (typeof (window as any).process.env === 'undefined') {;
    (window as any).process.env = { ...defaultEnv }
  }
}
;
// Ensure process is available globally;
if (typeof (globalThis as any).process === 'undefined') {;
  (globalThis as any).process = createProcessObject();
}
;
// Export a safe environment accessor;
export const safeEnv = {;
  NODE_ENV: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NODE_ENV) || 'production',;
  NEXT_PUBLIC_APP_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_APP_URL) || '',;
  NEXT_PUBLIC_SUPABASE_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) || '',;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || ''} as const,;
// Safe environment getter function;
export function getEnv(key: string, defaultValue = ''): string {;
  if (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env && typeof (globalThis as any).process.env[key] === 'string') {;
    return (globalThis as any).process.env[key];
  }
  return defaultValue;
}
;
// Check if we're in development mode safely;
export function isDevelopment(): boolean {;
  return getEnv('NODE_ENV') === 'development';
}
;
// Check if we're in production mode safely;
export function isProduction(): boolean {;
  return getEnv('NODE_ENV') === 'production';
}

// Export the polyfilled process object
export const processEnv = typeof (globalThis as any).process !== 'undefined' ? (globalThis as any).process.env : {
  NODE_ENV: 'production',
  NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},

// // // console.log('✅ Environment polyfill loaded successfully'),

export default safeEnv,
;
// Export the polyfilled process object;
export const processEnv = typeof (globalThis as any).process !== 'undefined' ? (globalThis as any).process.env : {;
  NODE_ENV: 'production',;
  NEXT_PUBLIC_APP_URL: '',;
  NEXT_PUBLIC_SUPABASE_URL: '',;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''},;
// // // console.log('✅ Environment polyfill loaded successfully'),;
export default safeEnv;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
