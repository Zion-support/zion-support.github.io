
<<<<<<< HEAD

=======
export type MediaBundle = 'general' | 'web3' | 'institutional';
export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';
export interface MediaGenerationResponse {;
  ok: boolean;
  text?: string;
  error?: string
}
export async function generateMediaContent(request: MediaGenerationRequest): Promise<MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service
  return {
    ok: true
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
  }
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  };
}


<<<<<<< HEAD
  }

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
=======
export async function generateMediaContent (request: MediaGenerationRequest): Promise < MediaGenerationResponse> {
  // Mock implementation - in production, this would call OpenAI or other AI service;
  return {
    ok: true,
    text: `Mock ${request.type} for ${request.company_name} on ${request.date}`;
  }
;
export function buildLegalDocs (kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
<<<<<<< HEAD

=======


      path: '',

      filename: 'legal / terms - of - use.md',

      type: 'text',

      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;

  ];
  const web3Extras: MediaAsset[] = [

    {
      path: '',

      filename: 'legal / privacy - policy.md',

      type: 'text',
      content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`,
    },
    {
      path: '',

      filename: 'legal / jurisdictional - disclosures.md',

      type: 'text',
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`,
    },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ];

;
  const web3Extras: MediaAsset[] = [;

    {

      path: '',

  ];


export function buildPressRelease(
  type: PressReleaseType
  params: {
    company_name: string;
=======
export function buildPressRelease(

  type: PressReleaseType,
  params: {;

    companyName: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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


      path: '',
      filename: 'legal/jurisdictional-disclosures.md',
      type: 'text',
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;
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
export function buildPressRelease(
export function buildPressRelease(

  type: PressReleaseType,
  params: {;

    companyName: string;
  type: PressReleaseType
  params: {
  type: PressReleaseType,
  params: {;
    companyName: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    date: string;
    raise_amount?: string;
    token_name?: string;
    anchors?: string[];
  }
): string {
<<<<<<< HEAD

  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;


=======
  const header = `${params.companyName} ${titleCase(type.replace('-', ' '))}`;
  const boilerplate = `${params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion.app`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (type === 'seed-round') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces a seed round of ${params && params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }
  if (type === 'token-sale') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces the ${params && params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }
<<<<<<< HEAD

  return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;


=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params.companyName}:\n${boilerplate}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>
    new Date(d && d.getFullYear(), d && d.getMonth(), d && d.getDate() + days);
  const fmt = (d: Date) => d && d.toISOString().substring(0, 10);
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
=======
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


function titleCase(s: string) {

  return s && s.replace(
    /\w\S*/g,
    w => w && w.charAt(0).toUpperCase() + w && w.slice(1).toLowerCase()

  );}




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
// Media Kit utilities
export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document' | 'archive';
  name: string;
  filename: string;
  url: string;
  thumbnailUrl?: string;
  size: number; // in bytes
  mimeType: string;
  duration?: number; // for video/audio in seconds
  dimensions?: {
    width: number;
    height: number;
  };
  metadata?: Record<string, any>;
  uploadedAt: string;
  uploadedBy: string;
  tags: string[];
  isPublic: boolean;
  category: 'logo' | 'banner' | 'icon' | 'screenshot' | 'demo' | 'documentation' | 'other';
}
=======
  );}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface MediaCollection {
  id: string;
  name: string;
  description?: string;
  assets: string[]; // asset IDs
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  isPublic: boolean;
  tags: string[];
}

export interface MediaUploadOptions {
  maxSize?: number; // in bytes
  allowedTypes?: string[];
  generateThumbnail?: boolean;
  compress?: boolean;
  quality?: number; // 0-100
  watermark?: {
    text?: string;
    image?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
    opacity?: number;
  };
}
<<<<<<< HEAD
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces the ${params.token_name ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\n_distribution:\n- Community: 40%\n- Treasury: 20%\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\n_about ${params.company_name}:\n${boilerplate}`;
;
export /**
 * build_timeline - Function description
 */
function build_timeline() {
  const add_days = (d: Date, days: number) =>: any;
    new Date (d.getFullYear (), d.get_month (), d.get_date () + days);
  const fmt = (d: Date) =>: any d.toISOString ().substring (0, 10);
  return [;
    { label: 'Week 1: Closed Beta Invite', date: fmt (add_days (start_date, 0)) },
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt (add_days (start_date, 7)) },
    {
      label: 'Week 3: Token Airdrop Snapshot',
      date: fmt (add_days (start_date, 14)),
    },
    { label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) },
  ];
;
/**
 * title_case - Function description
 */
function title_case() {
  return s.replace (
    /\w\S*/g,
    w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ());}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
