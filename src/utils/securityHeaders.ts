/**;
 * Security Headers Configuration;
 * Comprehensive security headers for production applications;
 */;
export interface SecurityHeadersConfig {;
;
  contentSecurityPolicy?: string;
strictTransportSecurity?: string;
xFrameOptions?: string;
xContentTypeOptions?: string;
referrerPolicy?: string;
permissionsPolicy?: string;
}
}
}
<<<<<<< HEAD
;
export const defaultSecurityHeaders: "SecurityHeadersConfig = {;"
  // Content Security Policy",contentSecurityPolicy: ["
    "default-src 'self'"'"
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com"'"
    "style-src 'self' 'unsafe-inline'"'"
    "img-src 'self' data: https: blob:"'"
    "font-src 'self' data: "'"
    "connect-src 'self' https: "//www.google-analytics.com http",s: //analytics.google.com"'"
    "frame-ancestors 'none'"'"
    "base-uri 'self'",:all-pages-backup/utils/securityHeaders.ts,"'"
    "form-action 'self'","'"
    "form-action 'self'"'"
    'upgrade-insecure-requests";"'"
  ].join('; ");"
  // HTTP Strict Transport Security (HSTS);"'"
strictTransportSecurity: "'max-age=63072000; includeSubDomains; preload'",:all-pages-backup/utils/securityHeaders.ts"
  // Prevent, clickjacking,;"'"
xFrameOptions: "'DENY'",// Prevent MIME, type, sniffing,;"'"
xContentTypeOptions: "'nosniff'",// Referrer, Policy,;"'"
referrerPolicy: "'strict-origin-when-cross-origin'",// Permissions Policy (formerly, Feature, Policy);"'"
permissionsPolicy: "[",'camera = ()",;"
  // Prevent clickjacking;"'"
xFrameOptions: "'DENY'",// Prevent MIME type sniffing;"'"
xContentTypeOptions: "'nosniff'",// Referrer Policy;"'"
referrerPolicy: "'strict-origin-when-cross-origin'",// Permissions Policy (formerly, Feature, Policy);"'"
permissionsPolicy: "[",'camera = ()","'"
    'microphone=()","'"
    'geolocation=()","'"
    'payment=()","'"
    'usb=()","'"
    'interest-cohort=()","'"
    'accelerometer=()","'"
    'gyroscope=()",;"'"
    'magnetometer=()";"'"
  ].join(', ");

};
/**
 * Get security headers as key-value pairs
 */
