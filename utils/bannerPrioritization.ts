/**
 * Banner Prioritization Utility
 */
export interface BannerPriority {
  id: string;
  priority: number;
  category: string;
}

export class BannerPrioritizer {
  private banners: BannerPriority[] = [];

  addBanner(banner: BannerPriority): void {
    this.banners.push(banner);
    this.sortBanners();
  }

  removeBanner(id: string): void {
    this.banners = this.banners.filter(banner => banner.id !== id);
  }

  getBanners(): BannerPriority[] {
    return [...this.banners];
  }

  getBannersByCategory(category: string): BannerPriority[] {
    return this.banners.filter(banner => banner.category === category);
  }

  private sortBanners(): void {
    this.banners.sort((a, b) => b.priority - a.priority);
  }
}

export const bannerPrioritizer = new BannerPrioritizer();
export default bannerPrioritizer;
