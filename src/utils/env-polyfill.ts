/**
 * Environment polyfill for server-side rendering compatibility
 * Provides fallbacks for Node.js environment variables
 */

// Polyfill for process.env in browser environment
if (typeof window !== 'undefined' && typeof process === 'undefined') {
  (window as any).process = {
    env: {
      NODE_ENV: 'development',
      ...(window as any).__ENV__ || {}
    }
  };
}

// Ensure process.env is available
if (typeof process === 'undefined') {
  (global as any).process = {
    env: {
      NODE_ENV: 'development',
      ...(global as any).__ENV__ || {}
    }
  };
}

// Export environment utilities
export const getEnvVar = (key: string, defaultValue?: string): string => {
  if (typeof window !== 'undefined') {
    return (window as any).__ENV__?.[key] || process.env[key] || defaultValue || '';
  }
  return process.env[key] || defaultValue || '';
};

export const isDevelopment = (): boolean => {
  return getEnvVar('NODE_ENV', 'development') === 'development';
};

export const isProduction = (): boolean => {
  return getEnvVar('NODE_ENV', 'development') === 'production';
};