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
import { FloatingCTA } from "@/components/FloatingCTA";
import { useEffect, useState } from "react";

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
