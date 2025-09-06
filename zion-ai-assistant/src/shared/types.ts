<<<<<<< HEAD


export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,


export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
<<<<<<< HEAD
}


export interface SuggestedMilestoneItem {
  title: string,
  description: string,


;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;

export interface SuggestedMilestoneItem {
  title: string,
  description: string,

  suggestedDueDateIso: string;
=======
}  suggestedDueDateIso: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}

export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}
<<<<<<< HEAD

export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
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
=======
export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];
}
