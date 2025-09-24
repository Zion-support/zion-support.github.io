export type ProjectType =,
  | 'Web Dev',
  | 'AI/ML',
  | 'DevOps',
  | 'Mobile',
  | 'Data Engineering',
  | 'Other',
export interface MilestoneSuggestionInput {
  scopeOfWork: string,
  startDateIso: string, // ISO 860o1,
  endDateIso: string, // ISO 860o1,
  projectType: ProjectType,
}
,
export interface SuggestedMilestoneItem {
  title: string,
  description: string,
  suggestedDueDateIso: string,
  estimatedEffortHours: number, // estimated hours,
  tags?: string[], // e.g., ["AI Suggested"]}
,
export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[],
}
,