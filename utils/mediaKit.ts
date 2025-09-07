

    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
  };
export type MediaBundle = $2;
export type PressReleaseType = $2;
export type MediaAsset = {
  path: string, // public-relative path for fetch
  filename: string, // name inside zip
  type: 'binary' | 'text',
  content?: string, // used when type = $2;
export function getDefaultAssets(bundle: MediaBundle): MediaAsset[] {
  const common: MediaAsset[] = [
    { path: '/brand/logos/zion-logo.svg', filename: 'logos/zion-logo.svg', type: 'binary' }],

  const social: MediaAsset[] = [
    { path: '', filename: 'social/linkedin-banner.txt', type: 'text', content: 'LinkedIn banner: 1584x396. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.' },
    { path: '', filename: 'social/twitter-banner.txt', type: 'text', content: 'Twitter/X banner: 1500x500. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.' }],

  const generalLegal = buildLegalDocs($2);
  const web3Legal = buildLegalDocs($2);
  const institutionalLegal = buildLegalDocs($2);
  const legalByBundle: Record<MediaBundle, MediaAsset[]> = {
    general: generalLegal,
    web3: web3Legal,
    institutional: institutionalLegal},

  const brandGuidelines: MediaAsset = { path: '', filename: 'brand/brand-guidelines.md', type: 'text', content: buildBrandGuidelines() },
  const colors: MediaAsset = { path: '', filename: 'brand/colors-typography.json', type: 'text', content: JSON.stringify(buildColorsAndTypography(), null, 2) },

  return [...common, ...social, brandGuidelines, colors, ...legalByBundle[bundle]]
}


  };
origin/cursor/expand-services-advertise-and-build-project-c28b

export function buildBrandGuidelines(): string {
  return `# Zion Brand Guidelines\n\n## Logo\n- Primary: Zion logomark (svg)\n- Clear space: 24px around\n\n## Colors\n- Primary: Zion Blue #0A84FF\n- Secondary: Deep Space #0B1220\n- Accent: Neon Lime #C3F53C\n\n## Typography\n- Headings: Inter, 700\n- Body: Inter, 400\n\n## Voice\n- Confident, precise, forward-looking\n`
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
      heading: { family: 'Inter', weight: 700},
      body: { family: 'Inter', weight: 400}
    }
  }
}


ursor/fix-website-loading-errors-and-merge-6662

