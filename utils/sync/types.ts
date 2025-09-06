
<<<<<<< HEAD
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

}
;

=======
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;

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
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;

<<<<<<< HEAD
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

=======


}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;

<<<<<<< HEAD
  eventId: string;
  type: SyncEventType,;
  payload: SyncEventPayload,;
=======

  | LeaderboardEntryPayload,;
export interface SyncEvent {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;

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
}
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
