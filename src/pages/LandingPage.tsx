<<<<<<< HEAD
<<<<<<< HEAD
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
  ArrowRight,
  Users,
  Zap,
  Settings,
  Search,
  MessageSquare,
  Sparkles,
  BarChart3,;
  Smartphone;
} from 'lucide-react';
export default function LandingPage() {;
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
BarChart3,;
  Smartphone,;
} from 'lucide-react';



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

export default function LandingPage() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  
<<<<<<< HEAD
  // Tools and features showcase

  const toolsFeatures = [
    {
  

      title: t('home.tool_ai_matcher')
      description: t('home.tool_ai_matcher_desc')
      icon: <Sparkles className='h-6 w-6 text-zion-cyan' />
      link: '/match'
    }
    {
      title: t('home.tool_talent')
      description: t('home.tool_talent_desc')
      icon: <Users className='h-6 w-6 text-zion-purple' />
      link: '/talent'
    }
    {
      title: t('home.tool_services')
      description: t('home.tool_services_desc')
      icon: <Zap className='h-6 w-6 text-zion-cyan' />
      link: '/services'
    }
    {
      title: t('home.tool_equipment')
      description: t('home.tool_equipment_desc')
      icon: <Settings className='h-6 w-6 text-zion-purple' />
      link: '/equipment'
    }
    {
      title: t('home.tool_analytics')
      description: t('home.tool_analytics_desc')
      icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />
      link: '/analytics'
    }
    {
      title: 'Mobile App'
      description:
        'Take Zion with you on the go with our mobile app for iOS and Android'
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />
      link: '/mobile-launch'
    }
  ];

  return (
    <div className='min-h-screen bg-zion-blue text-white'>
      <SEO
        title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
      <Header />
      <HeroSection />
      title: t("home.tool_ai_matcher"),
      description: t("home.tool_ai_matcher_desc"),
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,
      link: "/match"
    },
    {
      title: t("home.tool_talent"),
      description: t("home.tool_talent_desc"),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent"
    },
    {
      title: t("home.tool_services"),
      description: t("home.tool_services_desc"),
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,
      link: "/services"
    },
    {
      title: t("home.tool_equipment"),
      description: t("home.tool_equipment_desc"),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment"
    },
    {
      title: t("home.tool_analytics"),
      description: t("home.tool_analytics_desc"),
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,
      link: "/analytics"
    },
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  ],

  return (
    <div className='min-h-screen bg-zion-blue text-white'>
      <SEO
        title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
      <Header />
      <HeroSection />
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO 
        title={t("home.seo_title")} 
        description={t("home.seo_description")} 
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      <HeroSection />
      
ursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Tools and features showcase

  const toolsFeatures = [
    {


  // Tools and features showcase;
  const toolsFeatures = [;
    {;
      title: t('home && home.tool_ai_matcher'),;
      description: t('home && home.tool_ai_matcher_desc'),;
      icon: <Sparkles className='h-6 w-6 text-zion-cyan' />,;
      link: '/match',;
    },;
    {;
      title: t('home && home.tool_talent'),;
      description: t('home && home.tool_talent_desc'),;
      icon: <Users className='h-6 w-6 text-zion-purple' />,;
      link: '/talent',;
    },;
    {;
      title: t('home && home.tool_services'),;
      description: t('home && home.tool_services_desc'),;
      icon: <Zap className='h-6 w-6 text-zion-cyan' />,;
      link: '/services',;
    },;
    {;
      title: t('home && home.tool_equipment'),;
      description: t('home && home.tool_equipment_desc'),;
      icon: <Settings className='h-6 w-6 text-zion-purple' />,;
      link: '/equipment',;
    },;
    {;
      title: t('home && home.tool_analytics'),;
      description: t('home && home.tool_analytics_desc'),;
      icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />,;
      link: '/analytics',;
    },;
    {;
      title: 'Mobile App',;
      description:;
        'Take Zion with you on the go with our mobile app for iOS and Android',;
      icon: <Smartphone className='h-6 w-6 text-zion-purple' />,;
      link: '/mobile-launch',;
    },;

export default /**
 * LandingPage - Function description
 */
function LandingPage() {
  const { t } = use_translation ();
  const { isRTL } = use_language ();
;
  // Tools and features showcase;
  const tools_features = [;
    {
<<<<<<< HEAD
      title: t ('home.tool_ai_matcher'),
      description: t ('home.tool_ai_matcher_desc'),
      icon: <Sparkles className='h - 6 w - 6 text - zion - cyan' />,
      link: '/match',
    },
    {
      title: t ('home.tool_talent'),
      description: t ('home.tool_talent_desc'),
      icon: <Users className='h - 6 w - 6 text - zion - purple' />,
      link: '/talent',
    },
    {
      title: t ('home.tool_services'),
      description: t ('home.tool_services_desc'),
      icon: <Zap className='h - 6 w - 6 text - zion - cyan' />,
      link: '/services',
    },
    {
      title: t ('home.tool_equipment'),
      description: t ('home.tool_equipment_desc'),
      icon: <Settings className='h - 6 w - 6 text - zion - purple' />,
      link: '/equipment',
    },
=======
      title: t('home.tool_talent')
      description: t('home.tool_talent_desc')
      icon: <Users className='h-6 w-6 text-zion-purple' />
      link: '/talent'
    }
    {
      title: t('home.tool_services')
      description: t('home.tool_services_desc')
      icon: <Zap className='h-6 w-6 text-zion-cyan' />
      link: '/services'
    }
    {
      title: t('home.tool_equipment')
      description: t('home.tool_equipment_desc')
      icon: <Settings className='h-6 w-6 text-zion-purple' />
      link: '/equipment'
    }
    {
      title: t('home.tool_analytics')
      description: t('home.tool_analytics_desc')
      icon: <BarChart3 className='h-6 w-6 text-zion-cyan' />
      link: '/analytics'
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: t ('home.tool_analytics'),
      description: t ('home.tool_analytics_desc'),
      icon: <BarChart3 className='h - 6 w - 6 text - zion - cyan' />,
      link: '/analytics',
    },
    {
      title: 'Mobile App',
      description:;
        'Take Zion with you on the go with our mobile app for iOS and Android',
      icon: <Smartphone className='h - 6 w - 6 text - zion - purple' />,
      link: '/mobile - launch',
    },
  ];
<<<<<<< HEAD
;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

        title={t('home && home.seo_title')}
        description={t('home && home.seo_description')}
        keywords={t('home && home.seo_keywords')}
        canonical='https://app && app.ziontechgroup.com/'      />;
      <Header />;
      <HeroSection />;

<<<<<<< HEAD
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Quick Access Tools Section */}
      <section className='py-16 bg-zion-blue-dark'>;
        <div className='container mx-auto px-4'>;
          <div className='text-center mb-12'>;
            <h2 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4'>;
              {t('home && home.explore_tools')}
            </h2>;
            <p className='text-zion-slate-light text-xl max-w-3xl mx-auto'>;
              {t('home && home.tools_description')}
            </p>;
          </div>;


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
                  />                </div>                <h3 className="text-xl font-bold text-white mb-2">{feature && feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature && feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;
                  <span>{t("general && general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;
              </Link>;

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

      title: t("home.tool_ai_matcher"),
      description: t("home.tool_ai_matcher_desc"),
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,

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



      {/* Quick Access Tools Section */}
<<<<<<< HEAD
=======
      <section className="py-16 bg-zion-blue-dark">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}
          >
            {toolsFeatures.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className='bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300'              >
                <div className='bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4'>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">



                  {feature.icon}
<<<<<<< HEAD
=======
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CategoriesSection />
      <BenefitsSection />
      <CategoriesSection />
      <BenefitsSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      <CategoriesSection />
      <BenefitsSection />
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
<<<<<<< HEAD
=======

      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />


          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
      <CategoriesSection />;
      <BenefitsSection />;
      <CategoriesSection />;
      <BenefitsSection />;

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      <CategoriesSection />;
      <BenefitsSection />;

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;



;


    <div className='min - h-screen bg - zion - blue text - white'>;
      <SEO;
        title={t ('home.seo_title')}
        description={t ('home.seo_description')}
        keywords={t ('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />;
      <Header />;
      <HeroSection />;
      {/* Quick Access Tools Section */}
      <section className='py - 16 bg - zion - blue - dark'>;
        <div className='container mx - auto px - 4'>;
          <div className='text - center mb - 12'>;
            <h2 className='text - 3xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 4'>;
              {t ('home.explore_tools')}
            </h2>;
            <p className='text - zion - slate - light text - xl max - w-3xl mx - auto'>;
              {t ('home.tools_description')}
            </p>;
          </div>;
          <div;
            className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : ''}`}
          >;
            {tools_features.map ((feature, index) => (
              <Link;
                key={index}
                href={feature.link}
                className='bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration - 300'              >;
                <div className='bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 4'>;
                  {feature.icon}
                </div>;
                <h3 className='text - xl font - bold text - white mb - 2'>;
                  {feature.title}
                </h3>;
                <p className='text - zion - slate - light mb - 4'>;
                  {feature.description}
                </p>;
                <div;
                  className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : ''}`}
                >;
                  <span>{t ('general.explore')}</span>;
                  <ArrowRight;
                    className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'} h - 4 w - 4`}
                  />                </div>                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>;
                <p className="text - zion - slate - light mb - 4">{feature.description}</p>;
                <div className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : ''}`}>;
                  <span>{t ("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'} h - 4 w - 4`} />;
              </Link>))}
          </div>;
        </div>;
      </section>;
      <CategoriesSection />;
      <BenefitsSection />;
      <CategoriesSection />;
      <BenefitsSection />;
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      <CategoriesSection />;
      <BenefitsSection />;
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;


      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;
      <FloatingCTA />;
    </div>);
}
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Advanced technology solutions for the modern world. We provide AI, cybersecurity, 
            cloud infrastructure, and digital transformation services.
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Machine learning, natural language processing, and computer vision solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced security solutions and compliance to protect your digital assets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Scalable cloud solutions and infrastructure management services.
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your organization grow and succeed.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;



;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
