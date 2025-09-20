import React from "react";

export interface LinkValidationResult {url: string; status: "valid" | "broken" | "external" | "protocol";
parentPage?: string;
suggestedFix?: string;
}
httpStatus?: number;}
error?: string}

export interface LinkFix {originalUrl: string; newUrl: string; type: "redirect" | "update" | "remove" | "external";
}
}
suggestedFix: `Redirect to: ${this.BROKEN_LINK_MAPPINGS[url]}`, error: "Broken internal link with available redirect"
};
return !urlObj.hostname.includes("ziontechgroup.com")} catch {// If it"s a relative URL; it"s internal;
static generateSitemapExclusions(): string[] {return Object.keys(this.BROKEN_LINK_MAPPINGS)}