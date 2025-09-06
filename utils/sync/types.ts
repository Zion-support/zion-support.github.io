export type SyncScope = "full" | "dao" | "marketplace";
export type SyncEventType = | "proposal" | "token transfer" | "talent mobility" | "dao endorsement" | "leaderboard entry";
export type SyncEventPayload = | ProposalPayload | TokenTransferPayload | TalentMobilityPayload | DaoEndorsementPayload | LeaderboardEntryPayload;
