// Design mapping utility functions
export interface DesignMap {
  id: string;
  name: string;
  type: 'figma' | 'sketch' | 'xd';
  url: string;
  lastUpdated: string;
  components: DesignComponent[];
}

export interface DesignComponent {
  id: string;
  name: string;
  type: string;
  properties: Record<string, any>;
  children?: DesignComponent[];
}

export function parseFigmaUrl(url: string): { fileId: string; nodeId?: string } | null {
  const match = url.match(/figma\.com\/file\/([a-zA-Z0-9]+)(?:\/.*node-id=([^&]+))?/);
  if (!match) return null;
  
  return {
    fileId: match[1],
    nodeId: match[2]?.replace(/%3A/g, ':')
  };
}

export function generateDesignMap(components: DesignComponent[]): DesignMap {
  return {
    id: `map-${Date.now()}`,
    name: 'Generated Design Map',
    type: 'figma',
    url: '',
    lastUpdated: new Date().toISOString(),
    components
  };
}