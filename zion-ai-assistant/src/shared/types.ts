export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,


export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;

export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}
export interface SuggestedMilestoneItem {
  title: string,
  description: string,


export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other";
export interface MilestoneSuggestionInput {;
  scopeOfWork: string;
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  projectType: ProjectType;
}
export interface SuggestedMilestoneItem {title: string;
  description: string;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}
export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}
export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
;
export interface MilestoneSuggestionInput {;
  scopeOfWork:string,;
  startDateIso:string, // ISO 8601;
  endDateIso:string,   // ISO 8601;
  projectType:ProjectType;
}

;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];

}
;
export interface SuggestedMilestoneItem {;
  title:string,;
  description:string,;
  suggestedDueDateIso:string,;
  estimatedEffortHours:number, // estimated hours;
  tags?:string[], // e.g., ["AI Suggested"];
}
;
export interface MilestoneSuggestionResponse {;
  milestones:SuggestedMilestoneItem[];
}
export interface MilestoneSuggestionResponse {milestones: SuggestedMilestoneItem[];
;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];
}