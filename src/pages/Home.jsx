import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { 
  Users, 
  TrendingUp, 
  Award,
  Zap,
  Brain, 
  Shield, 
  Cloud,
  Rocket,
  Globe,
  Lock,
  Clock
} from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Zap, value: '24/7', label: 'Support' }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running in days, not months, with our pre-built infrastructure and templates.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and 24/7 threat monitoring.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy anywhere in the world with our multi-region infrastructure and CDN optimization.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems never go down.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. Our efficiency increased by 300%.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      date: 'March 2024'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'DataFlow Inc',
      content: 'The cybersecurity implementation was flawless. We feel completely protected in today\'s digital landscape.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: 'February 2024'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering',
      company: 'CloudScale',
      content: 'Their cloud solutions are cutting-edge. We scaled from 100 to 10,000 users seamlessly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: 'January 2024'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'AI & Analytics',
      description: 'Advanced AI-powered business intelligence and analytics solutions.',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security and threat detection systems.',
      features: ['Threat Detection', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services.',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'CI/CD Pipelines']
    }
  ];

  const handleGetStarted = () => {
    // Navigate to contact page or open contact form
    window.location.href = '/contact';
  };

  const handleWatchDemo = () => {
    // Open demo video or modal
    console.log('Opening demo video...');
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI Solutions & Technology Services"
        description="Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. Transform your business with Zion Tech Group."
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <HeroSection
          title="Welcome to Zion Tech Group"
          subtitle="Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. Transform your business with our expertise."
          primaryCTA={{
            text: "Get Started",
            action: handleGetStarted
          }}
          secondaryCTA={{
            text: "Watch Demo",
            action: handleWatchDemo,
            icon: undefined // Will use Play icon by default
          }}
          showBackgroundElements={true}
        />

        {/* Statistics Section */}
        <StatsSection 
          stats={stats}
          background="dark"
        />

        {/* Features Section */}
        <FeaturesSection
          title="Why Choose Zion Tech Group?"
          subtitle="We combine cutting-edge technology with proven methodologies to deliver results that exceed expectations."
          features={features}
          columns={4}
          background="light"
        />

        {/* Services Preview */}
        <ServicesShowcase 
          title="Our Services"
          subtitle="Comprehensive technology solutions designed to drive innovation and growth in your organization"
          services={services}
          showFeatures={true}
          showCTA={true}
        />

        {/* Testimonials Section */}
        <TestimonialsSection 
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what industry leaders have to say about our services."
          testimonials={testimonials}
        />

        {/* Contact CTA */}
        <CTASection
          title="Ready to Transform Your Business?"
          subtitle="Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions."
          primaryButton={{
            text: "Contact Us Today",
            action: handleGetStarted
          }}
          background="gradient"
        />
      </div>
    </>
  );
}
