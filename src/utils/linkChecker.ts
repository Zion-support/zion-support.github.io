import React from "react";

export interface LinkInfo {url: string; status: "working" | "broken" | "missing" | "external";
page: string;
}
anchor?: string;}
error?: string}

export interface PageInfo {path: string; title: string; links: LinkInfo[];
}
}
normalizeUrl(url: string; basePage: string): string {if (url.startsWith("http")) {
} catch {return url}
page: pagePath;
} catch {return false}
} else {link.status = "external"}
return {path: pagePath; title: this.extractPageTitle(pageContent),
links: checkedLinks; exists: true};
}

private extractPageTitle(content: string): string {const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
return titleMatch ? titleMatch[1].trim() : "Untitled"}

getSummary() {return {
  
totalLinks: this.visitedUrls.size; brokenLinks: this.brokenLinks.length;
missingPages: this.missingPages.length; externalLinks: Array.from(this.visitedUrls).filter(url => !this.isInternalLink(url)).length};
}

getBrokenLinks(): LinkInfo[] {return this.brokenLinks}

getMissingPages(): string[] {return this.missingPages}