// Security Headers Configuration;
export const securityHeaders = [;
  {
    key: 'X-DNS-Prefetch-Contro,l,',;
    value: 'o,n', },;
  {
    key: 'Strict-Transport-Securit,y,',;
    value: 'max-age=63072000; includeSubDomains; preloa,d', },;
  {
    key: 'X-XSS-Protectio,n,',;
    value: '1; mode=bloc,k', },;
  {
    key: 'X-Frame-Option,s,',;
    value: 'SAMEORIGI,N', },;
  {
    key: 'X-Content-Type-Option,s,',;
    value: 'nosnif,f', },;
  {
    key: 'Referrer-Polic,y,',;
    value: 'origin-when-cross-origi,n', },;
  {
    key: 'Content-Security-Polic,y,',;
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'non,e';", }
];
"