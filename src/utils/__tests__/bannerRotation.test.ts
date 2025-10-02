/**
 * Tests for Banner Rotation System
 */

import {

<<<<<<< HEAD
} from '../bannerRotation';
describe('Banner Rotation System', () => {;
  // Sample test banners
  const testBanners: BannerConfig[] = [,
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

  describe('calculateEngagementScore', () => {;
    it('should calculate correct CTR for banner with impressions', () => {;
=======
} from '../bannerRotation';';

describe('Banner Rotation System', () => {';
  // Sample test banners
  const testBanners: BannerConfig[] = [,
    {
      id: 'banner1',';,
      component: 'TestBanner1',';,
      priority: 10,,
      category: 'breakthrough',';,
      impressions: 1000,,
      clicks: 50,,
      active: true,,
    },
    {
      id: 'banner2',';,
      component: 'TestBanner2',';,
      priority: 8,,
      category: 'enterprise',';,
      impressions: 800,,
      clicks: 80,,
      active: true,,
    },
    {
      id: 'banner3',';,
      component: 'TestBanner3',';,
      priority: 6,,
      category: 'innovation',';,
      impressions: 500,,
      clicks: 25,,
      active: true,,
    },
    {
      id: 'banner4',';,
      component: 'TestBanner4',';,
      priority: 9,,
      category: 'breakthrough',';,
      impressions: 0,,
      clicks: 0,,
      active: false,,
    },
  ];

  describe('calculateEngagementScore', () => {';
    it('should calculate correct CTR for banner with impressions', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const score = calculateEngagementScore(testBanners[0]);
      expect(score).toBe(5); // 50/1000 * 100 = 5%
    });

<<<<<<< HEAD
    it('should return 0 for banner without impressions', () => {;
=======
    it('should return 0 for banner without impressions', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const score = calculateEngagementScore(testBanners[3]);
      expect(score).toBe(0);
    });

<<<<<<< HEAD
    it('should handle banner with only impressions', () => {;
=======
    it('should handle banner with only impressions', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const banner = { ...testBanners[0], clicks: 0 };
      const score = calculateEngagementScore(banner);
      expect(score).toBe(0);
    });
  });

<<<<<<< HEAD
  describe('calculateFreshnessScore', () => {;
    it('should return 100 for never-shown banner', () => {;
=======
  describe('calculateFreshnessScore', () => {';
    it('should return 100 for never-shown banner', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const banner = { ...testBanners[0], lastShown: undefined };
      const score = calculateFreshnessScore(banner);
      expect(score).toBe(100);
    });

<<<<<<< HEAD
    it('should return lower score for recently shown banner', () => {;
      const banner = {
        ...testBanners[0]
        lastShown: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
=======
    it('should return lower score for recently shown banner', () => {';
      const banner = {
        ...testBanners[0],
        lastShown: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeLessThan(20);
    });

<<<<<<< HEAD
    it('should return higher score for banner not shown in 24+ hours', () => {;
      const banner = {
        ...testBanners[0]
        lastShown: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
=======
    it('should return higher score for banner not shown in 24+ hours', () => {';
      const banner = {
        ...testBanners[0],
        lastShown: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      };
      const score = calculateFreshnessScore(banner);
      expect(score).toBeGreaterThan(80);
    });
  });

<<<<<<< HEAD
  describe('calculateBannerScore', () => {;
    it('should calculate weighted score correctly', () => {;
=======
  describe('calculateBannerScore', () => {';
    it('should calculate weighted score correctly', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const score = calculateBannerScore(testBanners[0]);
      expect(score).toBeGreaterThan(0);
    });

<<<<<<< HEAD
    it('should prioritize high-priority banners', () => {;
=======
    it('should prioritize high-priority banners', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const score1 = calculateBannerScore(testBanners[0]); // priority 10
      const score2 = calculateBannerScore(testBanners[2]); // priority 6
      expect(score1).toBeGreaterThan(score2);
    });
  });

<<<<<<< HEAD
  describe('selectBannersForDisplay', () => {;
    it('should return specified number of banners', () => {;
      const selected = selectBannersForDisplay(testBanners, {
        maxVisible: 2,
        rotationInterval: 300000,
        priorityWeight: 0.5,
        freshnessWeight: 0.3,
        engagementWeight: 0.2
=======
  describe('selectBannersForDisplay', () => {';
    it('should return specified number of banners', () => {';
      const selected = selectBannersForDisplay(testBanners, {
        maxVisible: 2,,
        rotationInterval: 300000,,
        priorityWeight: 0.5,,
        freshnessWeight: 0.3,,
        engagementWeight: 0.2,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
      expect(selected).toHaveLength(2);
    });

<<<<<<< HEAD
    it('should only return active banners', () => {;
=======
    it('should only return active banners', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const selected = selectBannersForDisplay(testBanners);
      expect(selected.every(b => b.active)).toBe(true);
    });

<<<<<<< HEAD
    it('should sort banners by score', () => {;
=======
    it('should sort banners by score', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const selected = selectBannersForDisplay(testBanners);
      // Verify scores are in descending order
      for (let i = 0; i < selected.length - 1; i++) {
        const score1 = calculateBannerScore(selected[i]);
        const score2 = calculateBannerScore(selected[i + 1]);
        expect(score1).toBeGreaterThanOrEqual(score2);
      }
    });
  });

<<<<<<< HEAD
  describe('groupBannersByCategory', () => {;
    it('should group banners correctly', () => {;
=======
  describe('groupBannersByCategory', () => {';
    it('should group banners correctly', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const grouped = groupBannersByCategory(testBanners);
      expect(grouped['breakthrough']).toHaveLength(2);';
      expect(grouped['enterprise']).toHaveLength(1);';
      expect(grouped['innovation']).toHaveLength(1);';
    });
  });

<<<<<<< HEAD
  describe('selectBalancedBanners', () => {;
    it('should select banners from multiple categories', () => {;
=======
  describe('selectBalancedBanners', () => {';
    it('should select banners from multiple categories', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const selected = selectBalancedBanners(testBanners, 1, 3);
      const categories = selected.map(b => b.category);
      const uniqueCategories = new Set(categories);
      expect(uniqueCategories.size).toBeGreaterThan(1);
    });

<<<<<<< HEAD
    it('should respect max per category limit', () => {;
=======
    it('should respect max per category limit', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const selected = selectBalancedBanners(testBanners, 1, 5);
      const grouped = groupBannersByCategory(selected);
      Object.values(grouped).forEach(group => {
        expect(group.length).toBeLessThanOrEqual(1);
      });
    });

<<<<<<< HEAD
    it('should respect total max limit', () => {;
=======
    it('should respect total max limit', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const selected = selectBalancedBanners(testBanners, 2, 3);
      expect(selected.length).toBeLessThanOrEqual(3);
    });
  });
});
;