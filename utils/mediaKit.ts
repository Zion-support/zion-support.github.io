
,
export function buildLegalDocs(kind: MediaBundle): MediaAsset[] {,
  const base: MediaAsset[] = [,
    {,
      path: '';
      filename: 'legal / terms - of - use.md';
      type: 'text';
      content: `# Jurisdictional Disclosures\n\nUsage may be restricted in certain regions. Replace with localized guidance.`,};
  ];
  const web3Extras: MediaAsset[] = [,
    {,
      path: '';
      filename: 'legal / privacy - policy.md';
      type: 'text';
      content: `# Privacy Policy\n\n_we respect your privacy. Replace with counsel - approved language.`,};
    {,
      path: '';
      filename: 'legal / jurisdictional - disclosures.md';
      type: 'text';
      content: `# Jurisdictional Disclosures\n\n_usage may be restricted in certain regions. Replace with localized guidance.`,};
}]