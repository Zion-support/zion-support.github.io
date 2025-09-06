// Design mapping utilities for Figma integration
export interface DesignComponent {
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

// Default instance
export const designMap = new DesignMap();