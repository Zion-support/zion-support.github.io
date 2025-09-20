import React from "react";

interface SitemapUrl {url: string;
lastmod?: string;
}
changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";}
priority?: number}

interface SitemapConfig {baseUrl: string; urls: SitemapUrl[];
}
}
export function generateSitemap(config: SitemapConfig = defaultSitemapConfig): string {const generator = new SitemapGenerator(config);
return generator.generateXML()}

// Utility function to generate robots.txt;
export function generateRobotsTxt(config: SitemapConfig = defaultSitemapConfig): string {const generator = new SitemapGenerator(config);