<<<<<<< HEAD
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other";
export interface MilestoneSuggestionInput {scopeOfWork: string;
=======
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}
<<<<<<< HEAD
export interface SuggestedMilestoneItem {title: string;
  description: string;
=======
export interface SuggestedMilestoneItem {
  title: string,
  description: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}
<<<<<<< HEAD
export interface MilestoneSuggestionResponse {milestones: SuggestedMilestoneItem[];
}
=======
export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
