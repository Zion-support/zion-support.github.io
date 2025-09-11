export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {
  id: string,
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,  paused?: boolean;
}
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
export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {
  id: string,
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,  paused?: boolean;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
export interface InstanceConfig {
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
  peers: Peer[],
  secret_configured: boolean;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
  | "leaderboard_entry";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
export interface TokenTransferPayload extends BaseEventPayload {txId: string;  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;


  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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


  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }}
export interface DaoEndorsementPayload extends BaseEventPayload {fromDAO: string;
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject";
  timestamp: number;

}
}
;
=======


}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
  toDAO: string;
  resolutionId: string;
  decision: "endorse" | "reject",;
  timestamp: number;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;



}
;
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  | LeaderboardEntryPayload,;
export interface SyncEvent {;


  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
export interface MultiverseState {config: InstanceConfig;
  lastSyncedAt: number;
  seenEventIds: Record<string true>;
  latestVersionByEntityId: Record<string number>;
  proposalMerkleById: Record<string string>;
=======  events: SyncEvent[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
export interface MultiverseState {
  config: InstanceConfig,
  lastSyncedAt: number,
  seenEventIds: Record < string true>,
  latestVersionByEntityId: Record < string number>,
  proposalMerkleById: Record < string string>;

  events: SyncEvent[];
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface MultiverseState {;
  config: InstanceConfig,;

<<<<<<< HEAD
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
=======
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
