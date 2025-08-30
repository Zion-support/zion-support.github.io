
import { SEO  } from '@/components/SEO';
import { DisputeDashboard  } from '@/components/disputes';
import { ProtectedRoute  } from '@/components/ProtectedRoute';

function DisputesPage(...args[]):  {
  return (
    <ProtectedRoute>
      <div>
        <SEO 
          title="Dispute Resolution Center | Zion AI Marketplace" 
          description="View and manage disputes between clients and talents"
        />
        
        <DisputeDashboard />
        
      </div>
    </ProtectedRoute>
  )}

export default DisputesPage;
