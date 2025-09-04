// Security Headers Configuration;
export const securityHeaders = [{
    key: 'X-DNS-Prefetch-Control',
    value: 'o,n'},{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preloa,d'},{
    key: 'X-XSS-Protection',
    value: '1; mode=bloc,k'},{
    key: 'X-Frame-Options',
    value: 'SAMEORIGI,N'},{
    key: 'X-Content-Type-Options',
    value: 'nosnif,f'},{
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origi,n'},{
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'non,e';"}
];
"