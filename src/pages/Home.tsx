
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { AnimatedBackground, FloatingOrbs } from "@/components/ui/AnimatedBackground";

// Featured services data
const featuredServices = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions to automate and optimize your business processes.",
    icon: () => <div className="w-8 h-8 bg-white rounded-full" />,
    color: "from-neon-pink to-neon-orange",
    link: "/ai-services"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions.",
    icon: () => <div className="w-8 h-8 bg-white rounded-full" />,
    color: "from-quantum-blue to-quantum-cyan",
    link: "/cloud-devops"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for modern businesses.",
    icon: () => <div className="w-8 h-8 bg-white rounded-full" />,
    color: "from-neon-green to-quantum-purple",
    link: "/digital-transformation"
  },
  {
    title: "Micro SAAS Solutions",
    description: "Custom micro SAAS applications tailored to your specific needs.",
    icon: () => <div className="w-8 h-8 bg-white rounded-full" />,
    color: "from-zion-cyan to-zion-purple",
    link: "/micro-saas-services"
  }
];

// Features data
const features = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies and innovative approaches.",
    icon: () => <div className="w-8 h-8 bg-zion-cyan rounded-full" />,
    color: "text-zion-cyan"
  },
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of industry experience.",
    icon: () => <div className="w-8 h-8 bg-zion-purple rounded-full" />,
    color: "text-zion-purple"
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations and measurable business outcomes.",
    icon: () => <div className="w-8 h-8 bg-neon-green rounded-full" />,
    color: "text-neon-green"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems run smoothly.",
    icon: () => <div className="w-8 h-8 bg-neon-orange rounded-full" />,
    color: "text-neon-orange"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupXYZ",
    content: "Their AI solutions helped us automate 80% of our manual processes. Game-changing technology.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, GlobalTech",
    content: "Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      <ITServiceRequestHero />

      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
      <FeatureHighlights />
      
      <TrustedBySection />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}

export default Home;
