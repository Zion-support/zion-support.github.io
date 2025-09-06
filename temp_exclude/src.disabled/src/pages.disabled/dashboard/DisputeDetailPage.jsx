
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
=======
import React from \'react\';\''\'; import SEO from \'@/components/SEO\';\''\'; import { DisputeDetail } from \'@/components/disputes\';\''\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'; function DisputeDetailPage() {} return null} return (<ProtectedRoute> <> <SEO title=\"Dispute Details | Zion AI Marketplace\" description=\"View and manage dispute details\"/> <DisputeDetail /> ></div> </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage };
const React from "react";"""; import SEO from "@/components/SEO";"""; import { DisputeDetail } from "@/components/disputes";"""; import { ProtectedRoute } from "@/components/ProtectedRoute"; function DisputeDetailPage() { return; } return null} return (<ProtectedRoute> <> <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/> <DisputeDetail /> ></div> </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage };"""
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
import _React from 'react';'''; import SEO from '@/components/SEO';'''; import { DisputeDetail } from '@/components/disputes';'''; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputeDetailPage() {} return null} return (<ProtectedRoute> <> <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/> <DisputeDetail /> ></div> </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage };
=======
import _React from 'react';'''; import SEO from '@/components/SEO';'''; import { DisputeDetail } from '@/components/disputes';'''; import { ProtectedRoute } from '@/components/ProtectedRoute'; function DisputeDetailPage() {} return null} return (<ProtectedRoute> <> <SEO title="Dispute Details | Zion AI Marketplace" description="View and manage dispute details"/> <DisputeDetail /> ></div> </ProtectedRoute>)}; export { DisputeDetailPage }; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export default DisputeDetailPage; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage }; export { DisputeDetailPage };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
