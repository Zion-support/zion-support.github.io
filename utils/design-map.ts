<<<<<<< HEAD
<<<<<<< HEAD
export type DesignMapSection = {
=======
// Design mapping utilities for Figma integration
export interface DesignComponent {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  id: string;
  name: string;
  type: 'component' | 'variant' | 'instance';
  figmaId: string;
  properties: Record<string, any>;
  variants?: DesignVariant[];
}

export interface DesignVariant {
  id: string;
  name: string;
  properties: Record<string, any>;
  figmaId: string;
}

export interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'typography' | 'spacing' | 'borderRadius' | 'shadow';
  figmaId: string;
}

export interface DesignSystem {
  id: string;
  name: string;
  version: string;
  components: DesignComponent[];
  tokens: DesignToken[];
  lastUpdated: string;
}

// In-memory storage for development
const designSystems: DesignSystem[] = [];

export class DesignMap {
  async createDesignSystem(system: Omit<DesignSystem, 'id' | 'lastUpdated'>): Promise<DesignSystem> {
    const newSystem: DesignSystem = {
      ...system,
      id: `design-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      lastUpdated: new Date().toISOString()
    };
    designSystems.push(newSystem);
    return newSystem;
  }

  async getDesignSystem(id: string): Promise<DesignSystem | null> {
    return designSystems.find(s => s.id === id) || null;
  }

  async updateDesignSystem(id: string, updates: Partial<DesignSystem>): Promise<DesignSystem | null> {
    const index = designSystems.findIndex(s => s.id === id);
    if (index === -1) return null;
    
    designSystems[index] = {
      ...designSystems[index],
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    return designSystems[index];
  }

  async addComponent(systemId: string, component: Omit<DesignComponent, 'id'>): Promise<DesignComponent | null> {
    const system = await this.getDesignSystem(systemId);
    if (!system) return null;
    
    const newComponent: DesignComponent = {
      ...component,
      id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    system.components.push(newComponent);
    system.lastUpdated = new Date().toISOString();
    
    return newComponent;
  }

  async addToken(systemId: string, token: Omit<DesignToken, 'id'>): Promise<DesignToken | null> {
    const system = await this.getDesignSystem(systemId);
    if (!system) return null;
    
    const newToken: DesignToken = {
      ...token,
      id: `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    system.tokens.push(newToken);
    system.lastUpdated = new Date().toISOString();
    
    return newToken;
  }

  async exportToFigma(systemId: string): Promise<any> {
    const system = await this.getDesignSystem(systemId);
    if (!system) return null;
    
    return {
      name: system.name,
      version: system.version,
      components: system.components.map(comp => ({
        name: comp.name,
        type: comp.type,
        properties: comp.properties,
        variants: comp.variants
      })),
      tokens: system.tokens.map(token => ({
        name: token.name,
        value: token.value,
        type: token.type
      }))
    };
  }
}

<<<<<<< HEAD
export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {
  const base = process.env.LOVABLE_CMS_URL;
  if (!base) return null;
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/api/design-tokens`);
    if (!res.ok) return null;
    return (await res.json()) as Partial<TokenSet>;
  } catch {
    return null;
  }
=======
// Design mapping utilities
export interface DesignElement {
  id: string;
  type: 'component' | 'layout' | 'style' | 'asset';
  name: string;
  figmaId?: string;
  properties: Record<string, any>;
  children?: DesignElement[];
  parent?: string;
}

export interface DesignSystem {
  id: string;
  name: string;
  version: string;
  components: DesignElement[];
  tokens: Record<string, any>;
  assets: DesignElement[];
  lastUpdated: Date;
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: Array<{
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  }>;
  effects?: Array<{
    type: string;
    radius?: number;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  }>;
  characters?: string;
  style?: {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    textAlignHorizontal?: string;
    textAlignVertical?: string;
  };
}

export class DesignMapManager {
  private designSystems: Map<string, DesignSystem> = new Map();
  private figmaNodes: Map<string, FigmaNode> = new Map();

  // Design System methods
  createDesignSystem(id: string, name: string, version: string = '1.0.0'): DesignSystem {
    const designSystem: DesignSystem = {
      id,
      name,
      version,
      components: [],
      tokens: {},
      assets: [],
      lastUpdated: new Date()
    };
    
    this.designSystems.set(id, designSystem);
    return designSystem;
  }

  getDesignSystem(id: string): DesignSystem | null {
    return this.designSystems.get(id) || null;
  }

  addComponent(designSystemId: string, component: DesignElement): boolean {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return false;

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

// Singleton instance
export const designMapManager = new DesignMapManager();

// Utility functions
export function createDesignElement(
  id: string,
  type: DesignElement['type'],
  name: string,
  properties: Record<string, any> = {}
): DesignElement {
  return {
    id,
    type,
    name,
    properties,
    children: []
  };
}

export function generateDesignId(): string {
  return `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
// Default instance
export const designMap = new DesignMap();
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
