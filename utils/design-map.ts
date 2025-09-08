export interface TokenSet {
export interface TokenSet {;
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}
export interface UIKit {

  tokens: TokenSet;
}

export async function buildTokenSet(fileId: string): Promise<TokenSet> {
  // Placeholder implementation
  return {
    
    return this.props.children;
  }
}
    components: [],
    pages: [],
    styles: []
  };

export type TokenSet = {
  colors: Record<string, string>;
  typography: {
    fontSizes: Record<string, string>
};
};

export async function buildTokenSet(): Promise<TokenSet> {
  // Dynamically import Tailwind config for color extraction;
  const tailwindConfig = require('../tailwind && tailwind.config.js');
  const extendedColors = tailwindConfig?.theme?.extend?.colors || {};
  const colors: Record<string, string> = {};

  function flattenColors(prefix: string, obj: any) {
    Object && Object.entries(obj || {}).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'string') {
        colors[newKey] = value;
      } else if (typeof value === 'object') {
        flattenColors(newKey, value);
      }
    });
  }

  flattenColors('', extendedColors);

  const typography = {
    fontSizes: tailwindConfig?.theme?.extend?.fontSize || {},
  };

  return { colors, typography };

export type UIKitKind = 'tailwind' | 'chakra' | 'react';

export function buildUIKit(kind: UIKitKind): Record<string, string> {
  if (kind === 'tailwind') {
    return {
      'README && README.md':
        '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.',
      'components/Button && Button.tsx':
        'export function Button({ children }: { children: React && React.ReactNode }) { return <button className="px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90">{children}</button> }',
      'components/Card && Card.tsx':
        'export function Card({ children }: { children: React && React.ReactNode }) { return <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">{children}</div> }',
=======    };
  }
  if (kind === 'chakra') {
    return {
      'README && README.md':
        '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.',
      'theme/index && index.ts':
        "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}});",
      'components/Button && Button.tsx':
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }',
    };
  }
  return {
    'README && README.md':
      '# Zion OS React UI Kit\n\nFramework-agnostic React components.',
    'components/Button && Button.tsx':
      "export function Button({ children }: { children: React && React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }",
  };

