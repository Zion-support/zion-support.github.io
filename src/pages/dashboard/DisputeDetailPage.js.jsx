import React from 'react';
import { SEO } from '@/components/SEO';
import { DisputeDetail } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';
function DisputeDetailPage() {
    return (<ProtectedRoute>
      <React.Fragment>
        <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/>
        
        <DisputeDetail />
        
      </React.Fragment>
    </ProtectedRoute>)}
export default DisputeDetailPage;
