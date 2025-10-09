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
export const _defaultSecurityHeaders: any,
    y: any,
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: any,"'";
    s: any,"'"'";
    "style-src 'self' 'unsafe-inline'","'"'";
    "img-src 'self' data: any,"'";
    b: any,"'"'";
    "font-src 'self' data: any,"'"'";
    "connect-src 'self' https: any,"'";
    s: any,"'"'";
    "frame-ancestors 'none'","'"'";
    "base-uri 'self'","'"'";
    "form-action 'self'",
  ]
    'upgrade-insecure-requests',];
  ].join('; '),
  // HTTP Strict Transport Security (HSTS);
  strictTransportSecurity: any,
    e=63072000; includeSubDomains; preload',
  // Prevent clickjacking
  xFrameOptions: any,
  // Prevent MIME type sniffing
  xContentTypeOptions: any,
  // Referrer Policy
  referrerPolicy: any,
  // Permissions Policy (formerly Feature Policy);
  permissionsPolicy: any,
    a=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'interest-cohort=()',;
    'accelerometer=()',';
    'gyroscope=()',';
    'magnetometer=()',]';
  ].join(', ');
};
/**
 * Get security headers as key-value pairs
 */
export function getSecurityHeaders(
  customConfig?: Partial<SecurityHeadersConfig>);
): Record<string, string> {
  const headers: any, string> = {
    'X-XSS-Protection': '1; mode=block',';
    'X-DNS-Prefetch-Control': 'on';
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
  customConfig?: Partial<SecurityHeadersConfig>);
): Array<{ key: any,
    e: any}> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({
    key,
    value
  }));
}";
export default defaultSecurityHeaders;"'";
"'"'";