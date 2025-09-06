
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
<<<<<<< HEAD:src && src.pages.disabled/dashboard/DisputeDetailPage && DisputeDetailPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/dashboard/DisputeDetailPage && DisputeDetailPage.jsx import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { DisputeDetail } from \'@/components/disputes\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'; function DisputeDetailPage() {}; return (<ProtectedRoute>; <>; <SEO title=\"Dispute Details | Zion AI Marketplace\" description=\"View and manage dispute details\"/>; <DisputeDetail />; </>; </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage;\" export default DisputeDetailPage;\";\" export default DisputeDetailPage\';\";\" \'"\'";\" import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { DisputeDetail } from \'@/components/disputes\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'; function DisputeDetailPage() {}; return (<ProtectedRoute>; <>; <SEO title=\"Dispute Details | Zion AI Marketplace\" description=\"View and manage dispute details\"/>; <DisputeDetail />; </>; </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage;\" export default DisputeDetailPage;\";\" export default DisputeDetailPage\';\";\" \'"\'";\"";
<<<<<<< "HEAD": src && src.pages.disabled/dashboard/DisputeDetailPage && DisputeDetailPage.jsx import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDetail } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputeDetailPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/>; <DisputeDetail />; </>; </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage;" export default DisputeDetailPage;";" export default DisputeDetailPage';";" '"'";" import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { DisputeDetail } from '@/components/disputes'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputeDetailPage() {}; return (<ProtectedRoute>; <>; <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/>; <DisputeDetail />; </>; </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage;" export default DisputeDetailPage;";" export default DisputeDetailPage';";" '"'";"";