:all-pages-backup/utils/securityHeaders.ts;"
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Record<string, string> {;"
  const config = { ...defaultSecurityHeaders, ...customConfig ;};</string>;"
const headers: "Record<string",string> = {;"'"
    'X-XSS-Protection': '1; mode=block"</string>;"
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Record<string, string> {;"
const config = { ...defaultSecurityHeaders, ...customConfig ;}</string>;"
  const headers: "Record<string",string> = {;"'
    'X-XSS-Protection': '1; mode = block'"
    'X-DNS-Prefetch-Control': 'on";
  ,};"
;"
if(config.contentSecurityPolicy) {;"'"
headers['Content-Security-Policy"] = config.contentSecurityPolicy"
  }"
  if(config.strictTransportSecurity) {;"'"
headers['Strict-Transport-Security"] = config.strictTransportSecurity"
  }"
  if(config.xFrameOptions) {;"'"
headers['X-Frame-Options"] = config.xFrameOptions"
  }"
  if(config.xContentTypeOptions) {;"'"
headers['X-Content-Type-Options"] = config.xContentTypeOptions"
  }"
  if(config.referrerPolicy) {;"'"
headers['Referrer-Policy"] = config.referrerPolicy"
  }"
  if(config.permissionsPolicy) {;"'"
headers['Permissions-Policy"] = config.permissionsPolicy
=======
export const defaultSecurityHeaders: "SecurityHeadersConfig = {;"
  // Content Security Policy",contentSecurityPolicy: ["
    "default-src 'self'"";'"
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com"";'"
    "style-src 'self' 'unsafe-inline'"";'"
    "img-src 'self' data: https: blob:"";'"
    "font-src 'self' data: "";'"
    "connect-src 'self' https: "//www.google-analytics.com http",s: //analytics.google.com"";'"
    "frame-ancestors 'none'"";'"
    "base-uri 'self'",:all-pages-backup/utils/securityHeaders.ts,";'"
    "form-action 'self'",";'"
    "form-action 'self'"
    'upgrade-insecure-requests'
  ].join('');"
  // HTTP Strict Transport Security (HSTS);";'"
strictTransportSecurity: "'max-age=63072000; includeSubDomains; preload'",:all-pages-backup/utils/securityHeaders.ts;"
  // Prevent, clickjacking,;";'"
xFrameOptions: "'DENY'",// Prevent MIME, type, sniffing,;";'"
xContentTypeOptions: "'nosniff'",// Referrer, Policy,;";'"
referrerPolicy: "'strict-origin-when-cross-origin'",// Permissions Policy (formerly, Feature, Policy);";'"
permissionsPolicy: "[",'camera = ()',;"
  // Prevent clickjacking;";'"
xFrameOptions: "'DENY'",// Prevent MIME type sniffing;";'"
xContentTypeOptions: "'nosniff'",// Referrer Policy;";'"
referrerPolicy: "'strict-origin-when-cross-origin'",// Permissions Policy (formerly, Feature, Policy);";'"
permissionsPolicy: "[",'camera = ()',;
    'microphone=()',;
    'geolocation=()',;
    'payment=()',;
    'usb=()',;
    'interest-cohort=()',;
    'accelerometer=()',;
    'gyroscope=()','magnetometer=()'
  ].join(', ')}
/**;
 * Get security headers as key-value pairs;
 */;
:all-pages-backup/utils/securityHeaders.ts;
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Record<string, string> {;"
  const config = { ...defaultSecurityHeaders, ...customConfig };</>";'"
const headers: "Record<string",string> = {'X-XSS-Protection': '1; mode=block'</>;
export function getSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Record<string, string> {;"
const config = { ...defaultSecurityHeaders, ...customConfig }</>";'"
  const headers: "Record<string",string> = {'X-XSS-Protection': '1; mode = block'
    'X-DNS-Prefetch-Control': 'on'}
if(config.contentSecurityPolicy) {;
headers['Content-Security-Policy'] = config.contentSecurityPolicy;
  }
  if(config.strictTransportSecurity) {;
headers['Strict-Transport-Security'] = config.strictTransportSecurity;
  }
  if(config.xFrameOptions) {;
headers['X-Frame-Options'] = config.xFrameOptions;
  }
  if(config.xContentTypeOptions) {;
headers['X-Content-Type-Options'] = config.xContentTypeOptions;
  }
  if(config.referrerPolicy) {;
headers['Referrer-Policy'] = config.referrerPolicy;
  }
  if(config.permissionsPolicy) {;
headers['Permissions-Policy'] = config.permissionsPolicy;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  }
return, headers;
}
<<<<<<< HEAD

/**"
 * Get security headers in Next.js format"
 */;</string>;"
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Array<{ key: "string; valu",e: "string ",}> {;
=======
/**;
 * Get security headers in Next.js format;"
 */;</>"
export function getNextSecurityHeaders(customConfig?: Partial<SecurityHeadersConfig>): Array<{ key: "string; valu",e: "string "}> {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({;
key;
value);
  }));
}
:all-pages-backup/utils/securityHeaders.ts;
;
<<<<<<< HEAD
export default defaultSecurityHeaders;
export default defaultSecurityHeaders;"
"
}"'"
=======
export default defaultSecurityHeaders;"
export default defaultSecurityHeaders}";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
