export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';

export interface MediaKitItem {
  name: string;
  url: string;
  type: 'image' | 'document' | 'video';
  description?: string;
}

export function getMediaKitItems(bundle: MediaBundle): MediaKitItem[] {
  const common: MediaKitItem[] = [
    { name: 'Logo', url: '/media/logo.png', type: 'image' },
    { name: 'Brand Guidelines', url: '/media/brand-guidelines.pdf', type: 'document' }
  ];
  
  const social: MediaKitItem[] = [
    { name: 'Social Media Kit', url: '/media/social-kit.zip', type: 'document' }
  ];
  
  const brandGuidelines: MediaKitItem = {
    name: 'Brand Guidelines',
    url: '/media/brand-guidelines.pdf',
    type: 'document'
  };
  
  const colors: MediaKitItem = {
    name: 'Color Palette',
    url: '/media/colors.png',
    type: 'image'
  };
  
  const legalByBundle: Record<MediaBundle, MediaKitItem[]> = {
    general: [],
    web3: [
      { name: 'Token Economics', url: '/media/token-economics.pdf', type: 'document' }
    ],
    institutional: [
      { name: 'Compliance Documents', url: '/media/compliance.pdf', type: 'document' }
    ]
  };
  
  return [...common, ...social, brandGuidelines, colors, ...legalByBundle[bundle]];
}

export function buildColorsAndTypography() {
  return {
    colors: {
      primary: '#0A84FF',
      secondary: '#0B1220',
      accent: '#C3F53C',
      neutral: '#9CA3AF'
    },
    typography: {
      heading: {
        family: 'Inter',
        weight: 700
      },
      body: {
        family: 'Inter',
        weight: 400
      }
    }
  };
}

export function getPressReleaseItems(kind: MediaBundle): MediaKitItem[] {
  const base: MediaKitItem[] = [
    { name: 'Press Release Template', url: '/media/press-template.docx', type: 'document' }
  ];
  
  const web3Extras: MediaKitItem[] = [
    { name: 'Token Metrics', url: '/media/token-metrics.png', type: 'image' }
  ];
  
  if (kind === 'web3') return [...base, ...web3Extras];
  return base;
}