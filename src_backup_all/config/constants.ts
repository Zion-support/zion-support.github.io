// API base URL - will use proxy in development, direct URL in production
export const API_BASE_URL = import.meta.env.DEV ? '/api' : 'http://localhost:5000/api';