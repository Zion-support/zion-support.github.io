
// Content Security Policy configuration,
export const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for Next.js,
    'https: //vercel.livehttps://va.vercel-scripts.com',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for styled-jsx,
    'https: //fonts.googleapis.com',
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
  ],
  'img-src': [
    "'self'",
    'data:https:',
    'blob:',
  ],
  'connect-src': [
    "'self'",
    'https://api.vercel.comhttps://vitals.vercel-insights.com',
  ],
  'frame-src': [
    "'none'",
  ],
  'object-src': [
    "'none'",
  ],
  'base-uri': [
    "'self'",
  ],
  'form-action': [
    "'self'",
  ],
  'frame-ancestors': [
    "'none'",
  ],
  'upgrade-insecure-requests': []
},
export const generateCSP = (): string => {
  return Object.entries(cspDirectives),
    .map(([directive, sources]) => {
      if (sources.length === 0) {
        return directive}
      return `${directive} ${sources.join(' ')}`}),
    .join(', ')},
export const cspHeader = `Content-Security-Policy: ${generateCSP()}`,