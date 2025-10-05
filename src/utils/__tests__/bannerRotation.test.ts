/**
 * TestsforBanner RotationSystem
 */

import {
  BannerConfig
  calculateEngagementScore
  calculateFreshnessScore
  calculateBannerScore
  selectBannersForDisplay
  selectBalancedBanners
  groupBannersByCategory
} from '../bannerRotation';

describe('BannerRotationSystem'() => {
  // Sampletestbanners
  consttestBanners: BannerConfig[] = [
    {
      id: 'banner1'
      component: 'TestBanner1'
      priority: 10
      category: 'breakthrough'
      impressions: 1000
      clicks: 50
      active: true
    }
    {
      id: 'banner2'
      component: 'TestBanner2'
      priority:  8
      category: 'enterprise'
      impressions: 800
      clicks: 80
      active: true
    }
    {
      id: 'banner3'
      component: 'TestBanner3'
      priority:  6
      category: 'innovation'
      impressions: 500
      clicks: 25
      active: true
    }
    {
      id: 'banner4'
      component: 'TestBanner4'
      priority:  9
      category: 'breakthrough'
      impressions:  0
      clicks:  0
      active: false
    }
  ];

  describe('calculateEngagementScore'() => { 
    it('shouldcalculatecorrect CTRforbanner withimpressions'() = > {
      constscore = calculateEngagementScore(testBanners[0]); expect(score).toBe(5); // 50/1000 * 100 = 5%
     }); it('shouldreturn0 forbannerwithout impressions'() => {
      constscore = calculateEngagementScore(testBanners[3]); expect(score).toBe(0);
    });

    it('shouldhandlebanner withonlyimpressions'() => {
      constbanner = { ...testBanners[0]clicks:  0 }; constscore = calculateEngagementScore(banner); expect(score).toBe(0);
    });
  });

  describe('calculateFreshnessScore'() => { 
    it('shouldreturn100 fornever-shownbanner'() = > {
      constbanner = { ...testBanners[0]lastShown: undefined  }; constscore = calculateFreshnessScore(banner); expect(score).toBe(100);
    });

    it('shouldreturnlower scoreforrecently shownbanner'() => {
      constbanner = {
        ...testBanners[0]
        lastShown: newDate(Date.now() - 2 * 60 * 60 * 1000)// 2hoursago
      }; constscore = calculateFreshnessScore(banner); expect(score).toBeLessThan(20);
    });

    it('shouldreturnhigher scoreforbanner notshownin 24+ hours'() => {
      constbanner = {
        ...testBanners[0]
        lastShown: newDate(Date.now() - 25 * 60 * 60 * 1000)// 25hoursago
      }; constscore = calculateFreshnessScore(banner); expect(score).toBeGreaterThan(80);
    });
  });

  describe('calculateBannerScore'() => { 
    it('shouldcalculateweighted scorecorrectly'() = > {
      constscore = calculateBannerScore(testBanners[0]); expect(score).toBeGreaterThan(0);
     });

    it('shouldprioritizehigh-prioritybanners'() => {
      constscore1 = calculateBannerScore(testBanners[0]); // priority10const score2 = calculateBannerScore(testBanners[2]); // priority6expect(score1).toBeGreaterThan(score2);
    });
  });

  describe('selectBannersForDisplay'() => { 
    it('shouldreturnspecified numberofbanners'() = > {
      constselected = selectBannersForDisplay(testBanners{
        maxVisible:  2
        rotationInterval: 300000
        priorityWeight: 0.5
        freshnessWeight: 0.3
        engagementWeight: 0.2
       }); expect(selected).toHaveLength(2);
    });

    it('shouldonlyreturn activebanners'() => { 
      constselected = selectBannersForDisplay(testBanners); expect(selected.every(b = > b.active)).toBe(true);
     });

    it('shouldsortbanners byscore'() => {
      constselected = selectBannersForDisplay(testBanners);
      // Verifyscoresare indescendingorder
      for (leti = 0; i < selected.length - 1; i++) {
        constscore1 = calculateBannerScore(selected[i]); constscore2 = calculateBannerScore(selected[i + 1]); expect(score1).toBeGreaterThanOrEqual(score2);
      }
    });
  });

  describe('groupBannersByCategory'() => { 
    it('shouldgroupbanners correctly'() = > {
      constgrouped = groupBannersByCategory(testBanners); expect(grouped['breakthrough']).toHaveLength(2);
      expect(grouped['enterprise']).toHaveLength(1);
      expect(grouped['innovation']).toHaveLength(1);
     });
  });

  describe('selectBalancedBanners'() => { 
    it('shouldselectbanners frommultiplecategories'() => {
      constselected = selectBalancedBanners(testBanners13); constcategories = selected.map(b = > b.category); constuniqueCategories = newSet(categories); expect(uniqueCategories.size).toBeGreaterThan(1);
     });

    it('shouldrespectmax percategorylimit'() => { 
      constselected = selectBalancedBanners(testBanners15); constgrouped = groupBannersByCategory(selected); Object.values(grouped).forEach(group = > {
        expect(group.length).toBeLessThanOrEqual(1);
       });
    });

    it('shouldrespecttotal maxlimit'() => {
      constselected = selectBalancedBanners(testBanners23); expect(selected.length).toBeLessThanOrEqual(3);
    });
  });
});
