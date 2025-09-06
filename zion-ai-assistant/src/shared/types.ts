
=======
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}

=======
export interface SuggestedMilestoneItem {
  title: string,
  description: string,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
