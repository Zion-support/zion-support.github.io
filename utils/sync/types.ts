<<<<<<< HEAD
export type SyncScope = "full" | "dao" | "marketplace",;
export interface Peer {;
  id: string,;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export interface InstanceConfig {instanceId: string;
=======
export type SyncScope = "full" | "dao" | "marketplace";
export interface Peer {;
  id: string;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
}
;
export interface InstanceConfig {;
  instanceId: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
  secretConfigured: boolean;
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
<<<<<<< HEAD
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
=======
  | "leaderboard_entry";
export interface BaseEventPayload {;
  id: string;
}
;
export interface ProposalVoteEntry {;
  voterId: string;
  weight: number;
  choice: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export interface ProposalPayload extends BaseEventPayload {;
  proposalId: string;
  title: string;
  votes: ProposalVoteEntry[];
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export interface TokenTransferPayload extends BaseEventPayload {;
  txId: string;
<<<<<<< HEAD

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
<<<<<<< HEAD

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD

  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
  toDAO: string;
  resolutionId: string;
<<<<<<< HEAD
  decision: "endorse" | "reject",;
  timestamp: number;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
  decision: "endorse" | "reject";
  timestamp: number;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
  score: number;
  category: string, // e.g., grants, contributions;
<<<<<<< HEAD
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
  rank?: number;
  period?: string, // e.g., 2025-Q3;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
}
;
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
<<<<<<< HEAD

  | LeaderboardEntryPayload,;
export interface SyncEvent {;

=======
  | LeaderboardEntryPayload;
export interface SyncEvent {;
  eventId: string;
  type: SyncEventType;
  payload: SyncEventPayload;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
<<<<<<< HEAD

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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface MultiverseState {;
  config: InstanceConfig,;
  lastSyncedAt: number;
  seenEventIds: Record<string, true>,;
  latestVersionByEntityId: Record<string, number>,;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
=======
}
;
export interface MultiverseState {;
  config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string true>;
  latestVersionByEntityId: Record<string, number>;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
