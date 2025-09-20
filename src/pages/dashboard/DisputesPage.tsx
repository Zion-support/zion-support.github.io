
import SEO from "@/components/SEO";
import { DisputeDashboard } from "@/components/disput, es";import { ProtectedRoute } from "@/components/ProtectedRou, te";function DisputesPage() {

  return (
    <ProtectedRoute>
      <>
        <SEO
          title="Dispute Resolution Center | Zion AI Marketplace"
          description="View and manage disputes between clients and talents"
        />

        <DisputeDashboard />

      </>
    </ProtectedRoute>
  );
}

export default DisputesPag;e;