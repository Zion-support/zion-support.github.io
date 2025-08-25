

import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Globe2,
  ShieldCheck
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Futuristic Background */}
      <FuturisticBackground variant="default" intensity="medium" />
      
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Marketplace" 
        description="Transform your business with cutting-edge AI and technology solutions. Connect with world-class experts, innovative services, and enterprise-grade solutions."
        keywords="AI, artificial intelligence, technology marketplace, cloud services, cybersecurity, data analytics, machine learning, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/"
      />

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "10+", label: "AI-Powered Solutions", icon: "🤖", color: "from-cyan-400 to-blue-400" },
                { number: "24/7", label: "Expert Support", icon: "🔧", color: "from-blue-400 to-purple-400" },
                { number: "300%+", label: "Average ROI", icon: "📈", color: "from-purple-400 to-pink-400" },
                { number: "Global", label: "Service Coverage", icon: "🌍", color: "from-green-400 to-teal-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-4">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />
      
      {/* Quick Access */}
      <QuickAccess />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* Feature CTAs with new services */}
      <FeatureCTAs />
      
      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings */}
      <FeaturedListingsSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Home;