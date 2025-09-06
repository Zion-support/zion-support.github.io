
<<<<<<< HEAD

export const processEnv = typeof (globalThis as any).process !== 'undefined' ? (globalThis as any).process.env : {
  NODE_ENV: 'production', NEXT_PUBLIC_APP_URL: '',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ''};

