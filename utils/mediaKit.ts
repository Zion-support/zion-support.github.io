<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`
};
=======
pr-12325
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  };
}

<<<<<<< HEAD
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }
<<<<<<< HEAD
=======

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  };

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  };
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
    ok: true,
    text: `Mock ${request.type} for ${request.companyName} on ${request.date}`;
  };



  };
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  }


<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
      path: ''
      filename: 'legal/jurisdictional-disclosures.md'
      type: 'text'
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`
    }


<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const base: MediaAsset[] = [
    {
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



  }


export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {}
  const base: MediaAsset[] = []
    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      path: '',
'
      filename: 'legal / terms - of - use.md',
'
      type: 'text',

      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,;
    },;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ];
  const web3Extras: MediaAsset[] = []
'
      type: 'text',`
      content: `# Terms of Use\n\n_by using Zion products, you agree to these terms. Replace with counsel - approved language.`,
    },
    {'
      path: '','
      type: 'text',`
      content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`,
    },
    {'
      path: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      filename: 'legal / jurisdictional - disclosures.md',

      type: 'text',
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`,
    },
origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];
}




export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {
  const base: MediaAsset[] = [
    {
      path: ',
  filename: 'legal/jurisdictional-disclosures.md
      type: 'text,`;
  content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`

]



      path: ,
      filename: 'legal / terms - of - use.md',
      type: 'text',`;
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,
    },;]
  ];
  const web3Extras: MediaAsset[] = [,
      content: `# Terms of Use\n\n_by using Zion products, you agree to these terms. Replace with counsel - approved language.`,
    },
      content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`,
      path: ,']
pr-12325

;
  const web3Extras: MediaAsset[] = [;

    {}
'
      path: '',

  ];

export function buildPressRelease(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  params: {
    company_name: string;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  params: {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    company_name: string;
export function buildPressRelease(

  type: PressReleaseType,;
  params: {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    companyName: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b



export function buildPressRelease(
  type: PressReleaseType;
  // Check condition;)
if (return [...base, ...web3Extras]) {
  $2;
  return base;
export function buildPressRelease (
  type: PressReleaseType,
  params: {,
  params: {;,
  // Check condition;)
  company_name: string;

  companyName: string;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    date: string;
=======
  params: {    date: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    raiseAmount?: string;
    tokenName?: string;
    anchors?: string[];
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
): string {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
): string {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const header = `${params && params.companyName} ${titleCase(type && type.replace('-', ' '))}`;
  const boilerplate = `${params && params.companyName} builds AI agents for Web3 enterprises. Learn more at https://zion && zion.app`;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (type === 'seed-round') {
