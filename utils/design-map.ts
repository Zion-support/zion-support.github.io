// Mock design map utility
export function getDesignMap() {
  return {
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
  const tailwindConfig = require('../tailwind.config.js');
  const extendedColors = tailwindConfig?.theme?.extend?.colors || {};
  const colors: Record<string, string> = {};

  function flattenColors(prefix: string, obj: any) {
    Object.entries(obj || {}).forEach(([key, value]) => {
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
      'README.md':
        '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.',
      'components/Button.tsx':
        'export function Button({ children }: { children: React.ReactNode }) { return <button className="px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90">{children}</button> }',
      'components/Card.tsx':
        'export function Card({ children }: { children: React.ReactNode }) { return <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">{children}</div> }',
    };
  }
  if (kind === 'chakra') {
    return {
      'README.md':
        '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.',
      'theme/index.ts':
        "import { extendTheme } from '@chakra-ui/react'; export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}});",
      'components/Button.tsx':
        'import { Button as CButton } from \'@chakra-ui/react\'; export function Button(props: any){ return <CButton colorScheme="cyan" {...props} /> }',
    };
  }
  return {
    'README.md':
      '# Zion OS React UI Kit\n\nFramework-agnostic React components.',
    'components/Button.tsx':
      "export function Button({ children }: { children: React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }",
  };

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
