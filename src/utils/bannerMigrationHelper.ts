/**
 * Banner Migration Helper
 * 
 * This utility helps migrate from legacy banner components to the UnifiedPromotionalBanner.
 * It provides helper functions to convert existing banner props to the new unified format.
 */


/**
 * Converts legacy NewContentPromoBanner props to UnifiedPromotionalBanner props
 */
<<<<<<< HEAD
export function convertNewContentPromoProps(legacyProps: {
title: string;
description: string;
ctaText: string;
ctaLink: string;
=======
export function convertNewContentPromoProps(legacyProps: {,
title: string;,
description: string;,
ctaText: string;,
ctaLink: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
featuredItems?: Array<{ title: string; category: string; link: string
}>;
  className?: string;
  variant?: string;
}): UnifiedPromotionalBannerProps {
  return {
<<<<<<< HEAD
    variant: legacyProps.variant === 'premium' ? 'premium' : 'default',',
=======
    variant: legacyProps.variant === 'premium' ? 'premium' : 'default',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    title: legacyProps.title,,
    description: legacyProps.description,,
    ctaText: legacyProps.ctaText,,
    ctaLink: legacyProps.ctaLink,,
<<<<<<< HEAD
    theme: 'gradient',',
    featuredItems: legacyProps.featuredItems || [],,
    className: legacyProps.className,,
    icon: 'rocket',',
    animated: true,,
    badge: 'NEW};
=======
    theme: 'gradient',';,
    featuredItems: legacyProps.featuredItems || [],,
    className: legacyProps.className,,
    icon: 'rocket',';,
    animated: true,,
    badge: 'NEW',
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
}

/**
 * Preset configurations for common banner types
 */
export const bannerPresets = {
  octoberBreakthrough: {,
<<<<<<< HEAD
    variant: 'premium' as const,
    theme: 'gradient' as const,
    icon: 'rocket' as const,
    badge: '🚀 OCTOBER 2025',
    animated: true
  }
  januaryInnovation: {,
    variant: 'hero' as const,
    theme: 'purple' as const,
    icon: 'sparkles' as const,
    badge: '✨ JANUARY 2026',
    animated: true
  }
  februaryRevolution: {,
    variant: 'mega' as const,
    theme: 'gradient' as const,
    icon: 'zap' as const,
    badge: '⚡ FEBRUARY 2026',
    animated: true
  }
  compactUpdate: {,
    variant: 'compact' as const,
    theme: 'blue' as const,
    icon: 'star' as const,
    animated: false
  }
  enterpriseSolution: {,
    variant: 'premium' as const,
    theme: 'cyan' as const,
    icon: 'rocket' as const,
    badge: 'ENTERPRISE',
    animated: true
=======
    variant: 'premium' as const,';,
    theme: 'gradient' as const,';,
    icon: 'rocket' as const,';,
    badge: '🚀 OCTOBER 2025',';,
    animated: true,
  },
  
  januaryInnovation: {,
    variant: 'hero' as const,';,
    theme: 'purple' as const,';,
    icon: 'sparkles' as const,';,
    badge: '✨ JANUARY 2026',';,
    animated: true,
  },
  
  februaryRevolution: {,
    variant: 'mega' as const,';,
    theme: 'gradient' as const,';,
    icon: 'zap' as const,';,
    badge: '⚡ FEBRUARY 2026',';,
    animated: true,
  },
  
  compactUpdate: {,
    variant: 'compact' as const,';,
    theme: 'blue' as const,';,
    icon: 'star' as const,';,
    animated: false,
  },
  
  enterpriseSolution: {,
    variant: 'premium' as const,';,
    theme: 'cyan' as const,';,
    icon: 'rocket' as const,';,
    badge: 'ENTERPRISE',';,
    animated: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
};

/**
 * Creates a banner configuration from a preset and custom overrides
 */
export function createBannerConfig(
  preset: keyof typeof bannerPresets,,
  overrides: Partial<UnifiedPromotionalBannerProps>,
): UnifiedPromotionalBannerProps {
  return {
    ...bannerPresets[preset]
    ...overrides
  } as UnifiedPromotionalBannerProps;
}

/**
 * Banner content templates for common use cases
 */
export const bannerTemplates = {
<<<<<<< HEAD
newAIBreakthroughs: (count: number = 3) => ({,
title: `🚀 JUST RELEASED: ${count
} Revolutionary AI Breakthroughs`,
    ctaText: 'Explore Latest Innovations',
    ctaLink: '/blog',
    icon: 'rocket' as const
  })
  enterpriseUpdate: (topic: string) => ({,
    title: `🎯 NEW ENTERPRISE SOLUTION: ${topic}`,
    ctaText: 'Learn More',
    ctaLink: '/services',
    icon: 'sparkles' as const
  })
  researchRelease: (field: string) => ({,
    title: `🔬 BREAKTHROUGH RESEARCH: ${field}`,
    ctaText: 'Read Full Report',
    ctaLink: '/blog',
    icon: 'zap' as const
=======
newAIBreakthroughs: (count: number = 3) => ({,,
title: `🚀 JUST RELEASED: ${count`;
} Revolutionary AI Breakthroughs`,`;
    ctaText: 'Explore Latest Innovations',';,
    ctaLink: '/blog',';,
    icon: 'rocket' as const';,
  }),
  
  enterpriseUpdate: (topic: string) => ({,
    title: `🎯 NEW ENTERPRISE SOLUTION: ${topic}`,`;
    ctaText: 'Learn More',';,
    ctaLink: '/services',';,
    icon: 'sparkles' as const';,
  }),
  
  researchRelease: (field: string) => ({,
    title: `🔬 BREAKTHROUGH RESEARCH: ${field}`,`;
    ctaText: 'Read Full Report',';,
    ctaLink: '/blog',';,
    icon: 'zap' as const';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  })
};

/**
 * Helper to create featured items with consistent formatting
 */
<<<<<<< HEAD
export function createFeaturedItems(items: Array<{
title: string;
category: string;
link: string;
=======
export function createFeaturedItems(items: Array<{,
title: string;,
category: string;,
link: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
metrics?: string;
}>): FeaturedItem[] {
  return items.map(item => ({
    title: item.title,,
    category: item.category.toUpperCase(),,
    link: item.link,,
    metrics: item.metrics,
  }));
}

/**
 * Date formatter for banner dates
 */
<<<<<<< HEAD
export function formatBannerDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric' 
=======
export function formatBannerDate(date: Date = new Date()): string {,
  return date.toLocaleDateString('en-US', { ';
    month: 'long', ';,
    day: 'numeric', ';,
    year: 'numeric' ,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  });
}

/**
 * Component usage guide for developers
 */
export const usageExamples = {
<<<<<<< HEAD
  basic: `,
=======
  basic: `,`;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    <UnifiedPromotionalBanner
      variant="default"
      title="Your Title Here"
      description="Your description"
      ctaText="Learn More"
<<<<<<< HEAD
      ctaLink="/blog/>
  `,`;
  
  withPreset: `,
    <UnifiedPromotionalBanner
      {...createBannerConfig('octoberBreakthrough', {;
        title: "3 Revolutionary AI Systems",",
        description: "Transform your business with cutting-edge AI",",
        ctaText: "Explore Breakthroughs",",
        ctaLink: "/blog",",
=======
      ctaLink="/blog"
    />
  `,`;
  
  withPreset: `,`;
    <UnifiedPromotionalBanner
      {...createBannerConfig('octoberBreakthrough', {';
        title: "3 Revolutionary AI Systems",";,
        description: "Transform your business with cutting-edge AI",";,
        ctaText: "Explore Breakthroughs",";,
        ctaLink: "/blog",";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        featuredItems: [...],
      })}
    />
  `,`;
  
<<<<<<< HEAD
  withFeaturedItems: `,
=======
  withFeaturedItems: `,`;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    <UnifiedPromotionalBanner
      variant="premium"
      title="Latest Innovations"
      description="Discover our newest AI solutions"
      ctaText="Read More"
      ctaLink="/blog"
      featuredItems={createFeaturedItems([
        {
<<<<<<< HEAD
          title: "AI System 1",",
          category: "Machine Learning",",
          link: "/blog/ai-system-1",",
=======
          title: "AI System 1",";,
          category: "Machine Learning",";,
          link: "/blog/ai-system-1",";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          metrics: "99% accuracy",
        }
      ])}
    />
  `
};
;