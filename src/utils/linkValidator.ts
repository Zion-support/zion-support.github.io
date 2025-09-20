
}
httpStatus?: number;}
error?: string}

export interface LinkFix {originalUrl: string, newUrl: string, type: "redirect" | "update" | "remove" | "external";
}
}
httpStatus?: number;
error?: string}

export interface LinkFix {
originalUrl: string; newUrl: string; type: "redirect" | "update" | "remove" | "external";,};
}

// For now, assume internal links are valid;
// In a real implementation, you"d check against actual routes;
return {url;
status: "valid";
parentPage};
}

static getSuggestedFixes(): LinkFix[] {return Object.entries(this.BROKEN_LINK_MAPPINGS).map(([original, newUrl]) => ({
originalUrl: original;,
newUrl: newUrl;,
type: "redirect"
reason: "Broken internal link with available redirect mapping"}));
}

static isExternalLink(url: string): boolean {try {
const urlObj = new URL(url, "https: //ziontechgroup.com");
return !urlObj.hostname.includes("ziontechgroup.com")} catch {// If it"s a relative URL; it"s internal;
return !urlObj.hostname.includes("ziontechgroup.com")} catch {
// If it"s a relative URL; it"s internal;return false}
}

static generateRedirectRules(): string {
const redirects = Object.entries(this.BROKEN_LINK_MAPPINGS);
.map(([from, to]) => `${from} ${to} 301`)
.join("\n');

return `# Redirect rules for broken links;
${redirects}`;
}

static generateSitemapExclusions(): string[] {return Object.keys(this.BROKEN_LINK_MAPPINGS)}
}

export const linkValidator = new LinkValidator();

