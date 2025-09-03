// Minimal security config to resolve merge conflict
export const securityHeaders = {
    contentSecurityPolicy: "default-src 'self'",
    frameOptions: 'SAMEORIGIN',
    xssProtection: '1; mode=block',
};

export type SecurityHeaders = typeof securityHeaders;
