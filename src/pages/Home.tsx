
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
=======
import { SEO } from "@/components/SEO";
import { FuturisticHero } from "@/components/home/FuturisticHero";
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import { NextSeo } from "@/components/NextSeo";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";

    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
=======
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Users, Globe, Database, ArrowRight, CheckCircle, Star, Award, Rocket, Target, Brain, Cloud, Lock, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ContactInfo } from "@/components/ContactInfo";
=======
import { FloatingCTA } from "@/components/FloatingCTA";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
=======
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
=======
import { ServicesOverview } from "@/components/ServicesOverview";
=======
import { FuturisticBackground } from "@/components/FuturisticBackground";
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Users, 
  HardDrive,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  DollarSign,
  Clock,
  TrendingUp
} from "lucide-react";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";

// New service highlights
const SERVICE_HIGHLIGHTS = [
  {
    icon: <Brain className="w-12 h-12 text-zion-cyan" />,
    title: "AI & Machine Learning",
    description: "Custom AI development, ML model training, and strategic consulting",
    price: "$8,000 - $25,000",
    features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"],
    link: "/category/ai-services",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Cloud className="w-12 h-12 text-zion-cyan" />,
    title: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps automation, and infrastructure management",
    price: "$5,000 - $30,000",
    features: ["Cloud Migration", "DevOps", "Kubernetes", "Monitoring"],
    link: "/category/cloud-services",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Shield className="w-12 h-12 text-zion-cyan" />,
    title: "Cybersecurity",
    description: "Security audits, compliance frameworks, and threat protection",
    price: "$8,000 - $35,000",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"],
    link: "/category/security-services",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Database className="w-12 h-12 text-zion-cyan" />,
    title: "Data & Analytics",
    description: "Big data engineering, BI dashboards, and data governance",
    price: "$6,000 - $28,000",
    features: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"],
    link: "/category/data-services",
    color: "from-green-500 to-emerald-600"
  }
];

// Stats section data
const STATS_DATA = [
  { number: "500+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
  { number: "1,200+", label: "Tech Experts", icon: <Users className="w-6 h-6" /> },
  { number: "50+", label: "Service Categories", icon: <Code className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
];
=======
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ServiceRecommendations } from "@/components/ServiceRecommendations";
=======
import { AdvancedServicesShowcase } from "@/components/home/AdvancedServicesShowcase";
=======
import { AnimatedBackground, FloatingElements } from "@/components/ui/AnimatedBackground";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { MicroSaasShowcase } from "@/components/home/MicroSaasShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import { ServicesShowcase } from "@/components/ServicesShowcase";
=======
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
=======
import FeatureFlag from "@/components/FeatureFlag";
import ElasticSearchSearch from "@/components/search/ElasticSearchSearch";

export default function Home() {
  return (
    <>
      <SEO 
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
=======
        title="Zion Tech Group - Premier AI & Tech Marketplace" 
        description="Discover cutting-edge AI services, tech talent, and innovative micro SAAS solutions. Transform your business with our comprehensive ecosystem of technology services."
        keywords="AI services, machine learning, cloud migration, cybersecurity, data analytics, tech talent, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with cutting-edge AI services, IT solutions, and intelligent automation tools."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, IT consulting, business automation, cloud migration, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - Premier Tech & AI Marketplace" 
        description="Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. Connect with top talent and transform your business with next-generation technology."
        keywords="AI services, IT solutions, SaaS platforms, technology marketplace, enterprise solutions, AI consulting, cloud services, cybersecurity, digital transformation"
        canonical="https://ziontechgroup.com/"
=======
=======
        title="Zion Tech Group - The Future of Tech Solutions" 
        description="Discover cutting-edge AI services, innovative IT solutions, and transformative business tools. Zion Tech Group - Where innovation meets excellence."
        keywords="AI services, IT solutions, business automation, cloud services, cybersecurity, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
=======
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <NextSeo 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />
      
      <HeroSection />
      <QuickAccess />
      <AIServicesShowcase />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <FloatingCTA />
=======
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
=======
=======
      <FeatureFlag name="elasticsearch-search">
        <div className="max-w-xl mx-auto py-8">
          <ElasticSearchSearch />
        </div>
      </FeatureFlag>
    </div>
  );
}
