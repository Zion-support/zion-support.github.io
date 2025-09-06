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
  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
}
// Create a safe process object;
const createProcessObject = () =>: any ({
  env: { ...default_env },
  versions: {},
  platform: 'browser',
  arch: 'x64',
  version: '18.0.0',
  browser: true,
});
// Ensure process is available on global_this;
// Check condition
if ( {) {
  $2
}
  // Check condition
if (.process === 'undefined') {) {
  $2
}
    (global_this as any).process = createProcessObject ();
  } else // Check condition
if (.process.env === 'undefined') {) {
  $2
}
    (global_this as any).process.env = { ...default_env } }
}//Ensure process is available on window;
// Ensure process is available globally;
// Check condition
if (.process === 'undefined') {) {
  $2
}
  (global_this as any).process = createProcessObject ();
// Export a safe environment accessor;
export const safe_env = {
  NODE_ENV:;
    (typeof (global_this as any).process !== 'undefined' &&;
      (global_this as any).process.env?.NODE_ENV) ||;
    'production',
  NEXT_PUBLIC_APP_URL:;
    (typeof (global_this as any).process !== 'undefined' &&;
      (global_this as any).process.env?.NEXT_PUBLIC_APP_URL) ||;
    '',
  NEXT_PUBLIC_SUPABASE_URL:;
    (typeof (global_this as any).process !== 'undefined' &&;
      (global_this as any).process.env?.NEXT_PUBLIC_SUPABASE_URL) ||;
    '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY:;
    (typeof (global_this as any).process !== 'undefined' &&;
      (global_this as any).process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||;
    '',
} as const;
// Safe environment getter function;
export function get_env (key: string, default_value = ''): string {
  // Check condition
if (.process !== 'undefined' &&) {
  $2
}
    (global_this as any).process.env &&;
    typeof (global_this as any).process.env[key] === 'string') {
    return (global_this as any).process.env[key];
  }
  return default_value;
// Check if we're in development mode safely;
export function is_development (): boolean {
  return get_env ('NODE_ENV') === 'development';
// Check if we're in production mode safely;
export function is_production (): boolean {
  return get_env ('NODE_ENV') === 'production';
// Export the polyfilled process object;
export const process_env =;
  typeof (global_this as any).process !== 'undefined';
    ? (global_this as any).process.env;
    : {
        NODE_ENV: 'production',
        NEXT_PUBLIC_APP_URL: '',
        NEXT_PUBLIC_SUPABASE_URL: '',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
      }
console.log ('✅ Environment polyfill loaded successfully');
export default safe_env;
export default safe_env;
export default safe_env;