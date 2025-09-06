<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:zion-ai-assistant/src/shared/types.ts
=======
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,

=======

export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
export interface MilestoneSuggestionInput {;
  scopeOfWork: string,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export type ProjectType = "Web Dev" | "AI / ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",
export interface MilestoneSuggestionInput {
  scopeOfWork: string,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/shared/types.ts
  startDateIso: string, // ISO 8601;
  endDateIso: string,   // ISO 8601;
  project_type: ProjectType;
}
<<<<<<<< HEAD:zion-ai-assistant/src/shared/types.ts

<<<<<<< HEAD
=======
export interface SuggestedMilestoneItem {
  title: string,
  description: string,

=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export interface SuggestedMilestoneItem {;
  title: string,;
  description: string,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export interface SuggestedMilestoneItem {
  title: string,
  description: string,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/shared/types.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  suggestedDueDateIso: string;
  estimatedEffortHours: number, // estimated hours;
  tags?: string[], // e.g., ["AI Suggested"];
}
<<<<<<< HEAD
<<<<<<<< HEAD:zion-ai-assistant/src/shared/types.ts

<<<<<<< HEAD
}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/shared/types.ts
export interface MilestoneSuggestionResponse {
  milestones: SuggestedMilestoneItem[];
=======
export type ProjectType = "Web Dev" | "AI/ML" | "DevOps" | "Mobile" | "Data Engineering" | "Other",;
;
export interface MilestoneSuggestionInput {;
  scopeOfWork:string,;
  startDateIso:string, // ISO 8601;
  endDateIso:string,   // ISO 8601;
  projectType:ProjectType;
}
<<<<<<<< HEAD:zion-ai-assistant/src/shared/types.ts

=======

;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/zion-ai-assistant/src/shared/types.ts
=======
<<<<<<< HEAD
export interface MilestoneSuggestionResponse {milestones: SuggestedMilestoneItem[];
=======
;
export interface MilestoneSuggestionResponse {;
  milestones: SuggestedMilestoneItem[];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
