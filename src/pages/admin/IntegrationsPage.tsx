import React from "react";
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";
import SEOHead from "../components/SEOHead.jsx";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function IntegrationsPage() {
    return (<ProtectedRoute adminOnly={true}>
      <SEO title="Integrations - Zion AI Marketplace" description="Connect your Zion account with CRMs and Applicant Tracking Systems."/>
      
      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      
    </ProtectedRoute>);
}
