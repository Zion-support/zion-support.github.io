import React from 'react';
import { EnhancedHeroSection } from '@/components/home/EnhancedHeroSection';
import { EnhancedServicesShowcase } from '@/components/home/EnhancedServicesShowcase';
import { EnhancedQuickAccess } from '@/components/home/EnhancedQuickAccess';
import { FeatureHighlights } from '@/components/home/FeatureHighlights';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ContactInfo } from '@/components/home/ContactInfo';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem." 
        canonical="/" 
        url="https://ziontechgroup.com"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />
      
      {/* Quick Access Section */}
      <EnhancedQuickAccess />
      
      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Information */}
      <ContactInfo />
    </>
  );
}