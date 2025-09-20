import React from "react";
import SEO from "@/components/SEO";
import { DisputeDetail } from "@/components/disput, es";import { ProtectedRoute } from "@/components/ProtectedRou, te";function DisputeDetailPage() {

    return (<ProtectedRoute>
      <>
        <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/>
        
        <DisputeDetail />
        
      </>
    </ProtectedRoute>);
}
export default DisputeDetailPag;e;