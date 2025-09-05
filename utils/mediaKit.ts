export type MediaBundle = 'general' | 'web3' | 'institutional';

export type PressReleaseType = 'seed-round' | 'launch' | 'token-sale';

export type MediaAsset = {_path: string; // public-relative path for fetch
  filename: string; // name inside zip
  type: 'binary' | 'text';
  content?: string; // used when type === 'text'};

export function getDefaultAssets(_bundle: MediaBundle): MediaAsset[] {_const common: MediaAsset[] = [
    { path: '/brand/logos/zion-logo.svg', _filename: 'logos/zion-logo.svg', _type: 'binary'}];

  const social: MediaAsset[] = [
    {_path: '', _filename: 'social/linkedin-banner.txt', _type: 'text', _content: 'LinkedIn banner: 1584x396. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.'},
    {_path: '', _filename: 'social/twitter-banner.txt', _type: 'text', _content: 'Twitter/X banner: 1500x500. Use brand gradient background. Title: Zion. Tagline: Intelligence for Web3.'}];

  const _generalLegal = buildLegalDocs('general');
  const _web3Legal = buildLegalDocs('web3');
  const _institutionalLegal = buildLegalDocs('institutional');

  const legalByBundle: Record<MediaBundle, MediaAsset[]> = {_general: generalLegal, _web3: web3Legal, _institutional: institutionalLegal};

  const brandGuidelines: MediaAsset = {_path: '', _filename: 'brand/brand-guidelines.md', _type: 'text', _content: buildBrandGuidelines()};
  const colors: MediaAsset = {_path: '', _filename: 'brand/colors-typography.json', _type: 'text', _content: JSON.stringify(buildColorsAndTypography(), _null, _2)};

  return [...common, ...social, brandGuidelines, colors, ...legalByBundle[bundle]];
}

export function buildBrandGuidelines(): string {_return `# Zion Brand Guidelines\n\n## Logo\n- Primary: Zion logomark (svg)\n- Clear space: 24px around\n\n## Colors\n- Primary: Zion Blue #0A84FF\n- Secondary: Deep Space #0B1220\n- Accent: Neon Lime #C3F53C\n\n## Typography\n- Headings: Inter, _700\n- Body: Inter, _400\n\n## Voice\n- Confident, _precise, _forward-looking\n`;}

export function buildColorsAndTypography() {_return {
    colors: {
      primary: '#0A84FF', _secondary: '#0B1220', _accent: '#C3F53C', _neutral: '#9CA3AF'},
    typography: {_heading: { family: 'Inter', _weight: 700},
      body: {_family: 'Inter', _weight: 400}
    }
  };
}

export function buildLegalDocs(_kind: MediaBundle): MediaAsset[] {_const base: MediaAsset[] = [
    { path: '', _filename: 'legal/terms-of-use.md', _type: 'text', _content: `# Terms of Use\n\nBy using Zion products, _you agree to these terms. Replace with counsel-approved language.`},
    {_path: '', _filename: 'legal/privacy-policy.md', _type: 'text', _content: `# Privacy Policy\n\nWe respect your privacy. Replace with counsel-approved language.`},
    {_path: '', _filename: 'legal/jurisdictional-disclosures.md', _type: 'text', _content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`}];

  const web3Extras: MediaAsset[] = [
    {_path: '', _filename: 'legal/token-sale-notice.md', _type: 'text', _content: `# Token Sale Notice (if applicable)\n\nThis document outlines token sale terms. Not an offer to sell securities.`},
    {_path: '', _filename: 'legal/dao-disclaimer.md', _type: 'text', _content: `# DAO Disclaimer\n\nThis is not investment advice. Participation involves risks.`}];

  if (kind === 'web3') return [...base, ...web3Extras];
  return base;
}

export function buildPressRelease(_type: PressReleaseType, _params: {_companyName: string;
  date: string;
  raiseAmount?: string;
  tokenName?: string;
  anchors?: string[];}): string {_const _header = `${params.companyName} ${_titleCase(type.replace('-', _' '))}`;
  const _boilerplate = `${_params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion.app`;

  if (type === 'seed-round') {_return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${_header}\n\n${_params.companyName} announces a seed round of ${_params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${_params.companyName}:\n${_boilerplate}`;
  }
  if (type === 'token-sale') {_return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${_header}\n\n${_params.companyName} announces the ${_params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${_params.companyName}:\n${_boilerplate}`;
  }
  return `FOR IMMEDIATE RELEASE\nDate: ${_params.date}\n\n${_header}\n\n${_params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${_params.companyName}:\n${_boilerplate}`;
}

export function buildTimeline(_startDate: Date) {_const _addDays = (_d: Date, _days: number) => new Date(d.getFullYear(), _d.getMonth(), _d.getDate() + days);
  const _fmt = (_d: Date) => d.toISOString().substring(0, _10);
  return [
    { label: 'Week 1: Closed Beta Invite', _date: fmt(addDays(startDate, _0))},
    {_label: 'Week 2: ZionGPT Core Reveal', _date: fmt(addDays(startDate, _7))},
    {_label: 'Week 3: Token Airdrop Snapshot', _date: fmt(addDays(startDate, _14))},
    {_label: 'Week 4: Zion Global Summit', _date: fmt(addDays(startDate, _21))}];
}

function titleCase(_s: string) {_return s.replace(_/\w\S*/g, _(w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());}