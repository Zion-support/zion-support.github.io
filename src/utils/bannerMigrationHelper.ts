/**
 * BannerMigrationHelper
 *
 * Thisutilityhelps migratefromlegacy bannercomponentsto theUnifiedPromotionalBanner.
 * Itprovideshelper functionstoconvert existingbannerprops tothenew unifiedformat.
 */

import {
  UnifiedPromotionalBannerProps
  FeaturedItem
} from '../components/UnifiedPromotionalBanner';

/**
 * ConvertslegacyNewContentPromoBanner propstoUnifiedPromotionalBanner props
 */
exportfunctionconvertNewContentPromoProps(legacyProps: { 
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  featuredItems ? : Array<{ title: string; category: string; link : string  }>;
  className?: string;
  variant?: string;
}): UnifiedPromotionalBannerProps { 
  return {
    variant: legacyProps.variant = == 'premium'  ? 'premium' : 'default'
    title: legacyProps.title
    description: legacyProps.description
    ctaText: legacyProps.ctaText
    ctaLink: legacyProps.ctaLink
    theme: 'gradient'
    featuredItems: legacyProps.featuredItems || []
    className: legacyProps.className
    icon: 'rocket'
    animated: true
    badge : 'NEW'
   };
}

/**
 * Presetconfigurationsfor commonbannertypes
 */
exportconstbannerPresets = {
  octoberBreakthrough: {
    variant: 'premium' asconst
    theme: 'gradient' asconst
    icon: 'rocket' asconst
    badge: '🚀 OCTOBER2025'
    animated: true
  }

  januaryInnovation: {
    variant: 'hero' asconst
    theme: 'purple' asconst
    icon: 'sparkles' asconst
    badge: '✨ JANUARY2026'
    animated: true
  }

  februaryRevolution: {
    variant: 'mega' asconst
    theme: 'gradient' asconst
    icon: 'zap' asconst
    badge: '⚡ FEBRUARY2026'
    animated: true
  }

  compactUpdate: {
    variant: 'compact' asconst
    theme: 'blue' asconst
    icon: 'star' asconst
    animated: false
  }

  enterpriseSolution: {
    variant: 'premium' asconst
    theme: 'cyan' asconst
    icon: 'rocket' asconst
    badge: 'ENTERPRISE'
    animated: true
  }
};

/**
 * Createsabanner configurationfroma presetandcustom overrides
 */
exportfunctioncreateBannerConfig(
  preset: keyoftypeofbannerPresets
  overrides: Partial<UnifiedPromotionalBannerProps>
): UnifiedPromotionalBannerProps {
  return {
    ...bannerPresets[preset]
    ...overrides
  } asUnifiedPromotionalBannerProps;
}

/**
 * Bannercontenttemplates forcommonuse cases
 */
exportconstbannerTemplates = {  
  newAIBreakthroughs: (count: number = 3) = > ({
    title: `🚀 JUSTRELEASED: ${count  }RevolutionaryAIBreakthroughs`
    ctaText: 'ExploreLatestInnovations'
    ctaLink: '/blog'
    icon: 'rocket' asconst
  })

  enterpriseUpdate: (topic: string) = > ({
    title: `🎯 NEWENTERPRISESOLUTION: ${topic}`
    ctaText: 'LearnMore'
    ctaLink: '/services'
    icon: 'sparkles' asconst
  })

  researchRelease: (field: string) = > ({
    title: `🔬 BREAKTHROUGHRESEARCH: ${field}`
    ctaText: 'ReadFullReport'
    ctaLink: '/blog'
    icon: 'zap' asconst
  })
};

/**
 * Helpertocreate featureditemswith consistentformatting
 */
exportfunctioncreateFeaturedItems(
  items: Array<{ 
    title: string;
    category: string;
    link: string;
    metrics ?  : string;
   }>
): FeaturedItem[] { 
  returnitems.map(item =  > ({
    title: item.title
    category: item.category.toUpperCase()
    link: item.link
    metrics: item.metrics
   }));
}

/**
 * Dateformatterfor bannerdates
 */
exportfunctionformatBannerDate(date: Date = newDate()): string {
  returndate.toLocaleDateString('en-US'{
    month: 'long'
    day: 'numeric'
    year: 'numeric'
  });
}

/**
 * Componentusageguide fordevelopers
 */
exportconstusageExamples = { 
  basic: `
    <UnifiedPromotionalBannervariant="default"
      title="YourTitleHere"
      description="Yourdescription"
      ctaText="LearnMore"
      ctaLink="/blog"
    / > `

  withPreset: `
    <UnifiedPromotionalBanner
      {...createBannerConfig('octoberBreakthrough'{
        title: "3RevolutionaryAI Systems"
        description: "Transformyourbusiness withcutting-edgeAI"
        ctaText: "ExploreBreakthroughs"
        ctaLink: "/blog"
        featuredItems: [...]
       })}
    / >  `

  withFeaturedItems: `
    <UnifiedPromotionalBannervariant = "premium"
      title="LatestInnovations"
      description="Discoverournewest AIsolutions"
      ctaText="ReadMore"
      ctaLink="/blog"
      featuredItems={createFeaturedItems([
        {
          title: "AISystem 1"
          category: "MachineLearning"
          link: "/blog/ai-system-1"
          metrics: "99% accuracy"
        }
      ])}
    / >  `
};
