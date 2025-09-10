    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
};

  const brandGuidelines: MediaAsset = { path: '', filename: 'brand/brand-guidelines.md', type: 'text', content: buildBrandGuidelines() },
  const colors: MediaAsset = { path: '', filename: 'brand/colors-typography.json', type: 'text', content: JSON.stringify(buildColorsAndTypography(), null, 2) },

  return [...common, ...social, brandGuidelines, colors, ...legalByBundle[bundle]]
}

  }

export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }
  }
}

  const base: MediaAsset[] = [
    {
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
  params: {    date: string;
    raiseAmount?: string;
    tokenName?: string;
    anchors?: string[];
  }
): string {  return [
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

function titleCase(s: string) {

function titleCase(s: string) {

}
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces a seed round of ${params.raise_amount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\n_quotes:\n- CEO: "We are thrilled..."\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  // Check condition
if ( {) {
  $2
}
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
