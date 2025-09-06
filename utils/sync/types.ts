<<<<<<< HEAD
export type SyncScope = "full" | "dao" | "marketplace";
<<<<<<< HEAD
export interface Peer {id: string;
=======
<<<<<<< HEAD
export type SyncScope = "full" | "dao" | "marketplace",;
export interface Peer {;
  id: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
}
export interface InstanceConfig {instanceId: string;
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
  secretConfigured: boolean;
<<<<<<< HEAD
}
=======
=======
=======
export type SyncScope = "full" | "dao" | "marketplace";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface Peer {;
  id: string;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope,;
  paused?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface InstanceConfig {;
  instanceId: string;
  optIn: boolean;
  paused: boolean;
  scope: SyncScope,;
  peers: Peer[];
  secretConfigured: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";


  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
;
export interface ProposalVoteEntry {;
  voterId: string,;
  weight: number,;
  choice: string;
}
;
export interface ProposalPayload extends BaseEventPayload {;
  proposalId: string,;
  title: string,;
  votes: ProposalVoteEntry[];
}
;
export interface TokenTransferPayload extends BaseEventPayload {;
  txId: string,;
  token: string,;
  amount: number,;
  fromSubnet: string,;
  toSubnet: string,;
  timestamp: number;
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string,;
  fromNation: string,;
  toNation: string,;
  role: string,;
  startDate: string,;
  endDate?: string;
}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string,;
  toDAO: string,;
  resolutionId: string,;
  decision: "endorse" | "reject",;
  timestamp: number;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface ProposalVoteEntry {
  voterId: string;
  weight: number;
  choice: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface ProposalPayload extends BaseEventPayload {;
  proposalId: string;
  title: string;
  votes: ProposalVoteEntry[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TokenTransferPayload extends BaseEventPayload {;
  txId: string;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;


  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;

  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
=======

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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  score: number,;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;


  | LeaderboardEntryPayload,;
export interface SyncEvent {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  eventId: string,;
  type: SyncEventType,;
  payload: SyncEventPayload,;
  originInstanceId: string,;
  version: number,;
  timestamp: number,;
  merkleRoot?: string, // required for proposal events;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  eventId: string;
  type: SyncEventType,;
  payload: SyncEventPayload,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;

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
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export interface MultiverseState {;
  config: InstanceConfig,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  lastSyncedAt: number,;
  seenEventIds: Record<string true>,;
  latestVersionByEntityId: Record<string number>,;
  proposalMerkleById: Record<string string>;
  events: SyncEvent[];
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  lastSyncedAt: number;
  seenEventIds: Record<string, true>,;
  latestVersionByEntityId: Record<string, number>,;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}