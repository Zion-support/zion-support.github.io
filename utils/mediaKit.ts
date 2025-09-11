
export function createMediaAsset(asset: Omit<MediaAsset, 'id' | 'createdAt'>): MediaAsset {
  return {
    ok: true
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
  }
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
=======  };



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
=======

  };


=======  }

=======
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {

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


  type: PressReleaseType,
  params: {;

    companyName: string;
  type: PressReleaseType
  params: {
  type: PressReleaseType,
  params: {;

    companyName: string;  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
