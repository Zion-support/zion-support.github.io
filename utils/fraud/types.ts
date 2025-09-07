export type MonitoredSource = 'signup' | 'job post' | 'message' | 'quote' | 'review';
export type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
export type FraudReviewStatus = 'PENDING' | 'WARNED' | 'SUSPENDED' | 'IGNORED';
export type AdminActionType = 'SUSPEND' | 'WARN' | 'IGNORE';