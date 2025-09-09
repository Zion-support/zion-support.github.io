

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
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
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search,
  MessageSquare, 
  Sparkles,
  BarChart3,
  Smartphone
} from "lucide-react";

// Lazy load heavy components for better performance
const InteractiveServiceShowcase = React.lazy(() => import('@/components/InteractiveServiceShowcase'));

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
      
      {/* Enhanced Hero Section */}
      <PerformanceOptimizedHero />
      
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools", "Explore Our Tools & Services")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description", "Discover our comprehensive suite of technology tools and services designed to accelerate your business growth.")}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link} 
                className="group bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-purple/20"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="font-medium">{t("general.explore", "Explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4 group-hover:translate-x-1 transition-transform duration-300`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />
      
      {/* New 2027 Services CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-cyan-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Our 2027 Innovation Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our comprehensive suite of cutting-edge AI, IT, and emerging technology services designed to transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <Link
                to="/all-services-2027"
                className="group bg-zion-blue/20 backdrop-blur-sm rounded-xl p-6 border border-zion-blue/30 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">All Services 2027</h3>
                <p className="text-zion-slate-light">Complete portfolio of innovative technology solutions</p>
              </Link>
              
              <Link
                to="/ultimate-innovative-services-2027"
                className="group bg-zion-purple/20 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
              >
                <Star className="h-12 w-12 text-zion-purple-light mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">Innovative Services</h3>
                <p className="text-zion-slate-light">Cutting-edge AI and emerging technology solutions</p>
              </Link>
              
              <Link
                to="/ultimate-pricing-2027"
                className="group bg-zion-cyan/20 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/30 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105"
              >
                <TrendingUp className="h-12 w-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">Pricing Plans</h3>
                <p className="text-zion-slate-light">Transparent pricing for all our services</p>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/all-services-2027"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                Explore All Services
              </Link>
              <Link
                to="/ultimate-pricing-2027"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CategoriesSection />
      <BenefitsSection />
      
      {/* Interactive Service Showcase - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 bg-zion-slate-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan mx-auto mb-8"></div>
            <h3 className="text-2xl font-bold text-white">Loading Interactive Services...</h3>
          </div>
        </div>
      }>
        <InteractiveServiceShowcase />
      </Suspense>
      
      <HowItWorksSection />
      
      {/* Enhanced Testimonials */}
      <EnhancedTestimonials />
      
      <TrustedBySection />
      <BlogSection />
      
      {/* Enhanced Contact CTA Section */}
      <EnhancedContactCTA />
      
      <WaitlistSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
