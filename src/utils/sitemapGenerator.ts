import React from "react";

interface SitemapUrl {url: string;
lastmod?: string;
}
changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";}
priority?: number}

interface SitemapConfig {baseUrl: string; urls: SitemapUrl[];
}