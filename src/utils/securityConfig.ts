import { Request, Response, NextFunction } from 'express';

// Security configuration object
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https:'],
    'connect-src': ["'self'", 'https:'],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': [],
  },

  // Security Headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Content-Security-Policy': 'default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https:; font-src \'self\' https:; connect-src \'self\' https:; frame-src \'none\'; object-src \'none\'; base-uri \'self\'; form-action \'self\'; frame-ancestors \'none\'; upgrade-insecure-requests',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  },

  // Rate Limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: '24h',
    refreshExpiresIn: '7d',
    algorithm: 'HS256',
  },

  // Password Requirements
  password: {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },

  // Session Configuration
  session: {
    secret: process.env.SESSION_SECRET || 'your-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'strict',
    },
  },
};

// Helper function to generate CSP header string
export const generateCSPHeader = (): string => {
  return Object.entries(securityConfig.csp)
    .map(([key, values]) => {
      if (Array.isArray(values)) {
        return `${key} ${values.join(' ')}`;
      }
      return `${key} ${values}`;
    })
    .join('; ');
};

// Security middleware for Express/Node.js
export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Set security headers
  Object.entries(securityConfig.headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Additional security measures
  res.setHeader('X-Download-Options', 'noopen');
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  res.setHeader('X-DNS-Prefetch-Control', 'off');

  // Remove server information
  res.removeHeader('X-Powered-By');

  next();
};

// Rate limiting middleware
export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { rateLimit } = securityConfig;
  
  // Simple in-memory rate limiting (use Redis in production)
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  if (!req.app.locals.rateLimit) {
    req.app.locals.rateLimit = new Map();
  }
  
  const clientData = req.app.locals.rateLimit.get(clientIP) || { count: 0, resetTime: now + rateLimit.windowMs };
  
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + rateLimit.windowMs;
  } else if (clientData.count >= rateLimit.max) {
    return res.status(429).json({ error: rateLimit.message });
  } else {
    clientData.count++;
  }
  
  req.app.locals.rateLimit.set(clientIP, clientData);
  
  // Set rate limit headers
  if (rateLimit.standardHeaders) {
    res.setHeader('X-RateLimit-Limit', rateLimit.max);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, rateLimit.max - clientData.count));
    res.setHeader('X-RateLimit-Reset', new Date(clientData.resetTime).toISOString());
  }
  
  next();
};

// CORS configuration
export const corsConfig = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['https://ziontechgroup.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset'],
};

// Helmet configuration for additional security
export const helmetConfig = {
  contentSecurityPolicy: {
    directives: securityConfig.csp,
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xssFilter: true,
  frameguard: { action: 'deny' },
  hidePoweredBy: true,
  ieNoOpen: true,
  noCache: false, // Set to true for sensitive routes
};

// Export default configuration
export default securityConfig;