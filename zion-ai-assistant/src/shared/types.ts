
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,

=======

export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}

export interface SuggestedMilestoneItem {
  title: string,
  description: string,

=======

;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}

export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}

=======

;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
