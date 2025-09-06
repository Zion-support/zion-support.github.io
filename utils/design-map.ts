export interface DesignComponent {
  id: string;
  name: string;
  type: 'button' | 'input' | 'card' | 'modal' | 'navigation' | 'layout' | 'other';
  figmaId: string;
  description?: string;
  props: Record<string, any>;
  variants: DesignVariant[];
}

export interface DesignVariant {
  id: string;
  name: string;
  figmaId: string;
  props: Record<string, any>;
  styles: {
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
  };
}

export interface DesignSystem {
  id: string;
  name: string;
  version: string;
  components: DesignComponent[];
  tokens: {
    colors: Record<string, string>;
    typography: Record<string, any>;
    spacing: Record<string, string>;
    shadows: Record<string, string>;
  };
}

export class DesignMap {
  private components: Map<string, DesignComponent> = new Map();
  private systems: Map<string, DesignSystem> = new Map();

  addComponent(component: DesignComponent): void {
    this.components.set(component.id, component);
  }

  getComponent(id: string): DesignComponent | undefined {
    return this.components.get(id);
  }

  getAllComponents(): DesignComponent[] {
    return Array.from(this.components.values());
  }

  addSystem(system: DesignSystem): void {
    this.systems.set(system.id, system);
  }

  getSystem(id: string): DesignSystem | undefined {
    return this.systems.get(id);
  }

  getAllSystems(): DesignSystem[] {
    return Array.from(this.systems.values());
  }

  exportToFigma(componentId: string): any {
    const component = this.getComponent(componentId);
    if (!component) {
      throw new Error(`Component ${componentId} not found`);
    }

    return {
      name: component.name,
      type: component.type,
      figmaId: component.figmaId,
      description: component.description,
      variants: component.variants.map(variant => ({
        name: variant.name,
        figmaId: variant.figmaId,
        styles: variant.styles
      }))
    };
  }

  importFromFigma(figmaData: any): DesignComponent {
    const component: DesignComponent = {
      id: figmaData.id || Date.now().toString(),
      name: figmaData.name,
      type: figmaData.type || 'other',
      figmaId: figmaData.figmaId,
      description: figmaData.description,
      props: figmaData.props || {},
      variants: figmaData.variants || []
    };

    this.addComponent(component);
    return component;
  }
}

export const designMap = new DesignMap();