
export default function LandingPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
import { Header } from "@/components/Header",
import { TrustedBySection } from "@/components/TrustedBySection",
import { TestimonialCarousel } from "@/components/TestimonialCarousel",
import { FloatingCTA } from "@/components/FloatingCTA",
import { HeroSection } from "@/components/HeroSection",
import { CategoriesSection } from "@/components/CategoriesSection",
import { BenefitsSection } from "@/components/BenefitsSection",
import { HowItWorksSection } from "@/components/HowItWorksSection",
import { WaitlistSection } from "@/components/WaitlistSection",
import { BlogSection } from "@/components/BlogSection",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import Link from "next/link",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",
import { SocialShareSection } from "@/components/SocialShareSection",
import { useTranslation } from "react-i18next",
import { useLanguage } from "@/context/LanguageContext",
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react'

import { Header } from '@/components/Header';
import { TrustedBySection } from '@/components/TrustedBySection';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { BlogSection } from '@/components/BlogSection';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { FeaturesGuideSection } from '@/components/FeaturesGuideSection';
import { SocialShareSection } from '@/components/SocialShareSection';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowRight
  Users
  Zap
  Settings
  Search
  MessageSquare
  Sparkles
  BarChart3
  Smartphone
} from 'lucide-react';
origin/cursor/automate-test-improve-and-merge-code-2533
export default function LandingPage() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  



  // Tools and features showcase
  const toolsFeatures = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>;
            {toolsFeatures && toolsFeatures.map((feature, index) => (;
              <Link
                key={index}
                href={feature && feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'>;
                <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4'>;
                  {feature && feature.icon}
                </div>;
                <h3 className='text-xl font-bold text-white mb-2'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-zion-slate-light mb-4'>;
                  {feature && feature.description}
                </p>;
                <div
                  className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;
                  <span>{t('general && general.explore')}</span>;
                  <ArrowRight
                    className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
<CategoriesSection />
origin/cursor/automate-test-improve-and-merge-code-2533
      <BenefitsSection />

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
{/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      <WaitlistSection />
      <FloatingCTA />
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
