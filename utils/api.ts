


interface RequestOptions extends RequestInit {
  timeout?: number;
}

// Add global type definitions for Node.js environment
interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
  timeout?: number;
}


