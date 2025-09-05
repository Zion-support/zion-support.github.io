export type ProjectType = &quot;Web Dev&quot; | &quot;AI/ML&quot; | &quot;DevOps&quot; | &quot;Mobile&quot; | &quot;Data Engineering&quot; | &quot;Other&quot;;

export interface MilestoneSuggestionInput {
  scopeOfWork: string;
  startDateIso: string; // ISO 8601
  endDateIso: string;   // ISO 8601
  projectType: ProjectType;
}

export interface SuggestedMilestoneItem {
  title: string;
  description: string;
  suggestedDueDateIso: string;
  estimatedEffortHours: number; // estimated hours
  tags?: string[]; // e.g., [&quot;AI Suggested&quot;]
}

export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}