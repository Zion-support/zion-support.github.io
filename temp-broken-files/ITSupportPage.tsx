<<<<<<< HEAD:temp-broken-files/ITSupportPage.tsx
import React from "react";
import { ServiceLandingTemplate,  } from "@/components/services/ServiceLandingTemplate";
import { Phone,, ShieldCheck, Clock,  } from 'lucide-react'
export default function ITSupportPage() {
  const benefits = [
    {import React from "react"
import { ServiceLandingTemplate,  } from "@/components/services/ServiceLandingTemplate"
import React from "react"
export default function ITSupportPage() {
    <ServiceLandingTemplate,
title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits,}
      testimonials = {testimonials,}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  );      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
}
=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function ITSupportPage() {
  return (
    <>
      <SEO 
        title="ITSupportPage - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">ITSupportPage</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/ITSupportPage.tsx
