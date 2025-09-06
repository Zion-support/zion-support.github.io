// Moderation database utility functions
export interface ModerationFlag {
  id: string;
  type: string;
  status: string;
  createdAt: Date;
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  // Mock implementation
  return {
    id,
    type: 'spam',
    status: 'pending',
    createdAt: new Date()
  };
}

export async function updateFlagStatus(id: string, status: string): Promise<ModerationFlag | null> {
  // Mock implementation
  return {
    id,
    type: 'spam',
    status,
    createdAt: new Date()
  };
}