export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    { path: '', filename: 'legal/terms-of-use.md', type: 'text', content: `# Terms of Use\n\nBy using Zion products, you agree to these terms. Replace with counsel-approved language.` },
    { path: '', filename: 'legal/privacy-policy.md', type: 'text', content: `# Privacy Policy\n\nWe respect your privacy. Replace with counsel-approved language.` },
    { path: '', filename: 'legal/jurisdictional-disclosures.md', type: 'text', content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.` }],

origin/cursor/expand-services-advertise-and-build-project-c28b





      path: '',

      filename: 'legal / terms - of - use.md',

      type: 'text',

      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    },;
  ];
  const web3Extras: MediaAsset[] = [
    { path: '', filename: 'legal/token-sale-notice.md', type: 'text', content: `# Token Sale Notice (if applicable)\n\nThis document outlines token sale terms. Not an offer to sell securities.` },
    { path: '', filename: 'legal/dao-disclaimer.md', type: 'text', content: `# DAO Disclaimer\n\nThis is not investment advice. Participation involves risks.` }],


      filename: 'legal / jurisdictional - disclosures.md',

      type: 'text',
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`,
    },
origin/cursor/automate-test-improve-and-merge-code-382a
      path: ''

      path: ''
  ];

;
    ok: true,text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
  }}
  }}}}export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {const base: MediaAsset[] = [;
    {export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {const base: MediaAsset[] = [;
    {path: '';
      filename: 'legal/jurisdictional-disclosures.md';
      type: 'text';
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`;
    }ursor/fix-website-loading-errors-and-merge-6662;
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {const base: MediaAsset[] = [;
    {path: '',filename: 'legal / terms - of - use.md',type: 'text',content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`;
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`;
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`;
    }];
  const web3Extras: MediaAsset[] = [;
      type: 'text',content: `# Terms of Use\n\n_by using Zion products, you agree to these terms. Replace with counsel - approved language.`;
      content: `# Terms of Use\n\n_by using Zion products, you agree to these terms. Replace with counsel - approved language.`;
      content: `# Terms of Use\n\n_by using Zion products, you agree to these terms. Replace with counsel - approved language.`;
    },{path: '',type: 'text',content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`;
    },{path: '',content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`;
    },{path: '',filename: 'legal / jurisdictional - disclosures.md',type: 'text',content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`;
    }content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`;
    },{path: '';
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`;
    }];;
  const web3Extras: MediaAsset[]  = [;{path: '';
      path: '';
      path: '';
  ];export function buildPressRelease() {$2;
  if (kind === 'web3') return [...base, ...web3Extras],
  return base
}

  type: PressReleaseType
;
  // Check condition
if (return [...base, ...web3Extras]) {
  $2
}
  return base;
;
export function buildPressRelease (
  type: PressReleaseType,
  params: {
  type: PressReleaseType,
  params: {;
  type: PressReleaseType
;
  // Check condition
if (return [...base, ...web3Extras]) {
  $2
}
  return base;
;
export function buildPressRelease (
  type: PressReleaseType,
  params: {
origin/cursor/expand-services-advertise-and-build-project-c28b
    company_name: string;
export function buildPressRelease(

  type: PressReleaseType
;
  // Check condition
if (return [...base, ...web3Extras]) {
  $2
}
  return base;
;
export function buildPressRelease (
  type: PressReleaseType,
  params: {
  type: PressReleaseType,
  params: {;
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  type: PressReleaseType
;
  // Check condition
if (return [...base, ...web3Extras]) {
  $2
}
  return base;
;
export function buildPressRelease (
  type: PressReleaseType,
  params: {

    companyName: string;
    date: string;
    raiseAmount?: string;
    tokenName?: string;
    anchors?: string[];
  }
): string {const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate  = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;if (type === 'seed-round') {return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces a seed round of ${params && params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }
  if (type === 'token-sale') {return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces the ${params && params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;export function buildTimeline() {const addDays = (d: Date, days: number) =>;
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days)const fmt  = (d: Date) => d.toISOString().substring(0, 10)return [;
): string {

  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;


origin/cursor/expand-services-advertise-and-build-project-c28b



export function buildPressRelease(type: PressReleaseType, params: {
  companyName: string,
  date: string,
  raiseAmount?: string,
  tokenName?: string,
  anchors?: string[]
}): string {
  const header = $2;
  const boilerplate = $2;
  if (type === 'seed-round') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces a seed round of ${params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params.companyName}:\n${boilerplate}`
  }
  if (type === 'token-sale') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces the ${params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params.companyName}:\n${boilerplate}`
  }

  return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;





export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>;
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
  const fmt = (d: Date) => d.toISOString().substring(0, 10);
origin/cursor/expand-services-advertise-and-build-project-c28b


  return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params.companyName}:\n${boilerplate}`
}

export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + days),
  const fmt = (d: Date) => d.toISOString().substring($2);
  return [
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) },
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt(addDays(startDate, 7)) },
    { label: 'Week 3: Token Airdrop Snapshot', date: fmt(addDays(startDate, 14)) },
    { label: 'Week 4: Zion Global Summit', date: fmt(addDays(startDate, 21)) }]
}

function titleCase(s: string) {
origin/cursor/expand-services-advertise-and-build-project-c28b


function titleCase(s: string) {

  return s && s.replace(
    /\w\S*/g,
    w => w && w.charAt(0).toUpperCase() + w && w.slice(1).toLowerCase()


origin/cursor/expand-services-advertise-and-build-project-c28b


function titleCase(s: string) {

  );}




  );}










}
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces a seed round of ${params.raise_amount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\n_quotes:\n- CEO: "We are thrilled..."\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  // Check condition;
if ( {) {$2;
}
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces the ${params.token_name ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\n_distribution:\n- Community: 40%\n- Treasury: 20%\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\n_about ${params.company_name}:\n${boilerplate}`;export /**;
 * build_timeline - Function description;
 */;
function build_timeline() {const add_days = (d: Date, days: number) =>: any;
    new Date (d.getFullYear (), d.get_month (), d.get_date () + days)const fmt = (d: Date) =>: any d.toISOString ().substring (0, 10)return [;
    { label: 'Week 1: Closed Beta Invite', date: fmt (add_days (start_date, 0)) },{ label: 'Week 2: ZionGPT Core Reveal', date: fmt (add_days (start_date, 7)) },{label: 'Week 3: Token Airdrop Snapshot',date: fmt (add_days (start_date, 14))},{ label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) }
      date: fmt (add_days (start_date, 14))},{ label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) }
      date: fmt (add_days (start_date, 14))},{ label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) }
  ];/**;
 * title_case - Function description;
 */;
function title_case() {return s.replace (/\w\S*/g,w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ())})
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
      date: fmt (add_days (start_date, 14))
    },
    { label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) }
  ];
;
/**
 * title_case - Function description
 */
function title_case() {
  return s.replace (
    /\w\S*/g,
    w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ());}
  );
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  );
origin/cursor/automate-test-improve-and-merge-code-2533



  );

  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
}
