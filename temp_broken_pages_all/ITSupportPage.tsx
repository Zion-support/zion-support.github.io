import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Phone, ShieldCheck, Clock } from "lucide-react";
export default function ITSupportPage() {
  const benefits = [
    {import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import React from "react"
<<<<<<< HEAD:temp_broken_pages_all/ITSupportPage.tsx
export default function ITSupportPage() {
    <ServiceLandingTemplate
=======
export default function ITSupportPage() {<ServiceLandingTemplate
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee:src/pages/ITSupportPage.tsx
title="IT Support Services"
      subtitle="Reliable assistance to keep your business technology operating smoothly."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=IT+Support"
      description="From troubleshooting to onsite repairs Zion provides comprehensive IT support designed for businesses of all sizes."
      benefits = {benefits}
      testimonials = {testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote";
    />;
  );      benefits={benefits}
      testimonials={testimonials}
      ctaText="Get IT Support"
      ctaLink="/request-quote"
    />
  )
}