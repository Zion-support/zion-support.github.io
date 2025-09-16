<<<<<<< HEAD
=======

ursor/automate-test-improve-and-merge-code-646c;
export type UIKitKind = "ios" | "android" | "web";
export type UIKitKind = "ios" | "android" | "web";
export interface TokenSet  {export interface TokenSet  {export interface TokenSet  {export type UIKitKind = "ios" | "android" | "web";
export type UIKitKind = "ios" | "android" | "web";
export interface TokenSet  {export interface TokenSet  {export type DesignMapSection = {id: string;
  title: string;
  description?: string;
  items: { id: string; title: string; description?: string }[];
}export type DesignMap = {route: string;
  products: {foundations: DesignMapSection[];
    talent: DesignMapSection[];
    client: DesignMapSection[];
    aiTools: DesignMapSection[];
    dao: DesignMapSection[];
    admin: DesignMapSection[];
    mobile: DesignMapSection[];
  }}export function getZionDesignMap(): DesignMap {return {route: '/design-map',products: {foundations: [;
        {id: 'foundations-colors',title: 'Color system',items: [;
            { id: 'light', title: 'Light' },{ id: 'dark', title: 'Dark' }
          ];
        },{id: 'foundations-typography',title: 'Typography',items: [;
            { id: 'heading-scale', title: 'Heading scale' },{ id: 'body-text', title: 'Body text' },{ id: 'mono', title: 'Monospace' }
          ];
        },{id: 'foundations-icons',title: 'Icon set',items: [;
            { id: 'system', title: 'System icons' },{ id: 'product', title: 'Product icons' }
          ];
        },{id: 'foundations-components',title: 'Component library',items: [;
            { id: 'buttons', title: 'Buttons' },{ id: 'cards', title: 'Cards' },{ id: 'badges', title: 'Badges' },{ id: 'tags', title: 'Tags' }
          ];
        }
      ],talent: [;
        {id: 'talent-resume',title: 'Resume builder',items: [;
            { id: 'sections', title: 'Sections' },{ id: 'templates', title: 'Templates' },{ id: 'export', title: 'Export' }
          ];
        },{id: 'talent-apply',title: 'Job application flow',items: [;
            { id: 'job-list', title: 'Job list' },{ id: 'apply-form', title: 'Apply form' },{ id: 'status', title: 'Status' }
          ];
        },{id: 'talent-portfolio',title: 'Portfolio / project cards',items: [;
            { id: 'grid', title: 'Grid' },{ id: 'detail', title: 'Detail' }
          ];
        },{id: 'talent-interview',title: 'Interview & chat UI',items: [;
            { id: 'chat', title: 'Chat' },{ id: 'interview', title: 'Interview' }
          ];
        },{id: 'talent-dashboard',title: 'Dashboard with stats',items: [;
            { id: 'overview', title: 'Overview' },{ id: 'charts', title: 'Charts' }
          ];
        }
      ],client: [;
        {id: 'client-job-post',title: 'Job post flow',items: [;
            { id: 'draft', title: 'Draft' },{ id: 'publish', title: 'Publish' }
          ];
        },{id: 'client-team-builder',title: 'Team builder',items: [;
            { id: 'roles', title: 'Roles' },{ id: 'invite', title: 'Invite' }
          ];
        },{id: 'client-shortlist-offer',title: 'Shortlist + offer page',items: [;
            { id: 'shortlist', title: 'Shortlist' },{ id: 'offer', title: 'Offer' }
          ];
        },{id: 'client-milestone-quote',title: 'Milestone + quote view',items: [;
            { id: 'milestones', title: 'Milestones' },{ id: 'quotes', title: 'Quotes' }
          ];
        }
      ],aiTools: [;
        {id: 'ai-gpt-prompts',title: 'GPT prompt modals',items: [;
            { id: 'prompt-modal', title: 'Prompt modal' },{ id: 'history', title: 'History' }
          ];
        },{id: 'ai-content-assistant',title: 'Content assistant panels',items: [;
            { id: 'side-panel', title: 'Side panel' },{ id: 'inline', title: 'Inline helper' }
          ];
        },{id: 'ai-scoring',title: 'Scoring overlays',items: [;
            { id: 'resume-score', title: 'Resume score' },{ id: 'job-fit', title: 'Job fit' }
          ];
        },{id: 'ai-chat',title: 'Chat-style interaction screens',items: [;
            { id: 'chat', title: 'Chat' },{ id: 'agent', title: 'Agent view' }
          ];
        }
      ],dao: [;
        {id: 'dao-voting',title: 'Voting screens',items: [;
            { id: 'list', title: 'Proposals list' },{ id: 'vote', title: 'Vote flow' }
          ];
        },{id: 'dao-treasury',title: 'Treasury dashboard',items: [;
            { id: 'balances', title: 'Balances' },{ id: 'activity', title: 'Activity' }
          ];
        },{id: 'dao-proposals',title: 'Proposal submission',items: [;
            { id: 'create', title: 'Create proposal' },{ id: 'review', title: 'Review' }
          ];
        },{id: 'dao-token',title: 'Token transfer + staking',items: [;
            { id: 'transfer', title: 'Transfer' },{ id: 'stake', title: 'Stake' }
          ];
        }
      ],admin: [;
        {id: 'admin-user-metrics',title: 'User metrics',items: [;
            { id: 'cohorts', title: 'Cohorts' },{ id: 'funnels', title: 'Funnels' }
          ];
        },{id: 'admin-content-approvals',title: 'Content approvals',items: [;
            { id: 'queue', title: 'Queue' },{ id: 'policies', title: 'Policies' }
          ];
        },{id: 'admin-global-toggles',title: 'Global toggle center',items: [;
            { id: 'flags', title: 'Feature flags' },{ id: 'experiments', title: 'Experiments' }
          ];
        },{id: 'admin-deployment',title: 'Deployment panel',items: [;
            { id: 'environments', title: 'Environments' },{ id: 'releases', title: 'Releases' }
          ];
        }
      ],mobile: [;
        {id: 'mobile-nav',title: 'Navigation tabs',items: [;
            { id: 'tabs', title: 'Tabs' },{ id: 'topbar', title: 'Top bar' }
          ];
        },{id: 'mobile-flows',title: 'Condensed flows for jobs + chat',items: [;
            { id: 'jobs', title: 'Jobs' },{ id: 'chat', title: 'Chat' }
          ];
        },{id: 'mobile-onboarding',title: 'App onboarding',items: [;
            { id: 'welcome', title: 'Welcome' },{ id: 'permissions', title: 'Permissions' }
          ];
        }
      ];
    }
  }export type TokenSet = {colors: Record<string, string>;
export type UIKitKind = "ios" | "android" | "web";
export type UIKitKind = "ios" | "android" | "web";
export interface TokenSet {

export interface TokenSet {;
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}
export interface UIKit  {export interface UIKit  {components: Record<string, any>;
  tokens: TokenSet;
}export async function buildTokenSet(fileId: string): Promise<TokenSet> {// Placeholder implementation;
  return {tokens: TokenSet;
}class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;}return this.props.children;
  }
}
    components: [],pages: [],styles: [];
  }export type TokenSet = {colors: Record<string, string>;
  typography: {fontSizes: Record<string, string>;
  }}export async function buildTokenSet(): Promise<TokenSet> {// Dynamically import Tailwind config for color extraction;
  const tailwindConfig = require('../tailwind && tailwind.config.js')const extendedColors = tailwindConfig?.theme?.extend?.colors || {}const colors: Record<string, string>  = {}function flattenColors() {Object && Object.entries(obj || {}).forEach(([key, value]) => {const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'string') {colors[newKey] = value;
      } else if (typeof value === 'object') {flattenColors(newKey, value)}
    })}flattenColors('', extendedColors)const typography = {fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}
    fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}
    fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}
  }return { colors, typography }export type UIKitKind = 'tailwind' | 'chakra' | 'react';export function buildUIKit(kind: UIKitKind): Record<string, string> {if (kind === 'tailwind') {return {'README && README.md':;
        '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.','components/Button && Button.tsx':;
        'export function Button({ children }: { children: React && React.ReactNode }) { return <button className="px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90">{children}</button> }','components/Card && Card.tsx':;
        'export function Card({ children }: { children: React && React.ReactNode }) { return <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">{children}</div> }',ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
    }}
  if (kind === 'chakra') {return {'README && README.md':;
        '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.','theme/index && index.ts':;
        "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}})",'components/Button && Button.tsx':;
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }';
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }';
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }';
    }}
  return {'README && README.md':;
      '# Zion OS React UI Kit\n\nFramework-agnostic React components.','components/Button && Button.tsx':;
      "export function Button({ children }: { children: React && React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }";
      "export function Button({ children }: { children: React && React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }";
      "export function Button({ children }: { children: React && React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }";
  }export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {const base = process && process.env.LOVABLE_CMS_URL;
}

export async function buildTokenSet(fileId: string): Promise<TokenSet> {
  // Placeholder implementation
  return {}
    
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
    fontSizes: Record<string, string>;
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
    fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}
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
        'export function Card({ children }: { children: React && React.ReactNode }) { return <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">{children}</div> }'
    };
  }
  if (kind === 'chakra') {
    return {
      'README && README.md':
        '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.',
      'theme/index && index.ts':
        "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}});",
      'components/Button && Button.tsx':
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }'
    };
  }
  return {
    'README && README.md':
      '# Zion OS React UI Kit\n\nFramework-agnostic React components.',
    'components/Button && Button.tsx':
      "export function Button({ children }: { children: React && React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }"
  };

