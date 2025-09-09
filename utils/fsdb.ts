// Mock implementation for fsdb utilities
export function getDisputeById(id: string) {
  return { id, status: 'pending', clientUserId: 'user1', talentUserId: 'user2', attachments: [], messages: [] };
}

export function upsertDispute(dispute: any) {
  // Mock implementation
  return Promise.resolve();
}

export function readAllDisputes() {
  return [];
}

export function createDispute(dispute: any) {
  // Mock implementation
  return Promise.resolve();
}

export function generateCaseId() {
  return `case_${Date.now()}`;
}

export function ensureDisputeUploadDir(disputeId: string) {
  return Promise.resolve(`/tmp/disputes/${disputeId}`);
}