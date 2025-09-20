export interface ContentAnalysis {
  
page: string;
wordCount: number;
headingCount: number;
imageCount: number;
linkCount: number;
readabilityScore: number;
seoScore: number;
issues: ContentIssue[];
suggestions: ContentSuggestion[];
}
