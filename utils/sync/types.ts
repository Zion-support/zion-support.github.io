
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
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
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


  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
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
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
