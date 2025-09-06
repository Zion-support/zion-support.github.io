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
<<<<<<< HEAD
  secretConfigured: boolean;

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
}
;
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
  } catch (error) {
=======
  secretConfigured: boolean;}  } catch (error) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;
  fromNation: string;
  toNation: string;
  role: string;
  startDate: string;
  endDate?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;
  score: number;
  category: string, // e.g., grants, contributions;
  rank?: number,;
  period?: string, // e.g., 2025-Q3;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
;}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
<<<<<<< HEAD
  | DaoEndorsementPayload;
  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;
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
=======
  | DaoEndorsementPayload;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
