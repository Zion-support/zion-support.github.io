export type UIKitKind = 'ios' | 'android' | 'web';

export interface TokenSet {
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
  shadows: Record<string, any>;
  borders: Record<string, any>;
}

export interface DesignMap {
  name: string;
  description: string;
  version: string;
  tokens: TokenSet;
  components: Record<string, any>;
  screens: Record<string, any>;
}

export function getZionDesignMap(): DesignMap {
  return {
    name: 'Zion Design System',
    description: 'Comprehensive design system for Zion Tech Group',
    version: '1.0.0',
    tokens: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#10b981',
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#1e293b',
        'text-muted': '#64748b'
      },
      typography: {
        'heading-1': { fontSize: '2.5rem', fontWeight: 'bold' },
        'heading-2': { fontSize: '2rem', fontWeight: 'bold' },
        'heading-3': { fontSize: '1.5rem', fontWeight: 'semibold' },
        'body': { fontSize: '1rem', fontWeight: 'normal' },
        'caption': { fontSize: '0.875rem', fontWeight: 'normal' }
      },
      spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        '2xl': 48
      },
      shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
      },
      borders: {
        sm: '1px solid #e2e8f0',
        md: '2px solid #e2e8f0',
        lg: '4px solid #e2e8f0'
      }
    },
    components: {
      Button: {
        variants: ['primary', 'secondary', 'outline', 'ghost'],
        sizes: ['sm', 'md', 'lg']
      },
      Card: {
        variants: ['default', 'elevated', 'outlined'],
        sizes: ['sm', 'md', 'lg']
      }
    },
    screens: {
      mobile: { width: 375, height: 667 },
      tablet: { width: 768, height: 1024 },
      desktop: { width: 1440, height: 900 }
    }
  };
}