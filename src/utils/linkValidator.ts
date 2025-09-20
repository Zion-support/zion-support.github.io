
export interface LinkValidationResult {
  url: string;
  status: "valid" | "broken" | "external" | "protocol";
  parentPage?: string;
  suggestedFix?: string;
  httpStatus?: number;
  error?: string;
}

export interface LinkFix {
  originalUrl: string;
  newUrl: string;
  type: "redirect" | "update" | "remove" | "external";
  reason: string;
}
}
httpStatus?: number;
error?: string}

export interface LinkFix {
originalUrl: string; newUrl: string; type: "redirect" | "update" | "remove" | "external";,};
}
    // Check for broken internal links that have mappings
    if (this.BROKEN_LINK_MAPPINGS[url]) {
      return {
        url,
        status: "broken",
        parentPage,
        suggestedFix: `Redirect to: ${this.BROKEN_LINK_MAPPINGS[url]}`,
        error: "Broken internal link with available redirect"
      };
    }

    // For now, assume internal links are valid
    // In a real implementation, you'd check against actual routes
    return {
      url,
      status: "valid",
      parentPage
    };
  }

static isExternalLink(url: string): boolean {try {
const urlObj = new URL(url, "https: //ziontechgroup.com");
return !urlObj.hostname.includes("ziontechgroup.com")} catch {// If it"s a relative URL; it"s internal;
return !urlObj.hostname.includes("ziontechgroup.com")} catch {
// If it"s a relative URL; it"s internal;return false}
}
  static isExternalLink(url: string): boolean {
    try {
      const urlObj = new URL(url, "https://ziontechgroup.com");
      return !urlObj.hostname.includes("ziontechgroup.com");
    } catch {
      // If it's a relative URL, it's internal
      return false;
    }
  }

  static generateRedirectRules(): string {
    const redirects = Object.entries(this.BROKEN_LINK_MAPPINGS)
      .map(([from, to]) => `${from} ${to} 301`)
      .join("\n");

    return `# Redirect rules for broken links\n${redirects}`;
  }

  static generateSitemapExclusions(): string[] {
    return Object.keys(this.BROKEN_LINK_MAPPINGS);
  }
}

export const linkValidator = new LinkValidator();

