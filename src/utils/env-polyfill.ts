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
// Export a safe environment accessor
export const safeEnv = {
  NODE_ENV:
    (typeof (globalThis as any).process !== 'undefined' &&
// Safe environment getter function
export function getEnv(key: string, defaultValue = ''): string {
  if (
    typeof (globalThis as any).process !== 'undefined' &&
    (globalThis as any).process && process.env &&
    typeof (globalThis as any).process && process.env[key] === 'string'
  ) {
// Check if we're in development mode safely
export function isDevelopment(): boolean {
  return getEnv('NODE_ENV') === 'development';
}

// Check if we're in production mode safely
export function isProduction(): boolean {
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

export default safeEnv;


console.log ('✅ Environment polyfill loaded successfully');
export default safe_env;
export default safe_env;
export default safe_env;
