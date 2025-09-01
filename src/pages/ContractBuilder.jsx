import React from 'react';
import { ContractBuilderContent } from '@/components / contracts / page / ContractBuilderContent';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import SEO from '@/components / SEO';
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;
export default ContractBuilderPage;


function ContractBuilderPage () {
    return (<ProtectedRoute>
      <>
        <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain - backed smart contracts for your projects"/>

        <main className="container mx - auto py - 10 px - 4">
          <ContractBuilderContent />
        </main>

      </>
    </ProtectedRoute>) }

