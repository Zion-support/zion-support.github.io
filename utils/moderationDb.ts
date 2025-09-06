export interface ModerationFlag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  status: 'pending' | 'approved' | 'removed' | 'warned' | 'banned';
  content: string;
  reporterId: string;
  reportedUserId: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
  reason: string;
  userEmail: string;
  contentType: string;
}

export async function getFlagById(id: string): Promise<ModerationFlag | null> {
  // Mock implementation - in a real app, this would query a database
  return {
    id,
    type: 'spam',
    status: 'pending',
    content: 'Mock content',
    reporterId: 'user-1',
    reportedUserId: 'user-2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    reason: 'Spam content',
    userEmail: 'user@example.com',
    contentType: 'post'
  };
}

export async function updateFlagStatus(
  id: string, 
  status: 'approved' | 'removed' | 'warned' | 'banned',
  adminNotes?: string
): Promise<ModerationFlag | null> {
  // Mock implementation - in a real app, this would update a database
  const flag = await getFlagById(id);
  if (!flag) return null;
  
  return {
    ...flag,
    status,
    adminNotes,
    updatedAt: new Date().toISOString()
  };
}

export async function readAllFlags(): Promise<ModerationFlag[]> {
  // Mock implementation - in a real app, this would query a database
  return [
    {
      id: 'flag-1',
      type: 'spam',
      status: 'pending',
      content: 'Mock content 1',
      reporterId: 'user-1',
      reportedUserId: 'user-2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      reason: 'Spam content',
      userEmail: 'user@example.com',
      contentType: 'post'
    }
  ];
}

export async function createFlag(data: any): Promise<ModerationFlag> {
  // Mock implementation - in a real app, this would create a database record
  return {
    id: `flag-${Date.now()}`,
    type: data.type || 'other',
    status: 'pending',
    content: data.content || '',
    reporterId: data.reporterId || 'user-1',
    reportedUserId: data.reportedUserId || 'user-2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    reason: data.reason || '',
    userEmail: data.userEmail || '',
    contentType: data.contentType || 'post'
  };
}