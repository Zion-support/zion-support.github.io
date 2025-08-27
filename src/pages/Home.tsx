
import React, { Suspense } from 'react';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/HeroSection';
import { QuickAccess } from '@/components/home/QuickAccess';
import { FeatureCTAs } from '@/components/home/FeatureCTAs';
import { FeatureHighlights } from '@/components/home/FeatureHighlights';
import { ITServiceRequestHero } from '@/components/home/ITServiceRequestHero';
import { FloatingCTA } from '@/components/FloatingCTA';
import { PricingSection } from '@/components/PricingSection';
import { TechSolutionsSection } from '@/components/TechSolutionsSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { TeamExpertiseSection } from '@/components/TeamExpertiseSection';
import { GlobalPresenceSection } from '@/components/GlobalPresenceSection';
import { InnovationResearchSection } from '@/components/InnovationResearchSection';
import { ClientSuccessStoriesSection } from '@/components/ClientSuccessStoriesSection';
import { TechnologyStackSection } from '@/components/TechnologyStackSection';
import { SecurityComplianceSection } from '@/components/SecurityComplianceSection';
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { ServicesShowcase } from '@/components/ServicesShowcase.tsx';

const InteractiveServiceShowcase = React.lazy(() => import('@/components/InteractiveServiceShowcase'));

export default function Home() {
	return (
		<>
			<SEO
				title="Zion Tech Group - Leading AI & Technology Solutions"
				description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
				canonical="https://ziontechgroup.com/"
				url="https://ziontechgroup.com"
			/>

			{/* Key hero and CTAs */}
			<ITServiceRequestHero />
			<HeroSection />
			<QuickAccess />
			<FeatureHighlights />
			<FeatureCTAs />

			{/* Lazy heavy interactive section */}
			<Suspense fallback={<div className="py-12 text-center text-zinc-400">Loading interactive showcase…</div>}>
				<InteractiveServiceShowcase />
			</Suspense>

			{/* Core marketing sections */}
			<TechSolutionsSection />
			<CaseStudiesSection />
			<TeamExpertiseSection />
			<GlobalPresenceSection />
			<InnovationResearchSection />
			<ClientSuccessStoriesSection />
			<TechnologyStackSection />
			<SecurityComplianceSection />
			<PricingSection />
			<ServicesShowcase />
			<FeaturedListingsSection />
			<NewsletterSection />
			<FloatingCTA />
		</>
	);
}
