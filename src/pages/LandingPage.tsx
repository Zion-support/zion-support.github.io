
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

  return (
    <div className='min-h-screen bg-zion-blue text-white'>
      <SEO
        title={t('home.seo_title')}
        description={t('home.seo_description')}
        keywords={t('home.seo_keywords')}
        canonical='https://app.ziontechgroup.com/'      />
      <Header />
      <HeroSection />
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
      
              <Link 
                key={index} 
                href={feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">



                </div>
              </Link>
import { Header } from "@/components/Header",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { TestimonialCarousel } from "@/components/TestimonialCarousel",;
import { FloatingCTA } from "@/components/FloatingCTA",;
import { HeroSection } from "@/components/HeroSection",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { WaitlistSection } from "@/components/WaitlistSection",;
import { BlogSection } from "@/components/BlogSection",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",;
import { SocialShareSection } from "@/components/SocialShareSection",;
import { useTranslation } from "react-i18next",;
import { useLanguage } from "@/context/LanguageContext",;
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from 'lucide-react';
export default function LandingPage() {;
  const { t } = useTranslation(),;
  const { isRTL } = useLanguage(),;
  // Tools and features showcase;
  const toolsFeatures = [;
    {;
      title: t("home.tool_ai_matcher"),;
      description: t("home.tool_ai_matcher_desc"),;
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    },;
    {;
      title: t("home.tool_talent"),;
      description: t("home.tool_talent_desc"),;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    },;
    {;
      title: t("home.tool_services"),;
      description: t("home.tool_services_desc"),;
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    },;
    {;
      title: t("home.tool_equipment"),;
      description: t("home.tool_equipment_desc"),;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    },;
    {;
      title: t("home.tool_analytics"),;
      description: t("home.tool_analytics_desc"),;
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link: "/analytics";
    },;
    {;
      title: "Mobile App",;
      description: "Take Zion with you on the go with our mobile app for iOS and Android",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
      link: "/mobile-launch";
    }
  ];
  return (;
    <div className="min-h-screen bg-zion-blue text-white">;
      <HowItWorksSection />;
;
