export type SyncScope = "full" | "dao" | "marketplace",;"
export interface Peer {;
  id: string,;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
  }
export interface InstanceConfig {instanceId: string;,
  optIn: boolean;
  paused: boolean;,
  scope: SyncScope;
  peers: Peer[];,
  secretConfigured: boolean;
"
export type SyncScope = "full" | "dao" | "marketplace","
export interface Peer {
  // TODO: Implement
  id: string,
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,
export interface InstanceConfig {
  // TODO: Implement
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
  peers: Peer[],
  secret_configured: boolean;



;
export type SyncEventType =;"
  | "proposal";""
  | "token_transfer";""
  | "talent_mobility";""
  | "dao_endorsement";"
export interface ProposalVoteEntry {
  // TODO: Implement
  voterId: string;,
  weight: number;
  choice: string;
export interface ProposalPayload extends BaseEventPayload {;
  proposalId: string;,
  title: string;
  votes: ProposalVoteEntry[];
export interface TokenTransferPayload extends BaseEventPayload {;
  txId: string;,
  token: string;
  amount: number;,
  fromSubnet: string;
  toSubnet: string;,
  timestamp: number;
  fromNation: string;,
  toNation: string;
  role: string;,
  startDate: string;
  endDate?: string;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;,
  toDAO: string;
  resolutionId: string;,"
  decision: "endorse" | "reject",;"

export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
  score: number;,
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
  originInstanceId: string;,
  version: number;
  merkleRoot?: string, // required for proposal events;

export interface MultiverseState {;
  config: InstanceConfig,;
  lastSyncedAt: number;,
  seenEventIds: Record<string, true>,;
</string>
  latestVersionByEntityId: Record<string, number>,;
  proposalMerkleById: Record<string, string>;
</string>"