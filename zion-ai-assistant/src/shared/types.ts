<<<<<<< HEAD
export type ProjectType =
  | 'Web Dev'
  | 'AI/ML'
  | 'DevOps'
  | 'Mobile'
  | 'Data Engineering'
  | 'Other';

export interface MilestoneSuggestionInput {
  scopeOfWork: string;
  startDateIso: string; // ISO 8601
  endDateIso: string; // ISO 8601
  projectType: ProjectType;
}

export interface SuggestedMilestoneItem {
  title: string;
  description: string;
  suggestedDueDateIso: string;
  estimatedEffortHours: number; // estimated hours
  tags?: string[]; // e.g., ["AI Suggested"]
}

export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}
=======
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other";
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
