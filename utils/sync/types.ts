export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {
  id: string,
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,
  paused?: boolean;
}
export interface InstanceConfig {
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
  peers: Peer[],
  secret_configured: boolean;


}
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export interface ProposalVoteEntry {
  voter_id: string,
  weight: number,
  choice: string;
}
export interface ProposalPayload extends BaseEventPayload {
  proposal_id: string,
  title: string,
  votes: ProposalVoteEntry[];
}
export interface TokenTransferPayload extends BaseEventPayload {
  tx_id: string,
  token: string,
  amount: number,
  from_subnet: string,
  to_subnet: string,
  timestamp: number;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export interface TalentMobilityPayload extends BaseEventPayload {
  person_id: string,
  from_nation: string,
  to_nation: string,
  role: string,
  start_date: string,
  end_date?: string;
}
export interface DaoEndorsementPayload extends BaseEventPayload {
  fromDAO: string,
  toDAO: string,
  resolution_id: string,
  decision: "endorse" | "reject",
  timestamp: number;
}
export interface LeaderboardEntryPayload extends BaseEventPayload {
  subject_id: string, // user_id or team_id;
  score: number,
  category: string, // e.g., grants, contributions;
  rank?: number,
  period?: string, // e.g., 2025 - Q3;
}
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
  | LeaderboardEntryPayload,
export interface SyncEvent {
  event_id: string,
  type: SyncEventType,
  payload: SyncEventPayload,
  originInstanceId: string,
  version: number,
  timestamp: number,
  merkle_root?: string, // required for proposal events;
}
export interface MultiverseState {
  config: InstanceConfig,
  lastSyncedAt: number,
  seenEventIds: Record < string true>,
  latestVersionByEntityId: Record < string number>,
  proposalMerkleById: Record < string string>;
  events: SyncEvent[];
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface MultiverseState {;
  config: InstanceConfig,;


}
