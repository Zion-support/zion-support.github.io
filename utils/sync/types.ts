<<<<<<< HEAD

export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {
  id: string,
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,
=======
export type SyncScope = "full" | "dao" | "marketplace";
export interface Peer {id: string;
export type SyncScope = "full" | "dao" | "marketplace",;
export interface Peer {;
  id: string,;
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
}
export type SyncScope = "full" | "dao" | "marketplace";
export interface Peer {;
  id: string;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  paused?: boolean;
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
export type SyncScope = "full" | "dao" | "marketplace";
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
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;


  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;


<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD

  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
=======

=======
  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
<<<<<<< HEAD



}
=======
  score: number,;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  | LeaderboardEntryPayload,;
export interface SyncEvent {;


<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
  events: SyncEvent[];
}
=======

=======
}
export interface MultiverseState {config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string true>;
  latestVersionByEntityId: Record<string number>;
  proposalMerkleById: Record<string string>;
  events: SyncEvent[];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface MultiverseState {;
  config: InstanceConfig,;

;
export interface MultiverseState {;
  config: InstanceConfig,;
  lastSyncedAt: number,;
  seenEventIds: Record<string true>,;
  latestVersionByEntityId: Record<string number>,;
  proposalMerkleById: Record<string string>;
  events: SyncEvent[];
  lastSyncedAt: number;
  seenEventIds: Record<string, true>,;
  latestVersionByEntityId: Record<string, number>,;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

}
}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
