import React from "react";

export interface SEOData {
  
title: string;
description: string;
keywords: string[];
ogImage?: string;
canonicalUrl?: string;
}
structuredData?: object;}
}

export interface ContentQualityIssue {
  
page: string;
issue: "missing-title" | "missing-description" | "short-description" | "no-headings" | "minimal-content";
severity: "high" | "medium" | "low";
suggestedFix: string;
}
}
}
"@type": "Organization",;
"name": "Zion Tech Group",;
"url": "https://ziontechgroup.com",;