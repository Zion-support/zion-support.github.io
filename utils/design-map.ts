export interface DesignMap {
  id: string;
  name: string;
  description: string;
  components: DesignComponent[];
  layouts: DesignLayout[];
  themes: DesignTheme[];
  createdAt: string;
  updatedAt: string;
}

export interface DesignComponent {
  id: string;
  name: string;
  type: 'button' | 'input' | 'card' | 'modal' | 'navigation' | 'layout';
  properties: Record<string, any>;
  styles: Record<string, any>;
  variants: ComponentVariant[];
}

export interface ComponentVariant {
  name: string;
  properties: Record<string, any>;
  styles: Record<string, any>;
}

export interface DesignLayout {
  id: string;
  name: string;
  type: 'page' | 'section' | 'grid';
  structure: LayoutStructure;
  responsive: ResponsiveBreakpoints;
}

export interface LayoutStructure {
  type: 'flex' | 'grid' | 'absolute' | 'relative';
  direction?: 'row' | 'column';
  gap?: number;
  padding?: number;
  margin?: number;
  children: LayoutNode[];
}

export interface LayoutNode {
  id: string;
  componentId?: string;
  children?: LayoutNode[];
  styles?: Record<string, any>;
  responsive?: ResponsiveBreakpoints;
}

export interface ResponsiveBreakpoints {
  mobile?: Record<string, any>;
  tablet?: Record<string, any>;
  desktop?: Record<string, any>;
}

export interface DesignTheme {
  id: string;
  name: string;
  colors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  shadows: ShadowScale;
  borders: BorderScale;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface TypographyScale {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface SpacingScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface ShadowScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface BorderScale {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

class DesignMapStore {
  private maps: Map<string, DesignMap> = new Map();

  async createMap(map: Omit<DesignMap, 'id' | 'createdAt' | 'updatedAt'>): Promise<DesignMap> {
    const id = `map_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const newMap: DesignMap = {
      ...map,
      id,
      createdAt: now,
      updatedAt: now
    };
    
    this.maps.set(id, newMap);
    return newMap;
  }

  async getMap(id: string): Promise<DesignMap | null> {
    return this.maps.get(id) || null;
  }

  async getAllMaps(): Promise<DesignMap[]> {
    return Array.from(this.maps.values());
  }

  async updateMap(id: string, updates: Partial<DesignMap>): Promise<DesignMap | null> {
    const map = this.maps.get(id);
    if (!map) return null;
    
    const updated = { ...map, ...updates, updatedAt: new Date().toISOString() };
    this.maps.set(id, updated);
    return updated;
  }

  async deleteMap(id: string): Promise<boolean> {
    return this.maps.delete(id);
  }

  async exportToFigma(map: DesignMap): Promise<string> {
    // This would integrate with Figma API to create components and styles
    // For now, return a mock export
    return JSON.stringify({
      mapId: map.id,
      components: map.components.length,
      layouts: map.layouts.length,
      themes: map.themes.length,
      exportedAt: new Date().toISOString()
    }, null, 2);
  }

  async importFromFigma(figmaData: any): Promise<DesignMap> {
    // This would parse Figma API response and create a design map
    // For now, create a mock map
    return this.createMap({
      name: figmaData.name || 'Imported from Figma',
      description: 'Design map imported from Figma',
      components: [],
      layouts: [],
      themes: []
    });
  }
}

export const designMapStore = new DesignMapStore();