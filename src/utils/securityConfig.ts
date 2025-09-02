// Minimal sane defaults after merge conflict
export interface SecurityHeadersConfig {
  contentSecurityPolicy: string;
  strictTransportSecurity: string;
  xContentTypeOptions: string;
  referrerPolicy: string;
  permissionsPolicy: string;
}

export const defaultSecurityHeaders: SecurityHeadersConfig = {
  contentSecurityPolicy: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; connect-src 'self' https:; frame-ancestors 'self';",
  strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
  xContentTypeOptions: 'nosniff',
  referrerPolicy: 'no-referrer-when-downgrade',
  permissionsPolicy: 'geolocation=(), microphone=(), camera=()'
};

export function getSecurityHeaders(): Record<string, string> {
  return {
    'Content-Security-Policy': defaultSecurityHeaders.contentSecurityPolicy,
    'Strict-Transport-Security': defaultSecurityHeaders.strictTransportSecurity,
    'X-Content-Type-Options': defaultSecurityHeaders.xContentTypeOptions,
    'Referrer-Policy': defaultSecurityHeaders.referrerPolicy,
    'Permissions-Policy': defaultSecurityHeaders.permissionsPolicy
  };
}