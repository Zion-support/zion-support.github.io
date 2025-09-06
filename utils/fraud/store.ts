// Mock fraud store utility
export function getFraudStore() {
  return {
    id,
    userId: partial && partial.userId ?? null,
    source: partial && partial.source,
    content: partial && partial.content ?? null,
    metadata: partial && partial.metadata ?? null,
    ipAddress: partial && partial.ipAddress ?? null,
    createdAt: partial && partial.createdAt ?? new Date().toISOString(),
  };
