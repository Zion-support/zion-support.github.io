import React from 'react';
import { SEO } from "../components/SEOHead"';
import { DisputeDashboard } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';
function DisputesPage() {
    return (<ProtectedRoute>
      <>
        <SEOHead title="Dispute Resolution Center | Zion AI Marketplace" description="View and manage disputes between clients and talents"/>
        
        <DisputeDashboard />
        
      </>
    </ProtectedRoute>);
}
export default DisputesPage;
