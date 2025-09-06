export interface Application {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
}

export interface UserDetails {
  id: string;
  email: string;
  displayName?: string;
  userType?: string;
}

export interface ModerationStatus {
  status: 'pending' | 'approved' | 'rejected' | 'removed' | 'warned' | 'banned';
}