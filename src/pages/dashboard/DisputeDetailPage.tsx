
import React from 'react';
import { SEO } from '@/components/SEO';
import { DisputeDetail } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>
        <SEOHead 
          title="Dispute Details | Zion AI Marketplace" 
          description="View and manage dispute details"
        />
        
        <DisputeDetail />
        
      </>
    </ProtectedRoute>
  );
}

export default DisputeDetailPage;
