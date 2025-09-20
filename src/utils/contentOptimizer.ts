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
}
}
imageCount: number;
linkCount: number;
}): ContentIssue[] {
location: "Page structure"
});
location: "Content body"
});
description: "No images found. Images improve user engagement and SEO";
description: "Content lacks proper heading structure for organization";
location: "Content optimization"
});
description: "Expand content to provide more value and improve SEO";
description: "Reorganize content with proper headings and logical flow";
description: "Naturally incorporate missing keywords into the content";