export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {
  const base = process && process.env.LOVABLE_CMS_URL;
  if (!base) return null;
  try {const res = await fetch(`${base && base.replace(/\/$/, '')}/api/design-tokens`)if (!res && res.ok) return null;
    return (await res && res.json()) as Partial<TokenSet>;
  } catch {return null;// Design mapping utilities;
export interface DesignElement  {id: string;
  } catch {
    return null;
// Design mapping utilities
export interface DesignElement {
  id: string;
  type: 'component' | 'layout' | 'style' | 'asset';
  name: string;
  figmaId?: string;
  properties: Record<string, any>;
  children?: DesignElement[];
  parent?: string;
}export interface DesignSystem  {id: string;
  name: string;
  version: string;
  components: DesignElement[];
  tokens: Record<string, any>;
  assets: DesignElement[];
  lastUpdated: Date;
}export interface FigmaNode  {id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {x: number;
    y: number;
    width: number;
    height: number;
  }fills?: Array<{type: string;
    color?: {r: number;
      g: number;
      b: number;
      a: number;
    }}>;
  effects?: Array<{type: string;
    radius?: number;
    color?: {r: number;
      g: number;
      b: number;
      a: number;
    }}>;
  characters?: string;
  style?: {fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    textAlignHorizontal?: string;
    textAlignVertical?: string;
  }}const tokens  = await buildTokenSet(fileId)}}}getDesignSystem(id: string): DesignSystem | null {return this.designSystems.get(id) || null;
  }addComponent(designSystemId: string, component: DesignElement): boolean {const designSystem = this.designSystems.get(designSystemId)if (!designSystem) return false;
export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {const tokens = await buildTokenSet(fileId)return {const tokens = await buildTokenSet(fileId)return {export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {const tokens = await buildTokenSet(fileId)return {designSystem.components.push(component)designSystem.lastUpdated = new Date()return true;
  }addToken(designSystemId: string, key: string, value: any): boolean {const designSystem = this.designSystems.get(designSystemId)if (!designSystem) return false;designSystem.tokens[key] = value;
    designSystem.lastUpdated = new Date()return true;
  }addAsset(designSystemId: string, asset: DesignElement): boolean {const designSystem = this.designSystems.get(designSystemId)if (!designSystem) return false;designSystem.assets.push(asset)designSystem.lastUpdated = new Date()return true;
  }// Figma integration methods;
  importFromFigma(figmaData: FigmaNode[], designSystemId: string): DesignElement[] {const designSystem = this.designSystems.get(designSystemId)if (!designSystem) return [];const elements: DesignElement[]  = [];for (const node of figmaData) {this.figmaNodes.set(node.id, node)const element = this.convertFigmaNodeToDesignElement(node)elements.push(element)}designSystem.components.push(...elements)designSystem.lastUpdated = new Date()return elements;
  }private convertFigmaNodeToDesignElement(node: FigmaNode): DesignElement {const element: DesignElement = {id: node.id,type: this.mapFigmaTypeToElementType(node.type),name: node.name,figmaId: node.id,properties: this.extractProperties(node),children: node.children?.map(child => this.convertFigmaNodeToDesignElement(child))}return element;
  }private mapFigmaTypeToElementType(figmaType: string): DesignElement['type'] {const typeMap: Record<string, DesignElement['type']> = {'FRAME': 'layout','COMPONENT': 'component','INSTANCE': 'component','TEXT': 'component','RECTANGLE': 'component','ELLIPSE': 'component','VECTOR': 'asset','IMAGE': 'asset';
    }return typeMap[figmaType] || 'component';
  }private extractProperties(node: FigmaNode): Record<string, any> {const properties: Record<string, any>  = {}if (node.absoluteBoundingBox) {properties.bounds = node.absoluteBoundingBox;
    }if (node.fills && node.fills.length > 0) {properties.fills = node.fills;
    }if (node.effects && node.effects.length > 0) {properties.effects = node.effects;
    }if (node.characters) {properties.text = node.characters;
    }if (node.style) {properties.style = node.style;
    }return properties;
  }// Export methods;
  exportToCode(designSystemId: string, format: 'react' | 'vue' | 'html' | 'css' = 'react'): string {const designSystem = this.designSystems.get(designSystemId)if (!designSystem) return '';switch (format) {case 'react':;
        return this.exportToReact(designSystem)case 'vue':;
        return this.exportToVue(designSystem)case 'html':;
        return this.exportToHTML(designSystem)case 'css':;
        return this.exportToCSS(designSystem)default:;
  };
}

  const tokens = await buildTokenSet(fileId);
    };
  };
}

  getDesignSystem(id: string): DesignSystem | null {
    return this.designSystems.get(id) || null;
  }

  addComponent(designSystemId: string, component: DesignElement): boolean {
    const designSystem = this.designSystems.get(designSystemId);
    if (!designSystem) return false;
  const tokens = await buildTokenSet(fileId);
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
  }private exportToReact(designSystem: DesignSystem): string {let code = `// ${designSystem.name} Design System\n`;
    code += `// Generated on ${designSystem.lastUpdated.toISOString()}\n\n`;// Export tokens as CSS variables;
    code += ':root {\n';
    for (const [key, value] of Object.entries(designSystem.tokens)) {code += `  --${key}: ${value}\n`;
    }
    code += '}\n\n';// Export components;
    for (const component of designSystem.components) {code += this.generateReactComponent(component)}return code;
  }private generateReactComponent(element: DesignElement): string {const componentName = element.name.replace(/[^a-zA-Z0-9]/g, '')let code = `export const ${componentName} = ({ children, ...props }) => {\n`;
    code += `  return (\n`;
    code += `    <div {...props}>\n`;
    code += `      {children}\n`;
    code += `    </div>\n`;
    code += `  )\n`;
    code += `}\n\n`;
    return code;
  }private exportToVue(designSystem: DesignSystem): string {// Similar to React but for Vue;
    return `// Vue components for ${designSystem.name}`;
  }private exportToHTML(designSystem: DesignSystem): string {// Generate HTML structure;
    return `<!-- HTML for ${designSystem.name} -->`;
  }private exportToCSS(designSystem: DesignSystem): string {// Generate CSS styles;
    return `/* CSS for ${designSystem.name} */`;
  }// Utility methods;
  getAllDesignSystems(): DesignSystem[] {return Array.from(this.designSystems.values())}clearDesignSystem(id: string): boolean {return this.designSystems.delete(id)}clearAll(): void {this.designSystems.clear()this.figmaNodes.clear()}
}
export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {const tokens = await buildTokenSet(fileId)export async function buildTokenSet (file_id: string): Promise < TokenSet> {// Placeholder implementation;
  return {colors: {primary: "#007AFF",secondary: "#5856D6",success: "#34C759",warning: "#FF9500",error: "#FF3B30";
      error: "#FF3B30";
      error: "#FF3B30";
    },typography: {heading1: { fontSize: 32, fontWeight: "bold" },heading2: { fontSize: 24, fontWeight: "bold" },body: { fontSize: 16, fontWeight: "normal" }body: { fontSize: 16, fontWeight: "normal" }
      body: { fontSize: 16, fontWeight: "normal" }
    },spacing: {xs: 4,sm: 8,md: 16,lg: 24,ursor/automate-test-improve-and-merge-code-646c;
      xl: 32,xl: 32,xl: 32,xl: 32,xl: 32;
    }
  }
}
export async function buildUIKit (file_id: string, kind: UIKitKind): Promise < UIKit> {const tokens  = await buildTokenSet (file_id)return {background_color: tokens.colors.primary,padding: tokens.spacing.md;
        }
      }
}
  }}}
    }
  }}}
  }}export async function buildUIKit(fileId: string,kind: UIKitKind,): Promise<UIKit> {const tokens  = await buildTokenSet(fileId)return {components: {button: {primary: {backgroundColor: tokens.colors.primary,padding: tokens.spacing.md;
        }
      }
    },tokens;
  }}padding: tokens.spacing.md;
        }
      }
    },tokens;
  }}
          backgroundColor: tokens.colors.primary,padding: tokens.spacing.md;
        }
      }
    },tokens;
  }}backgroundColor: tokens.colors.primary;
          padding: tokens.spacing.md;
        }
      }
    })}flattenColors('', extendedColors)const typography = {fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}
  }return { colors, typography }export type UIKitKind = 'tailwind' | 'chakra' | 'react';export function buildUIKit(kind: UIKitKind): Record<string, string> {if (kind === 'tailwind') {return {'README.md':;
        '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.','components/Button.tsx':;
        'export function Button({ children }: { children: React.ReactNode }) { return <button className="px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90">{children}</button> }','components/Card.tsx':;
        'export function Card({ children }: { children: React.ReactNode }) { return <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">{children}</div> }';
    }}
  if (kind === 'chakra') {return {'README.md':;
        '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.','theme/index.ts':;
        "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}})",'components/Button.tsx':;
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }';
    }}
  return {'README.md':;
      '# Zion OS React UI Kit\n\nFramework-agnostic React components.','components/Button.tsx':;
      "export function Button({ children }: { children: React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }";
  }export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {const base = process.env.LOVABLE_CMS_URL;
  if (!base) return null;
  try {const res = await fetch(`${base.replace(/\/$/, '')}/api/design-tokens`)if (!res.ok) return null;
    return (await res.json()) as Partial<TokenSet>;
  } catch {return null;
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
      error: "#FF3B30"
    },
    typography: {
      heading1: { fontSize: 32, fontWeight: "bold" },
      heading2: { fontSize: 24, fontWeight: "bold" },
      body: { fontSize: 16, fontWeight: "normal" }
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xl: 32
}
  };

}
    }
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
          padding: tokens.spacing.md
        }
      }
    },
    tokens
  };
}
>>>>>>> origin/merge-pr-12271
