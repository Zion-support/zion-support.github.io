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

export class LinkValidator {
  private BROKEN_LINK_MAPPINGS: Record<string, string> = {
    "/old-page": "/new-page",
    "/legacy": "/modern",
    "/deprecated": "/current"
  };

  validateLink(url: string, parentPage?: string): LinkValidationResult {
    // Check for protocol issues
    if (!url.startsWith("http") && !url.startsWith("/") && !url.startsWith("#")) {
      return {
        url,
        status: "protocol",
        parentPage,
        error: "Invalid protocol or relative path"
      };
    }

    // Check for external links
    if (url.startsWith("http") && !url.includes("ziontechgroup.com")) {
      return {
        url,
        status: "external",
        parentPage
      };
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

  static isExternalLink(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return !urlObj.hostname.includes("ziontechgroup.com");
    } catch {
      return false;
    }
  }

  static generateRedirectRules(): string {
    const rules = [
      "# Redirect rules for broken links",
      "RewriteRule ^old-page/?$ /new-page [R=301,L]",
      "RewriteRule ^legacy/?$ /modern [R=301,L]",
      "RewriteRule ^deprecated/?$ /current [R=301,L]"
    ];
    return rules.join("\n");
  }

  static generateSitemapExclusions(): string[] {
    return [
      "/admin",
      "/private",
      "/temp",
      "/test",
      "/dev",
      "/staging"
    ];
  }

  generateFixes(results: LinkValidationResult[]): LinkFix[] {
    const fixes: LinkFix[] = [];
    
    for (const result of results) {
      if (result.status === "broken" && result.suggestedFix) {
        fixes.push({
          originalUrl: result.url,
          newUrl: result.suggestedFix.replace("Redirect to: ", ""),
          type: "redirect",
          reason: result.error || "Broken link detected"
        });
      }
    }
    
    return fixes;
  }
}