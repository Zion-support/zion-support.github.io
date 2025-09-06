<<<<<<< HEAD
export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';
<<<<<<< HEAD
<<<<<<< HEAD
export interface MediaGenerationResponse {
=======
export interface MediaGenerationResponse {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  ok: boolean;
  text?: string;
  error?: string
}
export async function generateMediaContent(request: MediaGenerationRequest): Promise<MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service
  return {
<<<<<<< HEAD
    ok: true
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
  }
=======
<<<<<<< HEAD

export type MediaAsset = {
  path: string; // public-relative path for fetch
  filename: string; // name inside zip
  type: 'binary' | 'text';
  content?: string; // used when type === 'text'
};
}

export function getDefaultAssets(bundle: MediaBundle): MediaAsset[] {
  const common: MediaAsset[] = [
    {
      path: '/brand/logos/zion-logo.svg',
      filename: 'logos/zion-logo.svg',
      type: 'binary',
    },
  ];

  const social: MediaAsset[] = [
    {
      path: '',
      filename: 'social/linkedin-banner.txt',
      type: 'text',
      content:
        'LinkedIn banner: 1584x396. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.',
    },
    {
      path: '',
      filename: 'social/twitter-banner.txt',
      type: 'text',
      content:
        'Twitter/X banner: 1500x500. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.',
    },
  ];

  const generalLegal = buildLegalDocs('general');
  const web3Legal = buildLegalDocs('web3');
  const institutionalLegal = buildLegalDocs('institutional');

  const legalByBundle: Record<MediaBundle, MediaAsset[]> = {
    general: generalLegal,
    web3: web3Legal,
    institutional: institutionalLegal,
  };

  const brandGuidelines: MediaAsset = {
    path: '',
    filename: 'brand/brand-guidelines.md',
    type: 'text',
    content: buildBrandGuidelines(),
  };
  const colors: MediaAsset = {
    path: '',
    filename: 'brand/colors-typography.json',
    type: 'text',
    content: JSON.stringify(buildColorsAndTypography(), null, 2),
  };

  return [
    ...common,
    ...social,
    brandGuidelines,
    colors,
    ...legalByBundle[bundle],
  ];
}

export function buildBrandGuidelines(): string {
  return `# Zion Brand Guidelines\n\n## Logo\n- Primary: Zion logomark (svg)\n- Clear space: 24px around\n\n## Colors\n- Primary: Zion Blue #0A84FF\n- Secondary: Deep Space #0B1220\n- Accent: Neon Lime #C3F53C\n\n## Typography\n- Headings: Inter, 700\n- Body: Inter, 400\n\n## Voice\n- Confident, precise, forward-looking\n`;
}

export function buildColorsAndTypography() {
  return {
    colors: {
      primary: '#0A84FF',
      secondary: '#0B1220',
      accent: '#C3F53C',
      neutral: '#9CA3AF',
    },
    typography: {
      heading: { family: 'Inter', weight: 700 },
      body: { family: 'Inter', weight: 400 },
    },
  };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
      path: ''
      filename: 'legal/terms-of-use.md'
      type: 'text'
      content: `# Terms of Use\n\nBy using Zion products, you agree to these terms. Replace with counsel-approved language.`
    }
    {
      path: ''
      filename: 'legal/privacy-policy.md'
      type: 'text'
      content: `# Privacy Policy\n\nWe respect your privacy. Replace with counsel-approved language.`
    }
    {
<<<<<<< HEAD
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }
=======
      path: '',
      filename: 'legal/jurisdictional-disclosures.md',
      type: 'text',
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  ];
  const web3Extras: MediaAsset[] = [
    {
      path: ''
      filename: 'legal/token-sale-notice.md'
      type: 'text'
      content: `# Token Sale Notice (if applicable)\n\nThis document outlines token sale terms. Not an offer to sell securities.`
    }
    {
      path: ''
      filename: 'legal/dao-disclaimer.md'
      type: 'text'
      content: `# DAO Disclaimer\n\nThis is not investment advice. Participation involves risks.`
    }
  ];
  if (kind === 'web3') return [...base, ...web3Extras];
  return base;
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function buildPressRelease(
<<<<<<< HEAD
  type: PressReleaseType
  params: {
=======
  type: PressReleaseType,
  params: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    companyName: string;
    date: string;
    raiseAmount?: string;
    tokenName?: string;
    anchors?: string[];
  }
): string {
  const header = `${params.companyName} ${titleCase(type.replace('-', ' '))}`;
  const boilerplate = `${params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion.app`;
  if (type === 'seed-round') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces a seed round of ${params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params.companyName}:\n${boilerplate}`;
  }
  if (type === 'token-sale') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces the ${params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params.companyName}:\n${boilerplate}`;
  }
  return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params.companyName}:\n${boilerplate}`;
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>;
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
  const fmt = (d: Date) => d.toISOString().substring(0, 10);
  return [
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) }
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt(addDays(startDate, 7)) }
    {
      label: 'Week 3: Token Airdrop Snapshot'
      date: fmt(addDays(startDate, 14))
    }
    { label: 'Week 4: Zion Global Summit', date: fmt(addDays(startDate, 21)) }
  ];
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
<<<<<<< HEAD
<<<<<<< HEAD
  );}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );}
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
