import React from 'react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";

export default function Home() {
    return (<>
      <SEO title="Zion Tech Group - Leading AI & Technology Solutions" description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem." canonical="/" url="https://ziontechgroup.com"/>
      
      <HeroSection />
      <FeatureCTAs />
      <HowItWorksSection />
      <FeaturedListingsSection />
    </>);
}
