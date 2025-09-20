
import React, { useState, useEffect } from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { MessageCircle, Phone, Mail, HelpCircle, ArrowRight } from "lucide-react";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark relative overflow-hidden">
      {/* Enhanced Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
      {/* Parallax scrolling effect */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_40%)] transition-all duration-1000"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: isLoaded ? 1 : 0 
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-zion-cyan rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatSupport = () => {
    // Implement chat support functionality
    console.log("Chat support clicked");
  };

  const handleCallSupport = () => {
    // Implement call support functionality
    console.log("Call support clicked");
  };

  const handleEmailSupport = () => {
    // Implement email support functionality
    console.log("Email support clicked");
  };

  const handleHelp = () => {
    // Implement help functionality
    console.log("Help clicked");
  };

  return (
    <div className="min-h-screen bg-background" id="main-content">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zion-blue-dark z-50">
        <div 
          className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-zion-slate-light">Visit us at:</span>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />
      {/* Main content with smooth animations */}
      <div className="relative z-10">
        <div 
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <ITServiceRequestHero />
        </div>

        <div 
          className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <HeroSection />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <QuickAccess />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <FeatureCTAs />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <FeatureHighlights />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <CategoriesSection />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <BenefitsSection />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-1400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <HowItWorksSection />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-1600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <FeaturedListingsSection />
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-1800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <NewsletterSection />
        </div>
        
        <FloatingCTA />
      </div>
    </div>
  );
}
