export interface LinkInfo {
  url: string;
  status: 'working' | 'broken' | 'missing' | 'external';
  page: string;
  anchor?: string;
  error?: string;
}

export interface PageInfo {
  path: string;
  title: string;
  links: LinkInfo[];
  exists: boolean;
}

export class LinkChecker {
  private baseUrl: string;
  private visitedUrls: Set<string> = new Set();
  private brokenLinks: LinkInfo[] = [];
  private missingPages: string[] = [];

  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
  }

  // Check if a link is internal or external
  isInternalLink(url: string): boolean {
    try {
      const urlObj = new URL(url, this.baseUrl);
      return urlObj.hostname === new URL(this.baseUrl).hostname;
    } catch {
      return false;
    }
  }

  // Normalize URL to handle relative paths
  normalizeUrl(url: string, basePage: string): string {
    try {
      if (url.startsWith('http')) {
        return url;
      }
      if (url.startsWith('/')) {
        return `${this.baseUrl}${url}`;
      }
      if (url.startsWith('#')) {
        return `${this.baseUrl}${basePage}${url}`;
      }
      return `${this.baseUrl}${basePage}/${url}`;
    } catch {
      return url;
    }
  }

  // Extract all links from a page
  extractLinks(pageContent: string, pagePath: string): LinkInfo[] {
    const links: LinkInfo[] = [];
    
    // Extract href attributes from anchor tags
    const hrefRegex = /href=["']([^"']+)["']/g;
    let match;
    
    while ((match = hrefRegex.exec(pageContent)) !== null) {
      const url = match[1];
      if (url && !url.startsWith('javascript:') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
        const normalizedUrl = this.normalizeUrl(url, pagePath);
        links.push({
          url: normalizedUrl,
          status: 'working',
          page: pagePath,
          anchor: url.startsWith('#') ? url : undefined
        });
      }
    }

    // Extract src attributes from img, script, and link tags
    const srcRegex = /(src|href)=["']([^"']+)["']/g;
    while ((match = srcRegex.exec(pageContent)) !== null) {
      const url = match[2];
      if (url && !url.startsWith('data:') && !url.startsWith('blob:')) {
        const normalizedUrl = this.normalizeUrl(url, pagePath);
        links.push({
          url: normalizedUrl,
          status: 'working',
          page: pagePath
        });
      }
    }

    return links;
  }

  // Check if a page exists
  async checkPageExists(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  // Check all links on a page
  async checkPageLinks(pagePath: string, pageContent: string): Promise<PageInfo> {
    const links = this.extractLinks(pageContent, pagePath);
    const checkedLinks: LinkInfo[] = [];

    for (const link of links) {
      if (this.visitedUrls.has(link.url)) {
        continue;
      }

      this.visitedUrls.add(link.url);

      if (this.isInternalLink(link.url)) {
        const exists = await this.checkPageExists(link.url);
        if (exists) {
          link.status = 'working';
        } else {
          link.status = 'missing';
          this.missingPages.push(link.url);
        }
      } else {
        link.status = 'external';
      }

      checkedLinks.push(link);
    }

    return {
      path: pagePath,
      title: this.extractPageTitle(pageContent),
      links: checkedLinks,
      exists: true
    };
  }

  // Extract page title
  private extractPageTitle(content: string): string {
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'Untitled';
  }

  // Get analysis summary
  getSummary() {
    return {
      totalLinks: this.visitedUrls.size,
      brokenLinks: this.brokenLinks.length,
      missingPages: this.missingPages.length,
      externalLinks: Array.from(this.visitedUrls).filter(url => !this.isInternalLink(url)).length
    };
  }

  // Get all broken links
  getBrokenLinks(): LinkInfo[] {
    return this.brokenLinks;
  }

  // Get all missing pages
  getMissingPages(): string[] {
    return this.missingPages;
  }
}

export default LinkChecker;