
export type Infobox = {;
  founder: string,;
  launchYear: string,;
  token: string,;

  protocolType: string;
}
export type WikiSection = {id: string;
  title: string;
  paragraphs: string[];

},;
export type WikiContent = {;
  title: string,;
  intro: string,;
  infobox: Infobox,;
  sections: WikiSection[],;
  references: string[];
},;
export type DocsContent = {;
  productOverview: WikiSection,;

export type Infobox = {};
  founder: string;
  launchYear: string;
  token: string;
  protocolType: string;
};
export type WikiSection = {};
  id: string;
  title: string;
  paragraphs: string[];
};
export type WikiContent = {};
  title: string;


  intro: string;
  infobox: Infobox;
  sections: WikiSection[];
  references: string[];

|---|---|;
| Founder | ${wiki.infobox.founder} |;
| Launch Year | ${wiki.infobox.launch_year} |;
| Token | ${wiki.infobox.token} |;

  developerApi: WikiSection,;
  governanceGuide: WikiSection,;
  tokenomics: WikiSection,;
  team: WikiSection,;
  publicRoadmap: WikiSection;

    token: 'ZION$',;'
    protocolType: 'Decentralized AI marketplace & governance protocol'},;
  const sections: WikiSection[] = [;
    {;


'
      title: 'History and Launch',;
      paragraphs: [;'
        'Zion OS originated from the need to coordinate AI work, attribution, and payments across a multi-agent economy. Early prototypes focused on agent task routing and provable contribution tracking.The mainnet-ready architecture was announced in 2025 alongside the ZION$ token model for incentive alignment, with a progressive decentralization path through the Zion DAO.']},;
    {;'
      id: 'architecture',;'
      title: 'Architecture',;
      paragraphs: [;'
        'Zion OS is a modular, protocol-first system with the following layers: (1) Identity and Reputation, (2) Task and Marketplace, (3) AI Model and Agent Registry, (4) Payments and Tokenomics, and (5) Governance. Modules interoperate via open interfaces.ZionGPT provides an orchestration layer for agent-to-agent collaboration, policy enforcement, and quality control. Each module can be upgraded independently and governed by token holders and working groups.']},;
    {;'
      id: 'token',;'
      title: 'Token (ZION$)',;
      paragraphs: [;'
        'ZION$ is a utility and governance token used for staking, curation, and fee distribution. Participants stake to signal quality, earn rewards for verified contributions, and secure the marketplace against spam and fraud.Fees collected from marketplace activity are distributed to contributors, validators, and the protocol treasury subject to DAO-approved policies.']},;
    {;'
      id: 'zion-gpt',;'
      title: 'ZionGPT and the AI Layer',;
      paragraphs: [;'
        'ZionGPT is an AI meta-orchestrator that coordinates tasks across registered agents, models, and human contributors. It enforces standards, evaluates outputs, and routes work to the most reliable providers.The AI layer supports verifiable prompts, reproducible runs, and audit trails to attribute value and enable on-chain or off-chain settlement.']},;
    {;'
      id: 'dao-governance',;'
      title: 'DAO and Governance',;
      paragraphs: [;'
        'Zion DAO governs protocol parameters, module upgrades, and treasury allocations. Proposals are submitted by contributors and subject to stake-weighted voting with safeguards against concentration and collusion.Working groups steward core domains such as protocol engineering, AI ecosystem partnerships, safety, and growth. Transparency reports and on-chain metrics inform policy updates.']},;
    {;'
      id: 'use-cases',;'
      title: 'Use Cases',;
      paragraphs: [;'
        'AI marketplaces for task fulfillment, model evaluation, and fine-tuning bounties.Talent reputation networks that verify contributions and enable portable work graphs.Enterprise agent orchestration for workflows that require auditability and compliance.Open research funding where results and attributions are verifiable and programmable.']},;
    {;'
      id: 'adoption',;'
      title: 'Adoption',;
      paragraphs: [;'
        'Initial adoption focuses on developer ecosystems, open-source contributors, and AI-native organizations seeking transparent marketplaces for model-centric work.Partnerships emphasize interoperability, agent standards, and safety benchmarks that enable reliable collaboration at scale.']}],;
  const references = [;

    .toLowerCase();'
    .replace(/[^a-z0-9\s-]/g, '');
    .trim();'
    .replace(/\s+/g, '-');'
    .replace(/-+/g, '-');

export function slugify (input: string): string {};
  return input;
    .toLowerCase ();'
    .replace (/[^a - z0 - 9\s-]/g, '');
    .trim ();'
    .replace (/\s+/g, '-');'
    .replace (/-+/g, '-');
}




  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}


'"