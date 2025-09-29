export const CSP_POLICY = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com", "data:"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"]
};

export function getCSPHeader(): string {
  return Object.entries(CSP_POLICY)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
}