export interface TokenSet {
  colors: Record<string, string>;
  typography: Record<string, any>;
}

export function buildTokenSet(): TokenSet {
  return {
    colors: {
      primary: '#0ea5e9',
      secondary: '#64748b',
    },
    typography: {
      fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
      baseSize: 16,
    },
  };
}
