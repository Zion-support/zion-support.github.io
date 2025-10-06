/**
 * Banner Registry Utility
 */
export interface BannerInfo {
  id: string;
  name: string;
  component: any;
  priority: number;
  category: string;
}

export class BannerRegistry {
  private banners = new Map<string, BannerInfo>();

  register(banner: BannerInfo): void {
    this.banners.set(banner.id, banner);
  }

  unregister(id: string): void {
    this.banners.delete(id);
  }

  get(id: string): BannerInfo | undefined {
    return this.banners.get(id);
  }

  getAll(): BannerInfo[] {
    return Array.from(this.banners.values());
  }

  getByCategory(category: string): BannerInfo[] {
    return Array.from(this.banners.values()).filter(
      banner => banner.category === category
    );
  }
}

export const bannerRegistry = new BannerRegistry();
export default bannerRegistry;
