export interface LinkHealthStatus {
  url: string;
<<<<<<< HEAD
  status: 'healthy' | 'broken' | 'redirect' | 'timeout';
=======
  status: 'healthy' | 'broken' | 'external' | 'unknown';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
  httpStatus?: number;
  error?: string;
  lastChecked: Date;
  parentPage?: string;
}

export interface LinkHealthReport {
  totalLinks: number;
  healthyLinks: number;
  brokenLinks: number;
<<<<<<< HEAD
  redirects: number;
  timeouts: number;
  brokenLinksList: LinkHealthStatus[];
=======
  externalLinks: number;
  unknownLinks: number;
  details: LinkHealthStatus[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
  recommendations: string[];
}

export class LinkHealthChecker {
  private static instance: LinkHealthChecker;
<<<<<<< HEAD
  private linkCache: Map<string, LinkHealthStatus> = new Map();
  private readonly timeoutMs = 10000;
=======
  private checkedLinks: Map<string, LinkHealthStatus> = new Map();
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913

  static getInstance(): LinkHealthChecker {
    if (!LinkHealthChecker.instance) {
      LinkHealthChecker.instance = new LinkHealthChecker();
    }
    return LinkHealthChecker.instance;
  }

  async checkLink(url: string, parentPage?: string): Promise<LinkHealthStatus> {
<<<<<<< HEAD
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
=======
    // Check if we already checked this link recently
    const existing = this.checkedLinks.get(url);
    if (existing && this.isRecentCheck(existing.lastChecked)) {
      return existing;
    }

    const status: LinkHealthStatus = {
      url,
      status: 'unknown',
      lastChecked: new Date(),
      parentPage
    };

    try {
      if (this.isExternalLink(url)) {
        status.status = 'external';
        // For external links, we'll mark them as healthy for now
        // In production, you might want to actually check them
      } else if (this.isInternalLink(url)) {
        // For internal links, check if the route exists
        if (this.isValidInternalRoute(url)) {
          status.status = 'healthy';
        } else {
          status.status = 'broken';
          status.error = 'Route not found in application';
        }
      } else if (this.isSpecialProtocol(url)) {
        // Handle tel:, mailto:, etc.
        status.status = 'healthy';
      } else {
        status.status = 'unknown';
        status.error = 'Unrecognized link format';
      }
    } catch (error) {
      status.status = 'broken';
      status.error = error instanceof Error ? error.message : 'Unknown error';
    }

    this.checkedLinks.set(url, status);
    return status;
  }

  private isRecentCheck(lastChecked: Date): boolean {
    const now = new Date();
    const diffInHours = (now.getTime() - lastChecked.getTime()) / (1000 * 60 * 60);
    return diffInHours < 24; // Consider checks older than 24 hours as stale
  }

  private isExternalLink(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }

  private isInternalLink(url: string): boolean {
    return url.startsWith('/') || url.startsWith('#');
  }

  private isSpecialProtocol(url: string): boolean {
    return url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('sms:');
  }

  private isValidInternalRoute(url: string): boolean {
    // Remove query parameters and hash
    const cleanUrl = url.split('?')[0].split('#')[0];
    
    // Define valid routes based on the App.tsx routing structure
    const validRoutes = [
      '/',
      '/services',
      '/ai-solutions',
      '/services-showcase',
      '/ai-matcher',
      '/talent-directory',
      '/talents',
      '/emerging-tech',
      '/ai-services',
      '/cloud-devops',
      '/enterprise-solutions',
      '/digital-transformation',
      '/quantum-neural-network-platform',
      '/autonomous-business-operations-platform',
      '/ai-powered-it-asset-management',
      '/soc2-compliance-automation',
      '/ai-autonomous-research-assistant',
      '/5g-enterprise-solutions',
      '/case-studies',
      '/help',
      '/about',
      '/contact',
      '/mission',
      '/team',
      '/pricing',
      '/careers',
      '/partners',
      '/blog',
      '/news',
      '/services-overview',
      '/services/ai-autonomous-systems',
      '/services/quantum-technology',
      '/services/cybersecurity',
      '/services/it-infrastructure',
      '/services/micro-saas-solutions',
      '/services/industry-solutions',
      '/services/innovative-new-services',
      '/services/specialized-it-infrastructure',
      '/innovative-micro-saas-services',
      '/comprehensive-innovative-services',
      '/services/enterprise',
      '/solutions/healthcare'
    ];

    return validRoutes.includes(cleanUrl);
  }

  async generateReport(): Promise<LinkHealthReport> {
    const details = Array.from(this.checkedLinks.values());
    const totalLinks = details.length;
    const healthyLinks = details.filter(d => d.status === 'healthy').length;
    const brokenLinks = details.filter(d => d.status === 'broken').length;
    const externalLinks = details.filter(d => d.status === 'external').length;
    const unknownLinks = details.filter(d => d.status === 'unknown').length;

    const recommendations = this.generateRecommendations(details);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913

    return {
      totalLinks,
      healthyLinks,
      brokenLinks,
<<<<<<< HEAD
      redirects,
      timeouts,
      brokenLinksList: links.filter(l => l.status !== 'healthy'),
=======
      externalLinks,
      unknownLinks,
      details,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
      recommendations
    };
  }

<<<<<<< HEAD
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
=======
  private generateRecommendations(details: LinkHealthStatus[]): string[] {
    const recommendations: string[] = [];

    const brokenLinks = details.filter(d => d.status === 'broken');
    if (brokenLinks.length > 0) {
      recommendations.push(`Fix ${brokenLinks.length} broken internal links`);
    }

    const externalLinks = details.filter(d => d.status === 'external');
    if (externalLinks.length > 0) {
      recommendations.push(`Verify ${externalLinks.length} external links are working`);
    }

    if (brokenLinks.length > 0) {
      recommendations.push('Implement proper error handling for broken links');
      recommendations.push('Add redirects for moved or renamed pages');
    }

    recommendations.push('Set up automated link health monitoring');
    recommendations.push('Implement proper 404 pages for broken routes');

    return recommendations;
  }

  getBrokenLinks(): LinkHealthStatus[] {
    return Array.from(this.checkedLinks.values()).filter(d => d.status === 'broken');
  }

  getHealthyLinks(): LinkHealthStatus[] {
    return Array.from(this.checkedLinks.values()).filter(d => d.status === 'healthy');
  }

  clearCache(): void {
    this.checkedLinks.clear();
  }
}

export default LinkHealthChecker;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8913
