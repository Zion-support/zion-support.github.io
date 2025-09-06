export type Infobox = {founder: string;
  launchYear: string;
  token: string;
  protocolType: string;

export type WikiSection = {id: string;
  title: string;
  paragraphs: string[];

export type WikiContent = {title: string;
  intro: string;
  infobox: Infobox;
  sections: WikiSection[];
  references: string[];

export type DocsContent = {productOverview: WikiSection;
  developerApi: WikiSection;
  governanceGuide: WikiSection;
  tokenomics: WikiSection;
  team: WikiSection;
  publicRoadmap: WikiSection;

export const operatorPrompt = `Write a Wikipedia-style article about Zion OS  the worlds first decentralized AI protocol for trust, work, and talent. Include use cases, launch history, modules, and governance model.`;
export function generateZionWiki(): WikiContent {const title = 'Zion OS'
  const intro = 'Zion OS is a decentralized AI marketplace protocol that coordinates trust, work, and talent across open networks. It combines an AI agent layer (ZionGPT), token incentives (ZION$), and a modular protocol to enable verifiable marketplaces for tasks, models, and contributions.'
    founder: any
    {id: any
        'Zion OS originated from the need to coordinate AI work, attribution, and payments across a multi-agent economy. Early prototypes focused on agent task routing and provable contribution tracking.The mainnet-ready architecture was announced in 2025 alongside the ZION$ token model for incentive alignment, with a progressive decentralization path through the Zion DAO.'
    {id: any
        'Zion OS is a modular, protocol-first system with the following layers: (1) Identity and Reputation, (2) Task and Marketplace, (3) AI Model and Agent Registry, (4) Payments and Tokenomics, and (5) Governance. Modules interoperate via open interfaces.ZionGPT provides an orchestration layer for agent-to-agent collaboration, policy enforcement, and quality control. Each module can be upgraded independently and governed by token holders and working groups.'
    {id: any
      title: 'Token (ZION$)'
        'ZION$ is a utility and governance token used for staking, curation, and fee distribution. Participants stake to signal quality, earn rewards for verified contributions, and secure the marketplace against spam and fraud.Fees collected from marketplace activity are distributed to contributors, validators, and the protocol treasury subject to DAO-approved policies.'
    {id: any
        'ZionGPT is an AI meta-orchestrator that coordinates tasks across registered agents, models, and human contributors. It enforces standards, evaluates outputs, and routes work to the most reliable providers.The AI layer supports verifiable prompts, reproducible runs, and audit trails to attribute value and enable on-chain or off-chain settlement.'
    {id: any
        'Zion DAO governs protocol parameters, module upgrades, and treasury allocations. Proposals are submitted by contributors and subject to stake-weighted voting with safeguards against concentration and collusion.Working groups steward core domains such as protocol engineering, AI ecosystem partnerships, safety, and growth. Transparency reports and on-chain metrics inform policy updates.'
    {id: any
        'AI marketplaces for task fulfillment, model evaluation, and fine-tuning bounties.Talent reputation networks that verify contributions and enable portable work graphs.Enterprise agent orchestration for workflows that require auditability and compliance.Open research funding where results and attributions are verifiable and programmable.'
    {id: any
        'Initial adoption focuses on developer ecosystems, open-source contributors, and AI-native organizations seeking transparent marketplaces for model-centric work.Partnerships emphasize interoperability, agent standards, and safety benchmarks that enable reliable collaboration at scale.'
    '[1] Zion OS whitepaper (forthcoming).[2] Governance guidelines and working group charters (draft).[3] ZionGPT evaluation benchmarks (in progress).'
      id: any
      paragraphs: [wiki.intro, 'Key modules: Identity & Reputation, Marketplace, AI/
    .replace(/[^a-z0-9\s-]/
    .replace(/\s+/
    .replace(/-+/