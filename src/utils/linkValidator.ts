export interface LinkValidationResult {
  url: string;
  isValid: boolean;
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
  static async validateLink(url: string): Promise<LinkValidationResult> {
    try {
      const response = await fetch(url, { method: "HEAD" });
      
      return {
        url,
        isValid: response.ok,
        httpStatus: response.status
      };
    } catch (error) {
      return {
        url,
        isValid: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }

  static async validateMultipleLinks(urls: string[]): Promise<LinkValidationResult[]> {
    const results = await Promise.all(
      urls.map(url => this.validateLink(url))
    );
    
    return results;
  }

  static suggestFix(result: LinkValidationResult): LinkFix | null {
    if (result.isValid) {
      return null;
    }

    if (result.httpStatus === 404) {
      return {
        originalUrl: result.url,
        newUrl: "",
        type: "remove",
        reason: "Link returns 404 Not Found"
      };
    }

    if (result.httpStatus === 301 || result.httpStatus === 302) {
      return {
        originalUrl: result.url,
        newUrl: "",
        type: "redirect",
        reason: `Link redirects with status ${result.httpStatus}`
      };
    }

    return {
      originalUrl: result.url,
      newUrl: "",
      type: "update",
      reason: result.error || "Unknown error"
    };
  }
}