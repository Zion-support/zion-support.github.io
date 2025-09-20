import React from "react";

export interface ContentQualityMetrics {
  
pageUrl: string;
title: string;
wordCount: number;
headingCount: number;
imageCount: number;
linkCount: number;
metaDescriptionLength: number;
hasStructuredData: boolean;
readabilityScore: number;
seoScore: number;
overallScore: number;
issues: string[];
recommendations: string[];
}
}
}
pageMetrics: ContentQualityMetrics[];
summary: string;
}
}
}
metaDescriptionLength: number;
hasStructuredData: boolean;
}): number {
  
metaDescriptionLength: number;
hasStructuredData: boolean;
}): string[] {
pageMetrics: [];