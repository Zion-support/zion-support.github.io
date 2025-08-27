import React from 'react';
import { SEO } from "../components/SEOHead"';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';
function ContractBuilderPage() {
    return (<ProtectedRoute>
      <>
<<<<<<< HEAD
        <SEOHead 
          title="Smart Contract Builder | Zion AI Marketplace" 
          description="Create and deploy blockchain-backed smart contracts for your projects"
        />
=======
        <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain-backed smart contracts for your projects"/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        
        
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>
        
        
      </>
    </ProtectedRoute>);
}
export default ContractBuilderPage;