export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {
  const base = process && process.env.LOVABLE_CMS_URL;
  if (!base) return null;
  try {
    const res = await fetch(`${base && base.replace(/\/$/, '')}/api/design-tokens`);
    if (!res && res.ok) return null;
    return (await res && res.json()) as Partial<TokenSet>;
  } catch {
    return null
};
  };
}

  getDesignSystem(id: string): DesignSystem | null {
    return this.designSystems.get(id) || null;
  }

  addComponent(designSystemId: string, component: DesignElement): boolean {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return false;  const tokens = await buildTokenSet(fileId);
  return {

    designSystem.components.push(component);
    designSystem.lastUpdated = new Date();
    return true;
  }

  addToken(designSystemId: string, key: string, value: any): boolean {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return false;

    designSystem.tokens[key] = value;
    designSystem.lastUpdated = new Date();
    return true;
  }

  addAsset(designSystemId: string, asset: DesignElement): boolean {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return false;

    designSystem.assets.push(asset);
    designSystem.lastUpdated = new Date();
    return true;
  }

  // Figma integration methods
  importFromFigma(figmaData: FigmaNode[], designSystemId: string): DesignElement[] {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return [];

    const elements: DesignElement[] = [];
    
    for (const node of figmaData) {
      this.figmaNodes.set(node.id, node);
      const element = this.convertFigmaNodeToDesignElement(node);
      elements.push(element);
    }

    designSystem.components.push(...elements);
    designSystem.lastUpdated = new Date();
    return elements;
  }

  private convertFigmaNodeToDesignElement(node: FigmaNode): DesignElement {
    const element: DesignElement = {
      id: node.id,
      type: this.mapFigmaTypeToElementType(node.type),
      name: node.name,
      figmaId: node.id,
      properties: this.extractProperties(node),
      children: node.children?.map(child => this.convertFigmaNodeToDesignElement(child))
    };

    return element;
  }

  private mapFigmaTypeToElementType(figmaType: string): DesignElement['type'] {
    const typeMap: Record<string, DesignElement['type']> = {
      'FRAME': 'layout',
      'COMPONENT': 'component',
      'INSTANCE': 'component',
      'TEXT': 'component',
      'RECTANGLE': 'component',
      'ELLIPSE': 'component',
      'VECTOR': 'asset',
      'IMAGE': 'asset'
    };

    return typeMap[figmaType] || 'component';
  }

  private extractProperties(node: FigmaNode): Record<string, any> {
    const properties: Record<string, any> = {};

    if (node.absoluteBoundingBox) {
      properties.bounds = node.absoluteBoundingBox;
    }

    if (node.fills && node.fills.length > 0) {
      properties.fills = node.fills;
    }

    if (node.effects && node.effects.length > 0) {
      properties.effects = node.effects;
    }

    if (node.characters) {
      properties.text = node.characters;
    }

    if (node.style) {
      properties.style = node.style;
    }

    return properties;
  }

  // Export methods
  exportToCode(designSystemId: string, format: 'react' | 'vue' | 'html' | 'css' = 'react'): string {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return '';

    switch (format) {
      case 'react':
        return this.exportToReact(designSystem);
      case 'vue':
        return this.exportToVue(designSystem);
      case 'html':
        return this.exportToHTML(designSystem);
      case 'css':
        return this.exportToCSS(designSystem);
      default:
        return '';
    }
  }

  private exportToReact(designSystem: DesignSystem): string {
    let code = `// ${designSystem.name} Design System\n`;
    code += `// Generated on ${designSystem.lastUpdated.toISOString()}\n\n`;

    // Export tokens as CSS variables
    code += ':root {\n';
    for (const [key, value] of Object.entries(designSystem.tokens)) {
      code += `  --${key}: ${value};\n`;
    }
    code += '}\n\n';

    // Export components
    for (const component of designSystem.components) {
      code += this.generateReactComponent(component);
    }

    return code;
  }

  private generateReactComponent(element: DesignElement): string {
    const componentName = element.name.replace(/[^a-zA-Z0-9]/g, '');
    let code = `export const ${componentName} = ({ children, ...props }) => {\n`;
    code += `  return (\n`;
    code += `    <div {...props}>\n`;
    code += `      {children}\n`;
    code += `    </div>\n`;
    code += `  );\n`;
    code += `};\n\n`;
    return code;
  }

  private exportToVue(designSystem: DesignSystem): string {
    // Similar to React but for Vue
    return `// Vue components for ${designSystem.name}`;
  }

  private exportToHTML(designSystem: DesignSystem): string {
    // Generate HTML structure
    return `<!-- HTML for ${designSystem.name} -->`;
  }

  private exportToCSS(designSystem: DesignSystem): string {
    // Generate CSS styles
    return `/* CSS for ${designSystem.name} */`;
  }

  // Utility methods
  getAllDesignSystems(): DesignSystem[] {
    return Array.from(this.designSystems.values());
  }

  clearDesignSystem(id: string): boolean {
    return this.designSystems.delete(id);
  }

  clearAll(): void {
    this.designSystems.clear();
    this.figmaNodes.clear();
  }
}
export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {
  const tokens = await buildTokenSet(fileId);
export async function buildTokenSet (file_id: string): Promise < TokenSet> {
  // Placeholder implementation;
  return {
    colors: {
      primary: "#007AFF",
      secondary: "#5856D6",
      success: "#34C759",
      warning: "#FF9500",
      error: "#FF3B30",
    },
    typography: {
      heading1: { fontSize: 32, fontWeight: "bold" },
      heading2: { fontSize: 24, fontWeight: "bold" },
      body: { fontSize: 16, fontWeight: "normal" },
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,    },
  };
}

export async function buildUIKit(
  fileId: string,
  kind: UIKitKind,
): Promise<UIKit> {
  const tokens = await buildTokenSet(fileId);

  return {
    components: {
      button: {
        primary: {
          backgroundColor: tokens.colors.primary,
          padding: tokens.spacing.md,
        },
      },
    },
    tokens,
  };
}
