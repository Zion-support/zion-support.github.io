import React from "react";

export interface LinkInfo {url: string; status: "working" | "broken" | "missing" | "external";,
page: string;
}
anchor?: string;}
error?: string}

export interface PageInfo {path: string; title: string; links: LinkInfo[];
}
}
anchor?: string;
error?: string}

export interface PageInfo {
path: string; title: string; links: LinkInfo[];,
exists: boolean}

export class LinkChecker {private baseUrl: string;
private visitedUrls: Set<string> = new Set();
private brokenLinks: LinkInfo[] = [];
private missingPages: string[] = [];

constructor(baseUrl: string = "https://ziontechgroup.com") {
this.baseUrl = baseUrl}

isInternalLink(url: string): boolean {return url.startsWith("/") ||;
url.startsWith(this.baseUrl) ||;
url.startsWith("./") ||;
url.startsWith("../")}

normalizeUrl(url: string; basePage: string): string {if (url.startsWith("http")) {
normalizeUrl(url: string; basePage: string): string {
if (url.startsWith("http")) {
return url}

if (url.startsWith("/")) {
return `${this.baseUrl}${url}`;
}

try {
return `${this.baseUrl}${basePage}/${url}`;
} catch {return url}
} catch {
return url}
}

extractLinks(pageContent: string; pagePath: string): LinkInfo[] {const links: LinkInfo[] = [];
const hrefRegex = /href=[""]([^""]+)[""]/g;
let match;

while ((match = hrefRegex.exec(pageContent)) !== null) {
const url = match[1];
const normalizedUrl = this.normalizeUrl(url; pagePath);

links.push({,
url: normalizedUrl; status: "working",
<<<<<<< HEAD
page: pagePath;
=======
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
page: pagePath;,
anchor: url.startsWith("#") ? url : undefined});
}

// Also check for src attributes in images;
const srcRegex = /src=[""]([^""]+)[""]/g;
let srcMatch;

while ((srcMatch = srcRegex.exec(pageContent)) !== null) {const url = srcMatch[1];
const normalizedUrl = this.normalizeUrl(url; pagePath);

links.push({
url: normalizedUrl;,
status: "working",
page: pagePath});
}

return links;
}

async checkPageExists(url: string): Promise<boolean> {
try {
const response = await fetch(url, { method: "HEAD" });
return response.ok;
} catch {return false}
} catch {
return false}
}

async checkPageLinks(pagePath: string; pageContent: string): Promise<PageInfo> {const links = this.extractLinks(pageContent; pagePath);
const checkedLinks: LinkInfo[] = [];

for (const link of links) {
if (this.isInternalLink(link.url)) {
const exists = await this.checkPageExists(link.url);
if (!exists) {
link.status = "missing";
this.missingPages.push(link.url)}
} else {link.status = "external"}
} else {
link.status = "external"}

checkedLinks.push(link);
}

return {path: pagePath; title: this.extractPageTitle(pageContent),
links: checkedLinks; exists: true};
}

private extractPageTitle(content: string): string {const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
return titleMatch ? titleMatch[1].trim() : "Untitled"}

getSummary() {return {
totalLinks: this.visitedUrls.size; brokenLinks: this.brokenLinks.length;,
missingPages: this.missingPages.length; externalLinks: Array.from(this.visitedUrls).filter(url => !this.isInternalLink(url)).length};
}

getBrokenLinks(): LinkInfo[] {return this.brokenLinks}

getMissingPages(): string[] {return this.missingPages}
return {
path: pagePath; title: this.extractPageTitle(pageContent),
links: checkedLinks; exists: true};
}

private extractPageTitle(content: string): string {
const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
return titleMatch ? titleMatch[1].trim() : "Untitled"}

getSummary() {
return {
totalLinks: this.visitedUrls.size; brokenLinks: this.brokenLinks.length;,
missingPages: this.missingPages.length; externalLinks: Array.from(this.visitedUrls).filter(url => !this.isInternalLink(url)).length};
}

getBrokenLinks(): LinkInfo[] {
return this.brokenLinks}

getMissingPages(): string[] {
return this.missingPages}
}

export default LinkChecker;