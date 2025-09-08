export interface Application {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
}