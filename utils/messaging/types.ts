
,
export type UserRole = 'client' | 'talent' | 'admin';
export interface UserSummary {,
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string,
}
,
export type ConversationContextType = 'job' | 'talent' | 'general' | 'application' | 'invite';
export interface ConversationContext {,
  type: ConversationContextType;
  jobId?: string;
  jobTitle?: string;
  talentId?: string;
  talentName?: string;
  proposalLink?: string,
}
,