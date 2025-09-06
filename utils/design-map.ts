// Design mapping utilities for Figma integration
export interface DesignNode {
  id: string;
  name: string;
  type: string;
  children?: DesignNode[];
  properties: Record<string, any>;
}

export interface DesignMap {
  id: string;
  name: string;
  nodes: DesignNode[];
  metadata: {
    figmaFileId: string;
    lastUpdated: string;
    version: string;
  };
}

export interface ComponentMapping {
  figmaId: string;
  componentName: string;
  reactComponent?: string;
  cssClasses?: string[];
  props?: Record<string, any>;
}

export class DesignMapper {
  private mappings: Map<string, ComponentMapping> = new Map();

  addMapping(mapping: ComponentMapping): void {
    this.mappings.set(mapping.figmaId, mapping);
  }

  getMapping(figmaId: string): ComponentMapping | undefined {
    return this.mappings.get(figmaId);
  }

  getAllMappings(): ComponentMapping[] {
    return Array.from(this.mappings.values());
  }

  removeMapping(figmaId: string): boolean {
    return this.mappings.delete(figmaId);
  }

  clearMappings(): void {
    this.mappings.clear();
  }

  exportMappings(): string {
    return JSON.stringify(Array.from(this.mappings.entries()), null, 2);
  }

  importMappings(jsonData: string): boolean {
    try {
      const entries = JSON.parse(jsonData);
      this.mappings.clear();
      entries.forEach(([key, value]: [string, ComponentMapping]) => {
        this.mappings.set(key, value);
      });
      return true;
    } catch (error) {
      console.error('Failed to import mappings:', error);
      return false;
    }
  }
}

export const designMapper = new DesignMapper();

// Utility functions
export function parseFigmaNode(node: any): DesignNode {
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    children: node.children?.map(parseFigmaNode),
    properties: {
      x: node.absoluteBoundingBox?.x,
      y: node.absoluteBoundingBox?.y,
      width: node.absoluteBoundingBox?.width,
      height: node.absoluteBoundingBox?.height,
      fills: node.fills,
      strokes: node.strokes,
      effects: node.effects,
      cornerRadius: node.cornerRadius,
      characters: node.characters,
      style: node.style
    }
  };
}

export function generateReactComponent(node: DesignNode, mapping?: ComponentMapping): string {
  const componentName = mapping?.componentName || node.name.replace(/[^a-zA-Z0-9]/g, '');
  const props = mapping?.props || {};
  
  let component = `import React from 'react';\n\n`;
  component += `export const ${componentName}: React.FC = () => {\n`;
  component += `  return (\n`;
  component += `    <div className="${mapping?.cssClasses?.join(' ') || ''}">\n`;
  
  if (node.children) {
    node.children.forEach(child => {
      component += `      <div>${child.name}</div>\n`;
    });
  }
  
  component += `    </div>\n`;
  component += `  );\n`;
  component += `};\n`;
  
  return component;
}

export function generateCSSClasses(node: DesignNode): string[] {
  const classes: string[] = [];
  
  // Generate class based on node type and properties
  if (node.type === 'TEXT') {
    classes.push('text');
    if (node.properties.characters) {
      classes.push('text-content');
    }
  } else if (node.type === 'RECTANGLE') {
    classes.push('rectangle');
    if (node.properties.cornerRadius) {
      classes.push('rounded');
    }
  } else if (node.type === 'FRAME') {
    classes.push('frame');
  }
  
  // Add size classes
  if (node.properties.width && node.properties.height) {
    classes.push(`w-${Math.round(node.properties.width)}`);
    classes.push(`h-${Math.round(node.properties.height)}`);
  }
  
  return classes;
}