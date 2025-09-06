<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };

<<<<<<< HEAD
<<<<<<< HEAD

  }

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      path: '',
<<<<<<< HEAD

      filename: 'legal / terms - of - use.md',

      type: 'text',

      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  type: PressReleaseType
  params: {
<<<<<<< HEAD
    company_name: string;
=======
export function buildPressRelease(

  type: PressReleaseType,
  params: {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    companyName: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
  type: PressReleaseType
  params: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  type: PressReleaseType,
  params: {;
    companyName: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    date: string;
    raiseAmount?: string;
    tokenName?: string;
    anchors?: string[];
  }
): string {
<<<<<<< HEAD

  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;


=======
  const header = `${params.companyName} ${titleCase(type.replace('-', ' '))}`;
  const boilerplate = `${params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion.app`;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (type === 'seed-round') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces a seed round of ${params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params.companyName}:\n${boilerplate}`;
  }
  if (type === 'token-sale') {
    return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} announces the ${params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params.companyName}:\n${boilerplate}`;
  }
<<<<<<< HEAD

  return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;


=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return `FOR IMMEDIATE RELEASE\nDate: ${params.date}\n\n${header}\n\n${params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params.companyName}:\n${boilerplate}`;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
<<<<<<< HEAD
  );}

}
}
}
}

=======


function titleCase(s: string) {

=======
  return s && s.replace(
    /\w\S*/g,
    w => w && w.charAt(0).toUpperCase() + w && w.slice(1).toLowerCase()

  );}


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  );}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
