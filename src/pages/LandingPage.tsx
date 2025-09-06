<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Sparkles,
  BarChart3,
  Smartphone,;
} from 'lucide-react';
<<<<<<< HEAD
=======
=======

import { Header } from "@/components/Header";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { BlogSection } from "@/components/BlogSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection";
import { SocialShareSection } from "@/components/SocialShareSection";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react'
import { Zap } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function LandingPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // Tools and features showcase
  const toolsFeatures = [
    {
      title: t('home.tool_ai_matcher'),
      description: t('home.tool_ai_matcher_desc'),
      icon: <Sparkles className='h-6 w-6 text-zion-cyan' />,
      link: '/match',
    },
    {
      title: t('home.tool_talent'),
      description: t('home.tool_talent_desc'),
      icon: <Users className='h-6 w-6 text-zion-purple' />,
      link: '/talent',
    },
    {
      title: t('home.tool_services'),
      description: t('home.tool_services_desc'),
      icon: <Zap className='h-6 w-6 text-zion-cyan' />,
      link: '/services',
    },
    {
      title: t('home.tool_equipment'),
      description: t('home.tool_equipment_desc'),
      icon: <Settings className='h-6 w-6 text-zion-purple' />,
      link: '/equipment',
    },
    {
      title: t('home.tool_analytics'),
      description: t('home.tool_analytics_desc'),
      icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />,
      link: '/analytics',
    },
    {
      title: 'Mobile App',
      description:
        'Take Zion with you on the go with our mobile app for iOS and Android',
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />,
      link: '/mobile-launch',
    },
  ];

  return (
    <div className='min-h-screen bg-zion-blue text-white'>
      <SEO
        title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'
      />
      <Header />
      <HeroSection />

      {/* Quick Access Tools Section */}
      <section className='py-16 bg-zion-blue-dark'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4'>
              {t('home.explore_tools')}
            </h2>
            <p className='text-zion-slate-light text-xl max-w-3xl mx-auto'>
              {t('home.tools_description')}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}
          >
            {toolsFeatures.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'
              >
                <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                  {feature.icon}
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <h3 className='text-xl font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-zion-slate-light mb-4'>
                  {feature.description}
                </p>
                <div
                  className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{t('general.explore')}</span>
                  <ArrowRight
                    className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}
<<<<<<< HEAD
                  />                </div>
=======
                  />
=======

import { Header } from "@/components/Header";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { BlogSection } from "@/components/BlogSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection";
import { SocialShareSection } from "@/components/SocialShareSection";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react'
import { Zap } from 'lucide-react';


export default function LandingPage() { const { t  } = useTranslation(),
  const { isRTL  } = useLanguage(),

  
  // Tools and features showcase
  const toolsFeatures = [
    {
      title: t("home.tool_ai_matcher"), description: t("home.tool_ai_matcher_desc"),
      icon: <Sparkles className = "h-6 w-6 text-zion-cyan" />,
      link: "/match"
    };
    {
      title: t("home.tool_talent"), description: t("home.tool_talent_desc"),
      icon: <Users className = "h-6 w-6 text-zion-purple" />,
      link: "/talent"
    };
    {
      title: t("home.tool_services"), description: t("home.tool_services_desc"),
      icon: <Zap className = "h-6 w-6 text-zion-cyan" />,
      link: "/services"
    };
    {
      title: t("home.tool_equipment"), description: t("home.tool_equipment_desc"),
      icon: <Settings className = "h-6 w-6 text-zion-purple" />,
      link: "/equipment"
    };
    {
      title: t("home.tool_analytics"), description: t("home.tool_analytics_desc"),
      icon: <BarChart3 className = "h-6 w-6 text-zion-cyan" />,
      link: "/analytics"
    };
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className = "h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  ];


  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO 
        title={t("home.seo_title")} 
        description={t("home.seo_description")} 
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      <HeroSection />
      
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </Link>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <CategoriesSection />
      <BenefitsSection />
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <CategoriesSection />
      <BenefitsSection />
      
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
<<<<<<< HEAD
=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
<<<<<<< HEAD

      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
=======
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />

=======
      
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <WaitlistSection />
      <FloatingCTA />
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
