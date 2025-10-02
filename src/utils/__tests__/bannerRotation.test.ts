/**
 * Tests for Banner Rotation System
 */

import {

} from '../bannerRotation';

describe('Banner Rotation System', () => {// Sample test banners
  const testBanners: BannerConfig[] = [
    {
      id: 'banner1',
      component: 'TestBanner1',
      priority: 10,
      category: 'breakthrough',
      impressions: 1000,
      clicks: 50,
      active: true}
    {id: 'banner2',
      component: 'TestBanner2',
      priority: 8,
      category: 'enterprise',
      impressions: 800,
      clicks: 80,
      active: true}
    {id: 'banner3',
      component: 'TestBanner3',
      priority: 6,
      category: 'innovation',
      impressions: 500,
      clicks: 25,
      active: true}
    {id: 'banner4',
      component: 'TestBanner4',
      priority: 9,
      category: 'breakthrough',
      impressions: 0,
      clicks: 0,
      active: false}
  ];

  describe('calculateEngagementScore', () => {
    it('should calculate correct CTR for banner with impressions', () => {
      const score = calculateEngagementScore(testBanners[0]);
      expect(score).toBe(5); // 50/1000 * 100 = 5%
    });

    it('should return 0 for banner without impressions', () => {
      const score = calculateEngagementScore(testBanners[3]);
      expect(score).toBe(0);
    });

    it('should handle banner with only impressions', () => {
      const banner = { ...testBanners[0], clicks: 0 };
      const score = calculateEngagementScore(banner);
      expect(score).toBe(0);
    });
  });

  describe('calculateFreshnessScore', () => {
    it('should return 100 for never-shown banner', () => {
      const banner = { ...testBanners[0], lastShown: undefined };
      const score = calculateFreshnessScore(banner);
      expect(score).toBe(100);
    });

    it('should return lower score for recently shown banner', () => {
      const banner = {
        ...testBanners[0],
        lastShown: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeLessThan(20);
    });

    it('should return higher score for banner not shown in 24+ hours', () => {
      const banner = {
        ...testBanners[0],
        lastShown: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeGreaterThan(80);
    });
  });

  describe('calculateBannerScore', () => {
    it('should calculate weighted score correctly', () => {
      const score = calculateBannerScore(testBanners[0]);
      expect(score).toBeGreaterThan(0);
    });

    it('should prioritize high-priority banners', () => {
      const score1 = calculateBannerScore(testBanners[0]); // priority 10
      const score2 = calculateBannerScore(testBanners[2]); // priority 6
      expect(score1).toBeGreaterThan(score2);
    });
  });

  describe('selectBannersForDisplay', () => {
    it('should return specified number of banners', () => {
      const selected = selectBannersForDisplay(testBanners, {
        maxVisible: 2,
        rotationInterval: 300000,
        priorityWeight: 0.5,
        freshnessWeight: 0.3,
        engagementWeight: 0.2,
      });
      expect(selected).toHaveLength(2);
    });

    it('should only return active banners', () => {
      const selected = selectBannersForDisplay(testBanners);
      expect(selected.every(b => b.active)).toBe(true);
    });

    it('should sort banners by score', () => {
      const selected = selectBannersForDisplay(testBanners);
      // Verify scores are in descending order
      for (let i = 0; i < selected.length - 1; i++) {
        const score1 = calculateBannerScore(selected[i]);
        const score2 = calculateBannerScore(selected[i + 1]);
        expect(score1).toBeGreaterThanOrEqual(score2);
      }
    });
  });

  describe('groupBannersByCategory', () => {
    it('should group banners correctly', () => {
      const grouped = groupBannersByCategory(testBanners);
      expect(grouped['breakthrough']).toHaveLength(2);
      expect(grouped['enterprise']).toHaveLength(1);
      expect(grouped['innovation']).toHaveLength(1);
    });
  });

  describe('selectBalancedBanners', () => {
    it('should select banners from multiple categories', () => {
      const selected = selectBalancedBanners(testBanners, 1, 3);
      const categories = selected.map(b => b.category);
      const uniqueCategories = new Set(categories);
      expect(uniqueCategories.size).toBeGreaterThan(1);
    });

    it('should respect max per category limit', () => {
      const selected = selectBalancedBanners(testBanners, 1, 5);
      const grouped = groupBannersByCategory(selected);
      Object.values(grouped).forEach(group => {
        expect(group.length).toBeLessThanOrEqual(1);
      });
    });

    it('should respect total max limit', () => {
      const selected = selectBalancedBanners(testBanners, 2, 3);
      expect(selected.length).toBeLessThanOrEqual(3);
    });
  });
});
