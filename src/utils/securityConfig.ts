// Security Configuration and Utilities
export const securityConfig = {

  // Content Security Policy
  csp: {

    'default-src': ["'self'"],"
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],"
    'style-src': ["'self'", "'unsafe-inline'"],"
    'img-src': ["'self'",data:',https:'],"
    'font-src': ["'self'",https:'],"
    'connect-src': ["'self'",https:'],"
    'frame-src': ["'none'"],"
    'object-src': ["'none'"],"
    'base-uri': ["'self'"],"
    'form-action': ["'self'"],"
    'frame-ancestors': ["'none'"],upgrade-insecure-requests': true},

  // Security Headers
  headers: {

    'X-Content-Type-Options': 'nosniff',X-Frame-Options': 'DENY',X-XSS-Protection': '1; mode=block',Referrer-Policy': 'strict-origin-when-cross-origin',Permissions-Policy': 'geolocation=(), microphone=(), camera=(),Strict-Transport-Security': 'max-age=31536000; includeSubDomains'},

  // Rate Limiting

  rateLimit: {

    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs'
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false},

  // Input validation patterns
  validation: {

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s\-\(\)]{10}$/,
    name: /^[a-zA-Z\s\-']{2,50}$/,
    username: /^[a-zA-Z0-9_-]{3,20}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/,
    url: /^https?:\/\/[^\s/$.?#].[^\s]*$/,
    alphanumeric: /^[a-zA-Z0-9\s]+$/,
    numeric: /^\d+$/,
    decimal: /^\d+(\.\d{1,2})?$/},

  // Session Configuration
  session: {

    secret: process.env.SESSION_SECRET || 'your-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {

      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours'
      sameSite: 'strict'}}};

// Input sanitization functions
export const sanitizeInput = {

  // Remove potentially dangerous HTML tags
  html: (input: string): string => {

    return input'
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,)
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,)
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,)
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,);
  },

  // Remove SQL injection patterns
  sql: (input: string): string => {
'"
    return input.replace(/['";\\]/g,);
  },

  // Remove XSS patterns
  xss: (input: string): string => {

    return input'
      .replace(/javascript:/gi,)
      .replace(/on\w+\s*=/gi,)
      .replace(/<script/gi,)
      .replace(/<\/script>/gi,);
  },

  // General sanitization
  general: (input: string): string => {

    return sanitizeInput.html(sanitizeInput.sql(sanitizeInput.xss(input)));
  }};

// Helper function to generate CSP header string
export const generateCSPHeader = (): string => {

  return Object.entries(securityConfig.csp)
    .map(([key, values]) => {

      if (Array.isArray(values)) {

        return `${key} ${values.join(' ')}`;
      }`
      return `${key} ${values}`;
    })
    .join('; ');
};

// Validate input against patterns

export const validateInput = {

  email: (email: string): boolean =>
    securityConfig.validation.email.test(email),
  phone: (phone: string): boolean =>
    securityConfig.validation.phone.test(phone),
  name: (name: string): boolean => securityConfig.validation.name.test(name),
  username: (username: string): boolean =>
    securityConfig.validation.username.test(username),
  password: (password: string): boolean =>
    securityConfig.validation.password.test(password),
  url: (url: string): boolean => securityConfig.validation.url.test(url),
  alphanumeric: (text: string): boolean =>
    securityConfig.validation.alphanumeric.test(text),
  numeric: (num: string): boolean =>
    securityConfig.validation.numeric.test(num),
  decimal: (num: string): boolean =>
    securityConfig.validation.decimal.test(num)};

// Security middleware configuration
export const securityMiddleware = {

  // Enable all security features
  enableAll: () => ({

    csp: true,
    headers: true,
    rateLimit: true,
    session: true,
    validation: true}),

  // Enable only essential security features
  enableEssential: () => ({

    csp: true,
    headers: true,
    rateLimit: false,
    session: true,
    validation: true}),

  // Enable only basic security features
  enableBasic: () => ({

    csp: false,
    headers: true,
    rateLimit: false,
    session: false,
    validation: true})};

export default securityConfig;
'"`