import React from "react";
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD
import { SEO } from "../components/SEOHead";

=======
import { SEO } from "@/components/SEO";
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
export default function PublishProduct() {
    const { isAuthenticated, isLoading } = useAuth();
    // Show loading while checking authentication
    if (isLoading) {
        return (<div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
<<<<<<< HEAD
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEOHead 
        title="Publish Your Product" 
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
      />
=======
      </div>);
    }
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: '/publish' }} replace/>;
    }
    return (<div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO title="Publish Your Product" description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals." keywords="publish product, sell online, digital marketplace, AI tools, tech services"/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
      
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion community.
          </p>
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      
    </div>);
}
