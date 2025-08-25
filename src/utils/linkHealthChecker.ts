export interface LinkHealthStatus {
  url: string;
  status: 'healthy' | 'broken' | 'redirect' | 'timeout';
  httpStatus?: number;
  error?: string;
  lastChecked: Date;
  parentPage?: string;
}

export interface LinkHealthReport {
  totalLinks: number;
  healthyLinks: number;
  brokenLinks: number;
  redirects: number;
  timeouts: number;
  brokenLinksList: LinkHealthStatus[];
  recommendations: string[];
}

export class LinkHealthChecker {
  private static instance: LinkHealthChecker;
  private linkCache: Map<string, LinkHealthStatus> = new Map();
  private readonly timeoutMs = 10000;

  static getInstance(): LinkHealthChecker {
    if (!LinkHealthChecker.instance) {
      LinkHealthChecker.instance = new LinkHealthChecker();
    }
    return LinkHealthChecker.instance;
  }

  async checkLink(url: string, parentPage?: string): Promise<LinkHealthStatus> {
    // Check cache first
    const cached = this.linkCache.get(url);
    if (cached && Date.now() - cached.lastChecked.getTime() < 24 * 60 * 60 * 1000) {
      return cached;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

      const response = await fetch(url, {
        method: 'HEAD',
        signal: controller.signal,
        mode: 'no-cors' // Handle CORS issues
      });

      clearTimeout(timeoutId);

      const status: LinkHealthStatus = {
        url,
        status: 'healthy',
        httpStatus: response.status,
        lastChecked: new Date(),
        parentPage
      };

      if (response.status >= 400) {
        status.status = 'broken';
        status.error = `HTTP ${response.status}`;
      } else if (response.status >= 300 && response.status < 400) {
        status.status = 'redirect';
      }

      this.linkCache.set(url, status);
      return status;

    } catch (error) {
      const status: LinkHealthStatus = {
        url,
        status: 'broken',
        lastChecked: new Date(),
        parentPage,
        error: error instanceof Error ? error.message : 'Unknown error'
      };

      if (error instanceof Error && error.name === 'AbortError') {
        status.status = 'timeout';
        status.error = 'Request timeout';
      }

      this.linkCache.set(url, status);
      return status;
    }
  }

  async checkMultipleLinks(urls: string[], parentPage?: string): Promise<LinkHealthStatus[]> {
    const promises = urls.map(url => this.checkLink(url, parentPage));
    return Promise.all(promises);
  }

  generateReport(links: LinkHealthStatus[]): LinkHealthReport {
    const totalLinks = links.length;
    const healthyLinks = links.filter(l => l.status === 'healthy').length;
    const brokenLinks = links.filter(l => l.status === 'broken').length;
    const redirects = links.filter(l => l.status === 'redirect').length;
    const timeouts = links.filter(l => l.status === 'timeout').length;

    const recommendations: string[] = [];
    
    if (brokenLinks > 0) {
      recommendations.push(`Fix ${brokenLinks} broken links to improve user experience and SEO`);
    }
    
    if (redirects > 0) {
      recommendations.push(`Consider updating ${redirects} redirect links to direct URLs for better performance`);
    }
    
    if (timeouts > 0) {
      recommendations.push(`Investigate ${timeouts} timeout issues - consider increasing timeout or optimizing server response`);
    }

    if (healthyLinks / totalLinks < 0.9) {
      recommendations.push('Overall link health is below 90% - implement regular link monitoring');
    }

    return {
      totalLinks,
      healthyLinks,
      brokenLinks,
      redirects,
      timeouts,
      brokenLinksList: links.filter(l => l.status !== 'healthy'),
      recommendations
    };
  }

  getCommonBrokenLinkPatterns(): string[] {
    return [
      'tel:+1 302 464 0950',
      'mailto:kleber@ziontechgroup.com',
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/Zion-Holdings',
      'https://youtube.com/@ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://instagram.com/ziontechgroup',
      'https://discord.gg/ziontechgroup',
      'https://twitch.tv/ziontechgroup'
    ];
  }

  suggestFixes(brokenLink: LinkHealthStatus): string[] {
    const fixes: string[] = [];

    if (brokenLink.url.startsWith('tel:')) {
      fixes.push('Replace with clickable phone number that opens phone app');
    } else if (brokenLink.url.startsWith('mailto:')) {
      fixes.push('Replace with contact form or ensure email client is properly configured');
    } else if (brokenLink.url.includes('linkedin.com')) {
      fixes.push('Verify LinkedIn company page exists or remove link');
    } else if (brokenLink.url.includes('twitter.com')) {
      fixes.push('Verify Twitter/X account exists or remove link');
    } else if (brokenLink.url.includes('github.com')) {
      fixes.push('Verify GitHub organization exists or remove link');
    } else if (brokenLink.httpStatus === 404) {
      fixes.push('Page not found - check if URL has changed or page was removed');
    } else if (brokenLink.httpStatus === 429) {
      fixes.push('Rate limited - implement exponential backoff for API calls');
    }

    return fixes;
  }
}

export const linkHealthChecker = LinkHealthChecker.getInstance();