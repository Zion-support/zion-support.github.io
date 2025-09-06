export interface DesignComponent {
  id: string;
  name: string;
  type: 'button' | 'input' | 'card' | 'modal' | 'navigation' | 'layout';
  figmaUrl?: string;
  description: string;
  props: Record<string, any>;
  variants: string[];
}

export interface DesignSystem {
  name: string;
  version: string;
  components: DesignComponent[];
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}

export const designMap: DesignSystem = {
  name: 'Zion Design System',
  version: '1.0.0',
  components: [
    {
      id: 'button-primary',
      name: 'Primary Button',
      type: 'button',
      description: 'Main call-to-action button',
      props: {
        variant: 'primary',
        size: 'medium',
        disabled: false
      },
      variants: ['primary', 'secondary', 'outline', 'ghost']
    },
    {
      id: 'input-text',
      name: 'Text Input',
      type: 'input',
      description: 'Standard text input field',
      props: {
        type: 'text',
        placeholder: '',
        required: false
      },
      variants: ['text', 'email', 'password', 'search']
    }
  ],
  colors: {
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#FFFFFF',
    surface: '#F9FAFB'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem'
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48
  }
};

export function getComponentById(id: string): DesignComponent | null {
  return designMap.components.find(c => c.id === id) || null;
}

export function getComponentsByType(type: string): DesignComponent[] {
  return designMap.components.filter(c => c.type === type);
}

export function exportToFigma(component: DesignComponent): string {
  // Mock Figma export - in a real app, this would generate Figma API calls
  return `https://figma.com/component/${component.id}`;
}