import React from 'react';
import { EnterpriseCTA } from '@/components / enterprise / EnterpriseCTA';
import { EnterpriseFeatures } from '@/components / enterprise / EnterpriseFeatures';
import { EnterpriseHero } from '@/components / enterprise / EnterpriseHero';
import { EnterprisePricingTable } from '@/components / enterprise / EnterprisePricingTable';
import { EnterpriseTestimonials } from '@/components / enterprise / EnterpriseTestimonials';
import { EnterpriseTrustBadges } from '@/components / enterprise / EnterpriseTrustBadges';
import { SEO } from '@/components / SEO';
export default function EnterprisePlans () {

  return (<>
      <SEO
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />

      <main className="min - h-screen bg - background">
        <EnterpriseHero />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
    </>) ;
}
