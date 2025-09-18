import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { ContractBuilderContent } from '../components/contracts/page/ContractBuilderContent';
=======
import { SEO } from '../components/SEO.jsx';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-ca65
function ContractBuilderPage() {
    return (<ProtectedRoute>
      <>
        <SEO title="Smart Contract Builder | Zion AI Marketplace" description="Create and deploy blockchain-backed smart contracts for your projects"/>
        
        
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>
        
        
      </>
    </ProtectedRoute>);
}
export default ContractBuilderPage;
