// Mock fraud store utility
export function getFraudStore() {
  return {
    listFlagged: async (limit: number, offset: number, filters: any) => {
      // Mock implementation
      return [],
    },
    recordAction: async (fraudId: string, action: string, reason: string, adminId: string) => {
      // Mock implementation
      return { success: true };
    }
  };
}