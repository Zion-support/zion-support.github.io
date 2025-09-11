<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;
<<<<<<< HEAD
export interface SuggestedMilestoneItem {
  title: string,
  description: string,
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}
export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}export interface MilestoneSuggestionResponse  {milestones: SuggestedMilestoneItem[];
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
