 createdAt: string, updatedAt: string,
talentSlug?: string;
personalSummary: string, skills: string[],
technologies: string[], certifications: string[],
workHistory: WorkExperience[], education: EducationItem[],
export type AiAssistAction = | 'improve-summary' | 'format-description' | 'suggest-bullets';
