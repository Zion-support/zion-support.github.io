

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";

  | "leaderboard_entry",;
export interface BaseEventPayload {;
  id: string;

  token: string;
  amount: number;
  fromSubnet: string;
  toSubnet: string;
  timestamp: number;

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

}
;
export interface LeaderboardEntryPayload extends BaseEventPayload {;
  subjectId: string, // userId or teamId;


}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;

  | LeaderboardEntryPayload,;
export interface SyncEvent {;

  originInstanceId: string;
  version: number;
  timestamp: number;
  merkleRoot?: string, // required for proposal events;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface MultiverseState {;
  config: InstanceConfig,;


}