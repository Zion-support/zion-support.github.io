export interface DesignMap {
  id: string;
  name: string;
  figmaUrl: string;
  components: DesignComponent[];
  createdAt: string;
  updatedAt: string;
}

export interface DesignComponent {
  id: string;
  name: string;
  type: 'button' | 'input' | 'card' | 'modal' | 'layout' | 'other';
  figmaNodeId: string;
  properties: {
    width?: number;
    height?: number;
    color?: string;
    fontSize?: number;
    borderRadius?: number;
    padding?: number;
    margin?: number;
  };
  variants?: DesignVariant[];
}

export interface DesignVariant {
  name: string;
  properties: Record<string, any>;
}

// In-memory store for demo purposes
let designMaps: DesignMap[] = [];

export const designMapStore = {
  async getDesignMaps(): Promise<DesignMap[]> {
    return [...designMaps];
  },

  async getDesignMapById(id: string): Promise<DesignMap | null> {
    return designMaps.find(dm => dm.id === id) || null;
  },

  async createDesignMap(designMap: Omit<DesignMap, 'id' | 'createdAt' | 'updatedAt'>): Promise<DesignMap> {
    const newDesignMap: DesignMap = {
      ...designMap,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    designMaps.push(newDesignMap);
    return newDesignMap;
  },

  async updateDesignMap(id: string, updates: Partial<DesignMap>): Promise<DesignMap | null> {
    const index = designMaps.findIndex(dm => dm.id === id);
    if (index === -1) return null;
    
    designMaps[index] = {
      ...designMaps[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return designMaps[index];
  },

  async deleteDesignMap(id: string): Promise<boolean> {
    const index = designMaps.findIndex(dm => dm.id === id);
    if (index === -1) return false;
    
    designMaps.splice(index, 1);
    return true;
  }
};