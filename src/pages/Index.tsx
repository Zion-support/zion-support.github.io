import { Footer } from "@/components/Footer";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PerformanceOptimizedHero } from "@/components/PerformanceOptimizedHero";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { BlogSection } from "@/components/BlogSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";
import { EnhancedTestimonials } from "@/components/EnhancedTestimonials";
import { EnhancedContactCTA } from "@/components/EnhancedContactCTA";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { EnhancedHeader } from "@/components/EnhancedHeader";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search,
  MessageSquare, 
  Sparkles,
  BarChart3,
  Smartphone,
  Brain
} from "lucide-react";
export default function Index() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  // Tools and features showcase
  const toolsFeatures = [
    {
      title: t("home.tool_ai_matcher", "AI-Powered Matching"),
      description: t("home.tool_ai_matcher_desc", "Find the perfect talent with our advanced AI algorithms"),
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,
      link: "/match"
    },
    {
      title: t("home.tool_talent", "Global Talent Pool"),
      description: t("home.tool_talent_desc", "Access verified professionals from around the world"),
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      link: "/talent"
    },
    {
      title: t("home.tool_services", "Comprehensive Services"),
      description: t("home.tool_services_desc", "Full range of technology solutions and consulting"),
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,
      link: "/services"
    },
    {
      title: t("home.tool_equipment", "Advanced Equipment"),
      description: t("home.tool_equipment_desc", "State-of-the-art technology and infrastructure"),
      icon: <Settings className="h-6 w-6 text-zion-purple" />,
      link: "/equipment"
    },
    {
      title: t("home.tool_analytics", "Performance Analytics"),
      description: t("home.tool_analytics_desc", "Real-time insights and performance monitoring"),
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,
      link: "/analytics"
    },
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,
      link: "/mobile-launch"
    }
  ];
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO 
        title={t("home.seo_title", "Zion Tech Group - Leading AI & Technology Solutions")} 
        description={t("home.seo_description", "Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem.")} 
        keywords={t("home.seo_keywords", "AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting")}
        canonical="https://ziontechgroup.com/"
      />
              <HeroSection />
    </div>
  );
}
