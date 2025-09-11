
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LatestArticles } from "@/components/home/LatestArticles";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ContentShowcase } from "@/components/ContentShowcase";
import { ProductListingCard } from "@/components/ProductListingCard";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zion Tech Group - The Future of Tech Services"
        description="Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions."
        keywords="AI, technology, marketplace, services, talent, IT support, global services, tech professionals"
        canonical="https://ziontechgroup.com/"
      />

      <PromoBanner />
      <ITServiceRequestHero />
      <HeroSection />
      <FeatureHighlights />
      <ContentShowcase />
      {/* New & Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">New & Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MICRO_SAAS_SERVICES.filter(s => [
              "ai-agent-016",
              "sales-copilot-017",
              "sec-compliance-018"
            ].includes(s.id)).map(item => (
              <ProductListingCard key={item.id} listing={{
                id: item.id,
                title: item.title,
                description: item.description,
                price: Number(item.price.replace(/[^0-9.]/g, "")),
                currency: item.price.replace(/[0-9.]/g, "") || "$",
                category: item.category,
                images: item.images,
                rating: item.rating,
                reviewCount: item.reviewCount,
                aiScore: item.aiScore,
                link: item.link,
                featured: true
              }} />
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <LatestArticles />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
    </div>
  );
}
