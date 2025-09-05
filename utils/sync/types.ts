export type SyncScope = "full" | "dao" | "marketplace";

export interface Peer {_id: string;
  baseUrl: string; // e.g., _https://zion-latam.example.org
  scope?: SyncScope;
  paused?: boolean;}

export interface InstanceConfig {_instanceId: string;
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
  secretConfigured: boolean;}

export type SyncEventType =
  | "proposal"
  | "token_transfer"
  | "talent_mobility"
  | "dao_endorsement"
  | "leaderboard_entry";

export interface BaseEventPayload {_id: string;}

export interface ProposalVoteEntry {_voterId: string;
  weight: number;
  choice: string;}

export interface ProposalPayload extends BaseEventPayload {_proposalId: string;
  title: string;
  votes: ProposalVoteEntry[];}

export interface TokenTransferPayload extends BaseEventPayload {_txId: string;
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;}

export interface TalentMobilityPayload extends BaseEventPayload {_personId: string;
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;}

export interface DaoEndorsementPayload extends BaseEventPayload {_fromDAO: string;
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject";
  timestamp: number;}

export interface LeaderboardEntryPayload extends BaseEventPayload {_subjectId: string; // userId or teamId
  score: number;
  category: string; // e.g., _grants, _contributions
  rank?: number;
  period?: string; // e.g., _2025-Q3}

export type SyncEventPayload =
  | ProposalPayload
  | TokenTransferPayload
  | TalentMobilityPayload
  | DaoEndorsementPayload
  | LeaderboardEntryPayload;

export interface SyncEvent {_eventId: string;
  type: SyncEventType;
  payload: SyncEventPayload;
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string; // required for proposal events}

export interface MultiverseState {_config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string, _true>;
  latestVersionByEntityId: Record<string, _number>;
  proposalMerkleById: Record<string, _string>;
  events: SyncEvent[];}