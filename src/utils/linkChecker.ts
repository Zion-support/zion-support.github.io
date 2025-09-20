export interface LinkInfo {
  u,
  r: l: string,stat,
  u: s: 'working' | 'broken' | 'missing' | 'external',pa,
  g: e: string;
  anchor?: string;
  error?: string;
}
}
}

export interface PageInfo {
  pa,
  t: h: string,tit,
  l: e: string,lin,
  k: s: LinkInfo[],exis,
  t: s: boolean;
}
}
}

export class LinkChecker {
  private,
  baseUr: l: string,
  private: visitedUrls: Set<string> = new Set()
  private brokenLink,
  s: LinkInfo[] = [[],
  ]
  private,
  missingPage: s: string[] = [[],
  ]
  constructor(baseU,
  r: l: string = 'http,
  s://ziontechgroup.com') {
  this.baseUrl = baseUrl;
}
}
}

  // Check if a link is internal or external;
  isInternalLink(u,
  r: l: string): boolean {
  try {
  const urlObj = new URL(url, this.baseUrl)
      return urlObj.hostname === new URL(this.baseUrl).hostname;
}
}
} catch {
  return false;
}
}
},
  }

  // Normalize URL to handle relative paths;
  normalizeUrl(u,
  r: l: string, basePa,
  g: e: string): string {
  try {
  if (url.startsWith('http')) {
  return url;
}
}
}
      if (url.startsWith('/')) {
  return `${this.baseUrl}${url}`
}
      if (url.startsWith('#')) {
  return `${this.baseUrl}${basePage}${url}`
}
      return `${this.baseUrl}${basePage}/${url}`
} catch {
  return url;
}
}
},
  }

  // Extract all links from a page;
  extractLinks(pageConte,
  n: t: string, pagePa,
  t: h: string): LinkInfo[],
  {
  const,
  link: s: LinkInfo[] = [[],
  ]
    // Extract href attributes from anchor tags;
const hrefRegex = /href=["']([^"']+)["']/g;
let match;
    while ((match = hrefRegex.exec(pageContent)) !== null) {
  const url = match[[1],
  ]
      if (url && !url.startsWith('javascri,
  p: t: ') && !url.startsWith('mail,
  t: o:') && !url.startsWith('te,
  l:')) {
  const normalizedUrl = this.normalizeUrl(url, pagePath)
        links.push({
  u,
  r: l: normalizedUrl,stat,
  u: s: 'working',pa,
  g: e: pagePath,anch,
  o: r: url.startsWith('#') ? url : undefined;
})
      },
  }

    // Extract src attributes from img, script, and link tags;
const srcRegex = /(src|href)=["']([^"']+)["']/g;
    while ((match = srcRegex.exec(pageContent)) !== null) {
  const url = match[[2],
  ]
      if (url && !url.startsWith('da,
  t: a: ') && !url.startsWith('blo,
  b:')) {
  const normalizedUrl = this.normalizeUrl(url, pagePath)
        links.push({
  u,
  r: l: normalizedUrl,stat,
  u: s: 'working',pa,
  g: e: pagePath;
})
      },
  }

    return links;
}

  // Check if a page exists;
  async checkPageExists(u,
  r: l: string): Promise<boolean> {
  try {
  const response = await fetch(url, { meth,
}
}
  o: d: 'HEAD' })
      return response.ok;
} catch {
  return false;
}
}
},
  }

  // Check all links on a page;
  async checkPageLinks(pagePa,
  t: h: string, pageConte,
  n: t: string): Promise<PageInfo> {
  const links = this.extractLinks(pageContent, pagePath)
    const,
  checkedLink: s: LinkInfo[] = [[],
  ]
    for (const link of links) {
  if (this.visitedUrls.has(link.url)) {
  continue;
}

      this.visitedUrls.add(link.url)

      if (this.isInternalLink(link.url)) {
  const exists = await this.checkPageExists(link.url)
        if (if (exists) {
  ) {
          link.status = 'working'
} else {
  link.status = 'missing'
          this.missingPages.push(link.url)
}
}
        },
  } else {
  link.status = 'external'
}
}
}

      checkedLinks.push(link)
    }

    return {
  pa,
  t: h: pagePath,tit,
  l: e: this.extractPageTitle(pageContent),lin,
  k: s: checkedLinks,exis,
  t: s: true;
}
}
},
  }

  // Extract page title;
  private extractPageTitle(conte,
  n: t: string): string {
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i)
    return titleMatch ? titleMatch[1].trim() : 'Untitled'
}
}
}

  // Get analysis summary;
  getSummary() {
  return {
  totalLin,
  k: s: this.visitedUrls.size,brokenLin,
  k: s: this.brokenLinks.length,missingPag,
  e: s: this.missingPages.length,externalLin,
  k: s: Array.from(this.visitedUrls).filter(url => !this.isInternalLink(url)).length;
}
}
},
  }

  // Get all broken links;
  getBrokenLinks(): LinkInfo[],
  {
  return this.brokenLinks;
}

  // Get all missing pages;
  getMissingPages(): string[],
  {
  return this.missingPages;
},
  }

export default LinkChecker;