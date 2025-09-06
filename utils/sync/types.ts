<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type SyncScope = "full" | "dao" | "marketplace";
export interface Peer {id: string;
export type SyncScope = "full" | "dao" | "marketplace",;
export interface Peer {;
  id: string,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
}
export type SyncScope = "full" | "dao" | "marketplace";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

}
;

=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export interface InstanceConfig {
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
  peers: Peer[],
  secret_configured: boolean;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  | "leaderboard_entry";
export interface BaseEventPayload {id: string;
}
export interface ProposalVoteEntry {voterId: string;
  weight: number;
  choice: string;
}
export interface ProposalPayload extends BaseEventPayload {proposalId: string;
  title: string;
  votes: ProposalVoteEntry[];
}
export interface TokenTransferPayload extends BaseEventPayload {txId: string;
  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export interface TalentMobilityPayload extends BaseEventPayload {personId: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export interface DaoEndorsementPayload extends BaseEventPayload {fromDAO: string;
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject";
  timestamp: number;
}
export interface LeaderboardEntryPayload extends BaseEventPayload {subjectId: string, // userId or teamId;
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number;
  period?: string, // e.g., 2025-Q3;
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject",;
  timestamp: number;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  score: number,;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

}
;

=======


}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  eventId: string;
  type: SyncEventType,;
  payload: SyncEventPayload,;
=======

  | LeaderboardEntryPayload,;
export interface SyncEvent {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  | LeaderboardEntryPayload;
export interface SyncEvent {eventId: string;
  type: SyncEventType;
  payload: SyncEventPayload;
  | LeaderboardEntryPayload,;
export interface SyncEvent {;
  eventId: string,;
  type: SyncEventType,;
  payload: SyncEventPayload,;
  originInstanceId: string,;
  version: number,;
  timestamp: number,;
  merkleRoot?: string, // required for proposal events;
  eventId: string;
  type: SyncEventType,;
  payload: SyncEventPayload,;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
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

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export interface MultiverseState {config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string true>;
  latestVersionByEntityId: Record<string number>;
  proposalMerkleById: Record<string string>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  events: SyncEvent[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
;
export interface MultiverseState {;
  config: InstanceConfig,;

<<<<<<< HEAD
=======
;
export interface MultiverseState {;
  config: InstanceConfig,;
  lastSyncedAt: number,;
  seenEventIds: Record<string true>,;
  latestVersionByEntityId: Record<string number>,;
  proposalMerkleById: Record<string string>;
  events: SyncEvent[];
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

}
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
