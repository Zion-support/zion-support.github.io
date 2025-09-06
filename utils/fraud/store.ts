// Mock fraud store utility
export function getFraudStore() {
  return {
<<<<<<< HEAD
    id,
    userId: partial.userId ?? null,
    source: partial.source,
    content: partial.content ?? null,
    metadata: partial.metadata ?? null,
    ipAddress: partial.ipAddress ?? null,
    createdAt: partial.createdAt ?? new Date().toISOString(),
  };
=======
    listFlagged: async (limit: number, offset: number, filters: any) => {
      // Mock implementation
      return [];
    },
    recordAction: async (fraudId: string, action: string, reason: string, adminId: string) => {
      // Mock implementation
      return { success: true };
    }
  };
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
