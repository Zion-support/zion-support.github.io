
import { SEO  } from '@/components/SEO';
import { DisputeDashboard  } from '@/components/disputes';
import { ProtectedRoute  } from '@/components/ProtectedRoute';

function DisputesPage(...args[]):  {
  return (
    <ProtectedRoute>
      <React.Fragment>
        <SEO 
          title="Dispute Resolution Center | Zion AI Marketplace" 
          description="View and manage disputes between clients and talents"
        />
        
        <DisputeDashboard />
        
      </React.Fragment>
    </ProtectedRoute>
  )}

export default DisputesPage;
