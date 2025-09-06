<<<<<<< HEAD
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other";
export interface MilestoneSuggestionInput {scopeOfWork: string;
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}
<<<<<<< HEAD
export interface SuggestedMilestoneItem {title: string;
  description: string;
;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}
<<<<<<< HEAD
export interface MilestoneSuggestionResponse {milestones: SuggestedMilestoneItem[];
;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
