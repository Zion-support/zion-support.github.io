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
        
      </React.Fragment>
    </ProtectedRoute>)}
export default DisputeDetailPage;
