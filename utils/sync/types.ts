<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
  optIn: boolean;
  paused: boolean;
  scope: SyncScope;
  peers: Peer[];
  secretConfigured: boolean;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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



<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
;
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
=======


  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  | "leaderboard_entry",
export interface BaseEventPayload {
  id: string;
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
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
<<<<<<< HEAD
}
;
=======
<<<<<<< HEAD
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
;
=======
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


  | LeaderboardEntryPayload,;
export interface SyncEvent {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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

  events: SyncEvent[];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface MultiverseState {;
  config: InstanceConfig,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
