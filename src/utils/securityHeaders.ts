/**
 * Security Headers Configuration
 * Comprehensive security headers for production applications
 */
export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xFrameOptions?: string;
  xContentTypeOptions?: string;
  referrerPolicy?: string;
  permissionsPolicy?: string;
}
export const _defaultSecurityHeaders: SecurityHeadersConfig = {
  // Content Security Policy
  contentSecurityPolicy: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
  ].join('; '),
  // HTTP Strict Transport Security (HSTS)
  strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
  // Prevent clickjacking
  xFrameOptions: 'DENY',
  // Prevent MIME type sniffing
  xContentTypeOptions: 'nosniff',
  // Referrer Policy
  referrerPolicy: 'strict-origin-when-cross-origin',
  // Permissions Policy (formerly Feature Policy)
  permissionsPolicy: [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'interest-cohort=()',
    'accelerometer=()',
    'gyroscope=()',
    'magnetometer=()',
  ].join(', ')
};
/**
 * Get security headers as key-value pairs
 */
export function getSecurityHeaders(
  customConfig?: Partial<SecurityHeadersConfig>
): Record<string, string> {
  const headers: Record<string, string> = {
    'X-XSS-Protection': '1; mode=block',
    'X-DNS-Prefetch-Control': 'on'
  };
  if (config.contentSecurityPolicy) {
    headers['Content-Security-Policy'] = config.contentSecurityPolicy;
  }
  if (config.strictTransportSecurity) {
    headers['Strict-Transport-Security'] = config.strictTransportSecurity;
  }
  if (config.xFrameOptions) {
    headers['X-Frame-Options'] = config.xFrameOptions;
  }
  if (config.xContentTypeOptions) {
    headers['X-Content-Type-Options'] = config.xContentTypeOptions;
  }
  if (config.referrerPolicy) {
    headers['Referrer-Policy'] = config.referrerPolicy;
  }
  if (config.permissionsPolicy) {
    headers['Permissions-Policy'] = config.permissionsPolicy;
  }
  return headers;
}
/**
 * Get security headers in Next.js format
 */
export function getNextSecurityHeaders(
  customConfig?: Partial<SecurityHeadersConfig>
): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({
    key,
    value
  }));
}
export default defaultSecurityHeaders;
