<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type SyncScope = "full" | "dao" | "marketplace";
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export type SyncScope = "full" | "dao" | "marketplace",;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Peer {;
  id: string;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
}
<<<<<<< HEAD
=======
export interface InstanceConfig {instanceId: string;
export type SyncScope = "full" | "dao" | "marketplace";
export interface Peer {;
  id: string;
  baseUrl: string, // e.g., https: //zion-latam.example.org;
  scope?: SyncScope;
  paused?: boolean;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export interface InstanceConfig {;
  instanceId: string;
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  secretConfigured: boolean;
<<<<<<< HEAD
}
;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {}
  id: string,;
=======
  secretConfigured: boolean;

export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {
  id: string,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,
  paused?: boolean;
}
<<<<<<< HEAD
export interface InstanceConfig {}
=======
export interface InstanceConfig {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
<<<<<<< HEAD
  peers: Peer[],;
=======
  peers: Peer[],
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  secret_configured: boolean;

<<<<<<< HEAD


<<<<<<< HEAD

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
<<<<<<< HEAD
<<<<<<< HEAD
  | "leaderboard_entry";
export interface BaseEventPayload {;
  id: string;
}
;
export interface ProposalVoteEntry {;
=======
<<<<<<< HEAD
  } catch (error) {
=======
  secretConfigured: boolean;}  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  secretConfigured: boolean;}  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface ProposalVoteEntry {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  voterId: string;
  weight: number;
  choice: string;
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  | "leaderboard_entry";
export interface BaseEventPayload {;
  id: string;
}
;
export interface ProposalVoteEntry {;
  voterId: string;
  weight: number;
  choice: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface ProposalPayload extends BaseEventPayload {;
  proposalId: string;
  title: string;
  votes: ProposalVoteEntry[];
}
;
export interface TokenTransferPayload extends BaseEventPayload {;
  txId: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;

<<<<<<< HEAD
  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


export type SyncEventType =;"
  | "proposal";"
  | "token_transfer";"
  | "talent_mobility";"
  | "dao_endorsement";


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface TalentMobilityPayload extends BaseEventPayload {;
  personId: string;

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
  toDAO: string;
<<<<<<< HEAD
  resolutionId: string;
  decision: "endorse" | "reject";
=======
  resolutionId: string;"
  decision: "endorse" | "reject",;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  timestamp: number;
<<<<<<< HEAD
=======

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  decision: "endorse" | "reject";
  timestamp: number;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number;
  period?: string, // e.g., 2025-Q3;
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  rank?: number;
  period?: string, // e.g., 2025-Q3;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  | DaoEndorsementPayload;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  | LeaderboardEntryPayload,;
export interface SyncEvent {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  | LeaderboardEntryPayload;
export interface SyncEvent {;
  eventId: string;
  type: SyncEventType;
  payload: SyncEventPayload;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


  | LeaderboardEntryPayload,;
export interface SyncEvent {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  | DaoEndorsementPayload;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
;
export interface MultiverseState {;
  config: InstanceConfig;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface MultiverseState {
  config: InstanceConfig,
  lastSyncedAt: number,
  seenEventIds: Record < string true>,
  latestVersionByEntityId: Record < string number>,
  proposalMerkleById: Record < string string>;

  events: SyncEvent[];
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }


}


  } catch (error) {"
    console.error("Error:", error);"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface MultiverseState {;
  config: InstanceConfig,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  lastSyncedAt: number;
  seenEventIds: Record<string true>;
  latestVersionByEntityId: Record<string, number>;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
<<<<<<< HEAD
}
=======
=======
  lastSyncedAt: number;
  seenEventIds: Record<string, true>,;
  latestVersionByEntityId: Record<string, number>,;
  proposalMerkleById: Record<string, string>;
  events: SyncEvent[];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  | DaoEndorsementPayload;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  | DaoEndorsementPayload;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
