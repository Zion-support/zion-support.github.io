<<<<<<< HEAD

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
<<<<<<< HEAD:src && src.pages.disabled/ContractBuilder && ContractBuilder.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ContractBuilder && ContractBuilder.jsx import React from \'react\'';\'; import SEO from \'@/components/SEO\'';\'; import { ProtectedRoute } from \'@/components/ProtectedRoute\'';\'; import { ContractBuilderContent } from \'@/components/contracts/page/ContractBuilderContent\'; function ContractBuilderPage() {}; return (<ProtectedRoute>; <>; <SEO title=\"Smart Contract Builder | Zion AI Marketplace\" description=\"Create and deploy blockchain-backed smart contracts for your projects\"/>\";\" \";\" <main className=\"container mx-auto py-10 px-4\">; <ContractBuilderContent />; </main>; </>; </ProtectedRoute>)}; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage;\" export default ContractBuilderPage;\";\" export default ContractBuilderPage\';\";\" \'"\'";\" import React from \'react\'';\'; import SEO from \'@/components / SEO\'';\'; import { ProtectedRoute } from \'@/components / ProtectedRoute\'';\'; import { ContractBuilderContent } from \'@/components / contracts / page / ContractBuilderContent\'; function ContractBuilderPage () {}; return (<ProtectedRoute>; <>; <SEO title=\"Smart Contract Builder | Zion AI Marketplace\" description=\"Create and deploy blockchain - backed smart contracts for your projects\"/>\";\" \";\" <main className=\"container mx - auto py - 10 px - 4\">; <ContractBuilderContent />; </main>; </>; </ProtectedRoute>) }; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage;\" export default ContractBuilderPage;\";\" export default ContractBuilderPage\';\";\" \'"\'";\"";
<<<<<<< "HEAD": src && src.pages.disabled/ContractBuilder && ContractBuilder.jsx import _React from 'react'';'; import SEO from '@/components/SEO'';'; import { ProtectedRoute } from '@/components/ProtectedRoute'';'; import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent'; function ContractBuilderPage() {}; return (<ProtectedRoute>; <>; <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain-backed smart contracts for your projects"/>";" ";" <main className="container mx-auto py-10 px-4">; <ContractBuilderContent />; </main>; </>; </ProtectedRoute>)}; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage;" export default ContractBuilderPage;";" export default ContractBuilderPage';";" '"'";" import _React from 'react'';'; import SEO from '@/components / SEO'';'; import { ProtectedRoute } from '@/components / ProtectedRoute'';'; import { ContractBuilderContent } from '@/components / contracts / page / ContractBuilderContent'; function ContractBuilderPage () {}; return (<ProtectedRoute>; <>; <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain - backed smart contracts for your projects"/>";" ";" <main className="container mx - auto py - 10 px - 4">; <ContractBuilderContent />; </main>; </>; </ProtectedRoute>) }; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage; export default ContractBuilderPage;" export default ContractBuilderPage;";" export default ContractBuilderPage';";" '"'";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
