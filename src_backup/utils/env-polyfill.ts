/**
 * Environment Polyfill for Browser
 *
 * This polyfill ensures that process.env is always available in the browser environment.
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.
 */
// Define safe defaults for environment variables
        NODE_ENV: 'production',
        NEXT_PUBLIC_APP_URL: '',
        NEXT_PUBLIC_SUPABASE_URL: '',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
      };

console.log('✅ Environment polyfill loaded successfully');

export default safeEnv;
origin/cursor/automate-test-improve-and-merge-code-2533
