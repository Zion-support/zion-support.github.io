<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/dashboard/DisputesPage && DisputesPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/dashboard/DisputesPage && DisputesPage.jsx import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { DisputeDashboard } from \'@/components/disputes\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title=\"Dispute Resolution Center | Zion AI Marketplace\" description=\"View and manage disputes between clients and talents\"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;\" export default DisputesPage;\";\" export default DisputesPage\';\";\" \'"\'";\" import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { DisputeDashboard } from \'@/components/disputes\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title=\"Dispute Resolution Center | Zion AI Marketplace\" description=\"View and manage disputes between clients and talents\"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;\" export default DisputesPage;\";\" export default DisputesPage\';\";\" \'"\'";\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/dashboard/DisputesPage && DisputesPage.jsx import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDashboard } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Resolution Center | Zion AI Marketplace" description="View and manage disputes between clients and talents"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;" export default DisputesPage;";" export default DisputesPage';";" '"'";" import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDashboard } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Resolution Center | Zion AI Marketplace" description="View and manage disputes between clients and talents"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;" export default DisputesPage;";" export default DisputesPage';";" '"'";"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/dashboard/DisputesPage && DisputesPage.jsx import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDashboard } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Resolution Center | Zion AI Marketplace" description="View and manage disputes between clients and talents"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;" export default DisputesPage;";" export default DisputesPage';";" '"'";" import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDashboard } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputesPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Resolution Center | Zion AI Marketplace" description="View and manage disputes between clients and talents"/>; <DisputeDashboard />; </>; </ProtectedRoute>)}; export { DisputesPage }; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage; export default DisputesPage;" export default DisputesPage;";" export default DisputesPage';";" '"'";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
