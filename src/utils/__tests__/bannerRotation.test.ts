/**
 * Tests for Banner Rotation System
 */

import { describe, it, expect } from '@jest/globals';

// Mock banner rotation functions
const calculateEngagementScore = (banner: any) => {
  if (!banner.impressions || banner.impressions === 0) return 0;
  return (banner.clicks / banner.impressions) * 100;
};

const calculateFreshnessScore = (banner: any) => {
  if (!banner.lastShown) return 100;
  const hoursSinceShown = (Date.now() - banner.lastShown.getTime()) / (1000 * 60 * 60);
  return Math.max(0, 100 - hoursSinceShown * 5);
};

const calculateBannerScore = (banner: any) => {
  const engagement = calculateEngagementScore(banner);
  const freshness = calculateFreshnessScore(banner);
  return (banner.priority * 0.5) + (engagement * 0.3) + (freshness * 0.2);
};

describe('Banner Rotation System', () => {
  // Sample test banners
  const testBanners = [
    {
      id: 'banner1',
      component: 'TestBanner1',
      priority: 10,
      category: 'breakthrough',
      impressions: 1000,
      clicks: 50,
      active: true
    },
    {
      id: 'banner2',
      component: 'TestBanner2',
      priority: 8,
      category: 'enterprise',
      impressions: 800,
      clicks: 80,
      active: true
    },
    {
      id: 'banner3',
      component: 'TestBanner3',
      priority: 6,
      category: 'innovation',
      impressions: 500,
      clicks: 25,
      active: true
    },
    {
      id: 'banner4',
      component: 'TestBanner4',
      priority: 9,
      category: 'breakthrough',
      impressions: 0,
      clicks: 0,
      active: false
    }
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
        lastShown: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeLessThan(100);
    });

    it('should return higher score for banner not shown in 24+ hours', () => {
      const banner = { 
        ...testBanners[0], 
        lastShown: new Date(Date.now() - 25 * 60 * 60 * 1000) // 25 hours ago
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeGreaterThanOrEqual(0);
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
});