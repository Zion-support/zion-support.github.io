export const environmentConfig = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  
  // API URLs
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  
  // Feature flags
  features: {
    emailVerification: process.env.NEXT_PUBLIC_ENABLE_EMAIL_VERIFICATION === 'true',
    stripe: process.env.NEXT_PUBLIC_ENABLE_STRIPE === 'true',
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  
  // External services
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
  },
  
  // Email configuration
  email: {
    from: process.env.EMAIL_FROM || 'noreply@ziontechgroup.com',
    replyTo: process.env.EMAIL_REPLY_TO || 'support@ziontechgroup.com',
  }
};

// Export for API routes
export const ENV_CONFIG = {
  ...environmentConfig,
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    isConfigured: !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  },
  sentry: {
    isConfigured: !!process.env.NEXT_PUBLIC_SENTRY_DSN
  },
  app: {
    isDevelopment: process.env.NODE_ENV === 'development'
  }
};