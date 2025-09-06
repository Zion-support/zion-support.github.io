<<<<<<< HEAD
export type UIKitKind = 'ios' | 'android' | 'web';
<<<<<<< HEAD
<<<<<<< HEAD
export interface TokenSet {
=======

export interface TokenSet {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface TokenSet {

export interface TokenSet {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  colors: Record<string, string>;
  typography: Record<string, any>;
  spacing: Record<string, number>;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface UIKit {
=======

export interface UIKit {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  components: Record<string, any>;
=======
export interface UIKit {

export interface UIKit {;
  components: Record<string, any>;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  tokens: TokenSet;
}
export async function buildTokenSet(fileId: string): Promise<TokenSet> {
  // Placeholder implementation
  return {
<<<<<<< HEAD
    colors: {
      primary: '#007AFF'
      secondary: '#5856D6'
      success: '#34C759'
      warning: '#FF9500'
      error: '#FF3B30'
    }
    typography: {
      heading1: { fontSize: 32, fontWeight: 'bold' }
      heading2: { fontSize: 24, fontWeight: 'bold' }
      body: { fontSize: 16, fontWeight: 'normal' }
    }
    spacing: {
      xs: 4
      sm: 8
      md: 16
      lg: 24
      xl: 32
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    }
    
    return this.props.children;
  }
}
export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {
=======
<<<<<<< HEAD
=======
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    };
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
    return null;


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


export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const tokens = await buildTokenSet(fileId);
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    };
  };
}
<<<<<<< HEAD

export async function buildUIKit(fileId: string, kind: UIKitKind): Promise<UIKit> {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const tokens = await buildTokenSet(fileId);
=======
export async function buildUIKit (file_id: string, kind: UIKitKind): Promise < UIKit> {
  const tokens = await buildTokenSet (file_id);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return {
<<<<<<< HEAD
    components: {
      button: {
        primary: {
          backgroundColor: tokens.colors.primary
          padding: tokens.spacing.md
        }
      }
    }
    tokens
<<<<<<< HEAD
  }
=======

    id,
    type,
    name,
    properties,
    children: []
=======



>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

  };
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
  };
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
          background_color: tokens.colors.primary,
          padding: tokens.spacing.md;
        }
      }
<<<<<<< HEAD
    }
    tokens
  }

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
  };

}
=======
    },
    tokens;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
