export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';

export interface MediaAsset {
  path: string;
  filename: string;
  type: 'text' | 'image' | 'video';
  content: string;
}

export interface MediaGenerationRequest {
  type: string;
  companyName: string;
  date: string;
}

export interface MediaGenerationResponse {
  ok: boolean;
  text?: string;
<<<<<<< HEAD
  error?: string;
=======
  error?: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
export async function generateMediaContent(request: MediaGenerationRequest): Promise<MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service
  return {
    ok: true
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
<<<<<<< HEAD
  };
}

=======
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }
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
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function buildPressRelease(
  type: PressReleaseType
  params: {
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
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>
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
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
<<<<<<< HEAD
  );
}
=======
  );}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
