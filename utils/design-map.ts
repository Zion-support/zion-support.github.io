


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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


  const tokens = await buildTokenSet(fileId);

  return {


    id,
    type,
    name,
    properties,
    children: []

}





>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

