/**
 * Environment Polyfill for Browser
 * 
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */

// Define safe defaults for environment variables
const _defaultEnv = {_NODE_ENV: 'production', _// Default to production for safety
  NEXT_PUBLIC_APP_URL: '', _NEXT_PUBLIC_SUPABASE_URL: '', _NEXT_PUBLIC_SUPABASE_ANON_KEY: ''};

// Create a safe process object
const _createProcessObject = () => ({_env: { ...defaultEnv},
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',
  browser: true});

// Ensure process is available on globalThis
if (typeof globalThis !== 'undefined') {_if (typeof (globalThis as any).process === 'undefined') {
    (globalThis as any).process = createProcessObject();} else if (typeof (globalThis as any).process.env === 'undefined') {_(globalThis as any).process.env = { ...defaultEnv};
  }
}

// Ensure process is available on window
if (typeof window !== 'undefined') {_if (typeof (window as any).process === 'undefined') {
    (window as any).process = createProcessObject();} else if (typeof (window as any).process.env === 'undefined') {_(window as any).process.env = { ...defaultEnv};
  }
}

// Ensure process is available globally
if (typeof (globalThis as any).process === 'undefined') {_(globalThis as any).process = createProcessObject();}

// Export a safe environment accessor
export const _safeEnv = {_NODE_ENV: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NODE_ENV) || 'production', _NEXT_PUBLIC_APP_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_APP_URL) || '', _NEXT_PUBLIC_SUPABASE_URL: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) || '', _NEXT_PUBLIC_SUPABASE_ANON_KEY: (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) || ''} as const;

// Safe environment getter function
export function getEnv(_key: string, _defaultValue = ''): string {_if (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env && typeof (globalThis as any).process.env[key] === 'string') {
    return (globalThis as any).process.env[key];}
  return defaultValue;
}

// Check if we're in development mode safely
export function isDevelopment(): boolean {_return getEnv('NODE_ENV') === 'development';}

// Check if we're in production mode safely
export function isProduction(): boolean {_return getEnv('NODE_ENV') === 'production';}

// Export the polyfilled process object
export const _processEnv = typeof (globalThis as any).process !== 'undefined' ? (globalThis as any).process.env : {_NODE_ENV: 'production', _NEXT_PUBLIC_APP_URL: '', _NEXT_PUBLIC_SUPABASE_URL: '', _NEXT_PUBLIC_SUPABASE_ANON_KEY: ''};



export default safeEnv;