export interface LinkHealthStatus {
  url: string;
  status: 'healthy' | 'broken' | 'external' | 'unknown';
  httpStatus?: number;
  error?: string;
  lastChecked: Date;
  parentPage?: string;
}

export interface LinkHealthReport {
  totalLinks: number;
  healthyLinks: number;
  brokenLinks: number;
  externalLinks: number;
  unknownLinks: number;
  details: LinkHealthStatus[];
  recommendations: string[];
}

export class LinkHealthChecker {
  private static instance: LinkHealthChecker;
  private checkedLinks: Map<string, LinkHealthStatus> = new Map();

  static getInstance(): LinkHealthChecker {
    if (!LinkHealthChecker.instance) {
      LinkHealthChecker.instance = new LinkHealthChecker();
    }
    return LinkHealthChecker.instance;
  }

  async checkLink(url: string, parentPage?: string): Promise<LinkHealthStatus> {
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

    return {
      totalLinks,
      healthyLinks,
      brokenLinks,
      externalLinks,
      unknownLinks,
      details,
      recommendations
    };
  }

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