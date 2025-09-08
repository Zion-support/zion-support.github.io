
// Security headers configuration
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control'
    value: 'on'
  }
];

export const getSecurityHeaders = () => securityHeaders;
