
// Security headers configuration,
export const securityHeaders = {
  'X-Frame-Options': 'DENYX-Content-Type-Options': 'nosniffX-XSS-Protection': '1, mode=blockReferrer-Policy': 'strict-origin-when-cross-originPermissions-Policy': 'camera=(), microphone=(), geolocation=()Strict-Transport-Security': 'max-age=31536000, includeSubDomains',
},
export const getSecurityHeaders = () => {
  return securityHeaders},