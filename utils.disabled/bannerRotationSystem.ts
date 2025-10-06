/**
 * Banner Rotation System Utility
 */

interface BannerConfig {
  id: string;
  component: string;
  priority: number;
  maxDailyImpressions?: number;
  targetAudience?: string[];
  conversionGoal?: string;
  abTestGroup?: 'A' | 'B' | 'control';
}

interface BannerImpression {
  bannerId: string;
  timestamp: number;
  sessionId: string;
  pageUrl: string;
  userAgent: string;
  conversion?: boolean;
}

interface RotationRule {
  id: string;
  name: string;
  condition: (impression: BannerImpression) => boolean;
  priority: number;
  enabled: boolean;
}

export class BannerRotationSystem {
  private banners: Map<string, BannerConfig> = new Map();
  private impressions: BannerImpression[] = [];
  private rotationRules: RotationRule[] = [];
  private currentSessionId: string;
  private rotationInterval: number = 30000; // 30 seconds
  private intervalId?: NodeJS.Timeout;

  constructor() {
    this.currentSessionId = this.generateSessionId();
    this.initializeDefaultRules();
    this.startRotation();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeDefaultRules(): void {
    // Rule 1: New user priority
    this.addRule({
      id: 'new_user_priority',
      name: 'New User Priority',
      condition: (impression) => {
        const userImpressions = this.impressions.filter(imp => imp.sessionId === impression.sessionId);
        return userImpressions.length < 3;
      },
      priority: 10,
      enabled: true,
    });

    // Rule 2: High conversion banners
    this.addRule({
      id: 'high_conversion_priority',
      name: 'High Conversion Priority',
      condition: (impression) => {
        const banner = this.banners.get(impression.bannerId);
        return banner?.conversionGoal === 'high';
      },
      priority: 8,
      enabled: true,
    });

    // Rule 3: Time-based rotation
    this.addRule({
      id: 'time_based_rotation',
      name: 'Time-based Rotation',
      condition: (impression) => {
        const now = Date.now();
        const lastImpression = this.impressions
          .filter(imp => imp.bannerId === impression.bannerId)
          .sort((a, b) => b.timestamp - a.timestamp)[0];
        
        return !lastImpression || (now - lastImpression.timestamp) > this.rotationInterval;
      },
      priority: 5,
      enabled: true,
    });
  }

  public addBanner(config: BannerConfig): void {
    this.banners.set(config.id, config);
  }

  public removeBanner(id: string): void {
    this.banners.delete(id);
  }

  public addRule(rule: RotationRule): void {
    this.rotationRules.push(rule);
    this.rotationRules.sort((a, b) => b.priority - a.priority);
  }

  public removeRule(id: string): void {
    this.rotationRules = this.rotationRules.filter(rule => rule.id !== id);
  }

  public recordImpression(bannerId: string, pageUrl: string = window.location.href): void {
    const impression: BannerImpression = {
      bannerId,
      timestamp: Date.now(),
      sessionId: this.currentSessionId,
      pageUrl,
      userAgent: navigator.userAgent,
    };

    this.impressions.push(impression);
    this.cleanupOldImpressions();
  }

  public recordConversion(bannerId: string): void {
    const lastImpression = this.impressions
      .filter(imp => imp.bannerId === bannerId && imp.sessionId === this.currentSessionId)
      .sort((a, b) => b.timestamp - a.timestamp)[0];

    if (lastImpression) {
      lastImpression.conversion = true;
    }
  }

  public getNextBanner(): BannerConfig | null {
    const availableBanners = Array.from(this.banners.values())
      .filter(banner => this.isBannerAvailable(banner));

    if (availableBanners.length === 0) {
      return null;
    }

    // Apply rotation rules
    const scoredBanners = availableBanners.map(banner => ({
      banner,
      score: this.calculateBannerScore(banner),
    }));

    // Sort by score (descending) and return the highest scoring banner
    scoredBanners.sort((a, b) => b.score - a.score);
    return scoredBanners[0].banner;
  }

  private isBannerAvailable(banner: BannerConfig): boolean {
    // Check daily impression limit
    if (banner.maxDailyImpressions) {
      const today = new Date().toDateString();
      const todayImpressions = this.impressions.filter(imp => {
        const impressionDate = new Date(imp.timestamp).toDateString();
        return imp.bannerId === banner.id && impressionDate === today;
      }).length;

      if (todayImpressions >= banner.maxDailyImpressions) {
        return false;
      }
    }

    return true;
  }

  private calculateBannerScore(banner: BannerConfig): number {
    let score = banner.priority;

    // Apply rotation rules
    const mockImpression: BannerImpression = {
      bannerId: banner.id,
      timestamp: Date.now(),
      sessionId: this.currentSessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    for (const rule of this.rotationRules) {
      if (rule.enabled && rule.condition(mockImpression)) {
        score += rule.priority;
      }
    }

    // Reduce score for recently shown banners
    const recentImpressions = this.impressions.filter(imp => {
      return imp.bannerId === banner.id && 
             (Date.now() - imp.timestamp) < this.rotationInterval;
    });

    score -= recentImpressions.length * 2;

    return Math.max(0, score);
  }

  private cleanupOldImpressions(): void {
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    this.impressions = this.impressions.filter(imp => imp.timestamp > oneDayAgo);
  }

  private startRotation(): void {
    this.intervalId = setInterval(() => {
      this.performRotation();
    }, this.rotationInterval);
  }

  private performRotation(): void {
    // This method can be used to trigger rotation events
    // or perform cleanup tasks
    this.cleanupOldImpressions();
  }

  public stopRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public getRotationStats(): object {
    const totalImpressions = this.impressions.length;
    const conversions = this.impressions.filter(imp => imp.conversion).length;
    const conversionRate = totalImpressions > 0 ? (conversions / totalImpressions) * 100 : 0;

    const bannerStats = Array.from(this.banners.values()).map(banner => {
      const bannerImpressions = this.impressions.filter(imp => imp.bannerId === banner.id);
      const bannerConversions = bannerImpressions.filter(imp => imp.conversion).length;
      
      return {
        id: banner.id,
        component: banner.component,
        impressions: bannerImpressions.length,
        conversions: bannerConversions,
        conversionRate: bannerImpressions.length > 0 ? 
          (bannerConversions / bannerImpressions.length) * 100 : 0,
      };
    });

    return {
      totalImpressions,
      conversions,
      conversionRate: Math.round(conversionRate * 100) / 100,
      activeBanners: this.banners.size,
      activeRules: this.rotationRules.filter(rule => rule.enabled).length,
      bannerStats: bannerStats.sort((a, b) => b.impressions - a.impressions),
    };
  }

  public destroy(): void {
    this.stopRotation();
    this.banners.clear();
    this.impressions = [];
    this.rotationRules = [];
  }
}

// Utility functions
export const createBannerRotationSystem = (): BannerRotationSystem => {
  return new BannerRotationSystem();
};

export const rotateBanners = (system: BannerRotationSystem): BannerConfig | null => {
  return system.getNextBanner();
};

export default BannerRotationSystem;