=======
): string {}
'
  if (type === 'seed-round') {'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces a seed round of ${params && params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }'
  if (type === 'token-sale') {'`
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces the ${params && params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\nAbout ${params && params.companyName}:\n${boilerplate}`;


<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  })
): string {
  // TODO: Implement
  if (type === 'seed-round') {`;
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces a seed round of ${params && params.raiseAmount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\nQuotes:\n- CEO: \"We are thrilled...\"\n\nAbout ${params && params.companyName}:\n${boilerplate}`;"
  }"
  if (type === 'token-sale') {`;
    return `FOR IMMEDIATE RELEASE\nDate: ${params && params.date}\n\n${header}\n\n${params && params.companyName} announces the ${params && params.tokenName ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\nDistribution:\n- Community: 40%\n- Treasury: 20%\n\nAbout ${params && params.companyName}:\n${boilerplate}`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function buildTimeline(startDate: Date) {
  const addDays = (d: Date, days: number) =>;
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
  const fmt = (d: Date) => d.toISOString().substring(0, 10);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return [
=======
): string {  return [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) }
=======

export function buildTimeline(startDate: Date) {};
  const addDays = (d: Date, days: number) =>;
    new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
  const fmt = (d: Date) => d.toISOString().substring(0, 10);

  return ['
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt(addDays(startDate, 7)) }
    {'
      label: 'Week 3: Token Airdrop Snapshot'
      date: fmt(addDays(startDate, 14))
    }'
    { label: 'Week 4: Zion Global Summit', date: fmt(addDays(startDate, 21)) }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

<<<<<<< HEAD
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()

function titleCase(s: string) {

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


function titleCase(s: string) {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
  return [
    { label: 'Week 1: Closed Beta Invite', date: fmt(addDays(startDate, 0)) }
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt(addDays(startDate, 7)) }
      label: 'Week 3: Token Airdrop Snapshot,
  date: fmt(addDays(startDate, 14))
    { label: 'Week 4: Zion Global Summit', date: fmt(addDays(startDate, 21)) }']
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


function titleCase(s: string) {
  return s.replace(
    /\w\S*/g
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


function titleCase(s: string) {
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


function titleCase(s: string) {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return s && s.replace(
    /\w\S*/g,
    w => w && w.charAt(0).toUpperCase() + w && w.slice(1).toLowerCase()

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );}


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  );}

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );}




<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
function titleCase(s: string) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

function titleCase(s: string) {}
  );}




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934







}'"`
=======


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces a seed round of ${params.raise_amount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\n_quotes:\n- CEO: "We are thrilled..."\n\n_about ${params.company_name}:\n${boilerplate}`;
  }
  // Check condition;
if ( {) {}
  $2;
}'`
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces the ${params.token_name ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\n_distribution:\n- Community: 40%\n- Treasury: 20%\n\n_about ${params.company_name}:\n${boilerplate}`;
  }`
  return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\n_about ${params.company_name}:\n${boilerplate}`;
;
<<<<<<< HEAD
export /**;
 * build_timeline - Function description;
=======
export /**
 * build_timeline - Function description
    /\w\S*/g;)
    w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()



  );}





}`;
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces a seed round of ${params.raise_amount ?? '[Amount]'} led by [Lead]. Funds will accelerate product and ecosystem growth.\n\n_quotes:\n- CEO: "We are thrilled..."\n\n_about ${params.company_name}:\n${boilerplate}`;"
  // Check condition;
if ( {) {
}"`;
    return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} announces the ${params.token_name ?? '[Token]'} token sale. This is not an offer of securities. See legal notices.\n\n_distribution:\n- Community: 40%\n- Treasury: 20%\n\n_about ${params.company_name}:\n${boilerplate}`;
  return `FOR IMMEDIATE RELEASE\n_date: ${params.date}\n\n${header}\n\n${params.company_name} launches ZionGPT Core, an intelligent operations layer. Key benefits include automation, compliance, and insight.\n\n_about ${params.company_name}:\n${boilerplate}`;
export /**
 * build_timeline - Function description;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 */
function build_timeline() {}
  const add_days = (d: Date, days: number) =>: any;
    new Date (d.getFullYear (), d.get_month (), d.get_date () + days);
  const fmt = (d: Date) =>: any d.toISOString ().substring (0, 10);
  return [;'
    { label: 'Week 1: Closed Beta Invite', date: fmt (add_days (start_date, 0)) },'
    { label: 'Week 2: ZionGPT Core Reveal', date: fmt (add_days (start_date, 7)) },
    {'
      label: 'Week 3: Token Airdrop Snapshot',
      date: fmt (add_days (start_date, 14)),
    },'
    { label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) },
  ];
;
/**
 * title_case - Function description;
 */
function title_case() {}
  return s.replace (
    /\w\S*/g,
    w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ());}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      label: 'Week 3: Token Airdrop Snapshot',
      date: fmt (add_days (start_date, 14)),
    { label: 'Week 4: Zion Global Summit', date: fmt (add_days (start_date, 21)) },']
/**
 * title_case - Function description;
function title_case() {
  return s.replace (
    /\w\S*/g,)
    w => w.char_at (0).toUpperCase () + w.slice (1).toLowerCase ());}
`;
pr-12325
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
