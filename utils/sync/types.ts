

export type SyncScope = "full" | "dao" | "marketplace",
export interface Peer {}
  id: string,;
  base_url: string, // e.g., https: //zion - latam.example.org;
  scope?: SyncScope,
  paused?: boolean;
}
export interface InstanceConfig {}
  instance_id: string,
  opt_in: boolean,
  paused: boolean,
  scope: SyncScope,
  peers: Peer[],;
  secret_configured: boolean;




}
;


export type SyncEventType =;"
  | "proposal";"
  | "token_transfer";"
  | "talent_mobility";"
  | "dao_endorsement";



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

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface DaoEndorsementPayload extends BaseEventPayload {;
  fromDAO: string;
  toDAO: string;
  resolutionId: string;"
  decision: "endorse" | "reject",;
  timestamp: number;

  } catch (error) {"
    console.error("Error:", error);"
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

  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }


}


  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface MultiverseState {;
  config: InstanceConfig,;


"