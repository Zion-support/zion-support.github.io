import { Link  } from 'react-router-dom';
 from 'react';
export default function Home () {
export default Home;
import { motion, AnimatePresence  } from 'framer-motion';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      {/* Sections remain the same */}
      <ITServiceRequestHero />

      <HeroSection />
      
      <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <QuickAccess />
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <FeatureCTAs />
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.25s' }}>
        <InteractiveFeatures />
      </div>

      <FeatureHighlights className="animate-fadeIn" style={{ animationDelay: '0.3s' }} />

      <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <CategoriesSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <BenefitsSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <HowItWorksSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        <FeaturedListingsSection />
      </div>
      <NewsletterSection className="animate-fadeIn" style={{ animationDelay: '0.8s' }} />
    </div>
  );
}
