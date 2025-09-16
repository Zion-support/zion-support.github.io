<<<<<<< HEAD
=======

;
export type SyncScope = "full" | "dao" | "marketplace",export interface Peer  {id: string,base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,paused?: boolean;
}
export interface InstanceConfig  {instance_id: string,opt_in: boolean,paused: boolean,scope: SyncScope,peers: Peer[],secret_configured: boolean;}}export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";| "leaderboard_entry",export interface BaseEventPayload  {id: string;export type SyncScope = "full" | "dao" | "marketplace",export interface Peer  {id: string,baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
export interface InstanceConfig {instanceId: string;
>>>>>>> origin/merge-pr-12271
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
  secretConfigured: boolean;
export interface ProposalVoteEntry {
  voterId: string;
  weight: number;
  choice: string;
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
<<<<<<< HEAD
  timestamp: number;
  fromNation: string;
=======
  timestamp: number;fromNation: string;
>>>>>>> origin/merge-pr-12271
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject";
  timestamp: number;
}

}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
=======
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}export interface DaoEndorsementPayload extends BaseEventPayload  {fromDAO: string;
>>>>>>> origin/merge-pr-12271
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject",;
  timestamp: number;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;

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
;





export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;

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

  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;

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
}

=======

export interface LeaderboardEntryPayload extends BaseEventPayload {
  subjectId: string; // userId or teamId
  score: number;
  category: string; // e.g., grants, contributions
  rank?: number;
  period?: string; // e.g., 2025-Q3
}

export type SyncEventPayload =
  | ProposalPayload
  | TokenTransferPayload
  | TalentMobilityPayload
  | DaoEndorsementPayload
  | LeaderboardEntryPayload;

export interface SyncEvent {
  eventId: string;
  type: SyncEventType;
  payload: SyncEventPayload;
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string; // required for proposal events
}

export interface MultiverseState {
  config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string, true>;
  latestVersionByEntityId: Record<string, number>;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
}
>>>>>>> origin/auto/autonomy-17186719616
