}
export type SyncEventType =;
  | "proposal";
  | "token_transfer";
  | "talent_mobility";
  | "dao_endorsement";
}
export type SyncEventPayload =;
  | ProposalPayload;
  | TokenTransferPayload;
  | TalentMobilityPayload;
  | DaoEndorsementPayload;
  events: SyncEvent[];
}
