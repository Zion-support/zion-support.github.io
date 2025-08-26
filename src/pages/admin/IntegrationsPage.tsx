
import React, { useState } from "react";
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";
import { NextSeo } from "@/components/NextSeo";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function IntegrationsPage() {
  return (
    <ProtectedRoute adminOnly={true}>
      <NextSeo
        title="Integrations - Zion AI Marketplace"
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
      />
      
      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      
    </ProtectedRoute>
  );
}
