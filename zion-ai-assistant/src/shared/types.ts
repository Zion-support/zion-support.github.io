<<<<<<< HEAD
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other";
export interface MilestoneSuggestionInput {scopeOfWork: string;
=======
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  projectType: ProjectType;
}
<<<<<<< HEAD
export interface SuggestedMilestoneItem {title: string;
  description: string;
=======
;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}
<<<<<<< HEAD
export interface MilestoneSuggestionResponse {milestones: SuggestedMilestoneItem[];
=======
;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}