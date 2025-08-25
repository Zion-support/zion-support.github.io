import React from 'react';
import { HeroSection } from "../components/HeroSection";
import { ServicesShowcase } from "../components/ServicesShowcase";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";
import { StatsSection } from "../components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}