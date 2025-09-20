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
    "/legacy-service": "/services",
    "/deprecated-feature": "/features"
  };

  async validateLink(url: string, parentPage?: string): Promise<LinkValidationResult> {
    try {
      // Check for protocol issues
      if (!url.startsWith('http') && !url.startsWith('/') && !url.startsWith('#')) {
        return {
          url,
          status: "protocol",
          parentPage,
          error: "Invalid protocol or malformed URL"
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
    } catch (error) {
      return {
        url,
        status: "broken",
        parentPage,
        error: error instanceof Error ? error.message : "Unknown validation error"
      };
    }
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
    const redirects = Object.entries(new LinkValidator().BROKEN_LINK_MAPPINGS)
      .map(([from, to]) => `${from} ${to} 301`)
      .join("\n");

    return `# Redirect rules for broken links\n${redirects}`;
  }

  static generateSitemapExclusions(): string[] {
    return Object.keys(new LinkValidator().BROKEN_LINK_MAPPINGS);
  }

  generateFix(result: LinkValidationResult): LinkFix {
    return {
      originalUrl: result.url,
      newUrl: result.suggestedFix || "",
      type: "update",
      reason: result.error || "Unknown error"
    };
  }
}

export const linkValidator = new LinkValidator();