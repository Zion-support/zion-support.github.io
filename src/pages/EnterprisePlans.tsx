import React from "react";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePricingTable } from "@/components/enterprise/EnterprisePricingTable";
import { EnterpriseFeatures } from "@/components/enterprise/EnterpriseFeatures";
import { EnterpriseCTA } from "@/components/enterprise/EnterpriseCTA";
import { EnterpriseTrustBadges } from "@/components/enterprise/EnterpriseTrustBadges";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
<<<<<<< HEAD
import { SEO } from "../components/SEOHead";

export default function EnterprisePlans() {
  return (
    <>
      <SEOHead 
        title="Enterprise Plans - Zion AI Marketplace"
        description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."
      />
=======
import { SEO } from "@/components/SEO";
export default function EnterprisePlans() {
    return (<>
      <SEO title="Enterprise Plans - Zion AI Marketplace" description="Scale your talent acquisition with Zion's enterprise solutions. Custom branded portals, dedicated talent pools, and powerful admin tools."/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
      
      <main className="min-h-screen bg-background">
        <EnterpriseHero />
        <EnterprisePricingTable />
        <EnterpriseFeatures />
        <EnterpriseTestimonials />
        <EnterpriseTrustBadges />
        <EnterpriseCTA />
      </main>
      
    </>);
}
