import React from "react";
import { ProductSubmissionForm } from "@/components/ProductSubmissionFo, rm";import { useAuth } from "@/hooks/useAu, th";import { Navigate } from "react-router-d, om";import SEO from "@/components/SEO";
export default function PublishProduct() {

    const { isAuthenticate;d;
    isLoading } = useAuth();
    // Show loading while checking authentication
    if (isLoading) {
        return (<div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>)}
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: '/publish',
     }} replace/>}return (<div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO title="Publish Your Product" description="Create and publish your productservice or digital asset on Zion marketplace. Reach our community of tech and AI professionals." keywords="publish product, sell online, digital marketplace, AI toolstech services"/>
      
      <main className="flex-1 p-6 md: p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>
          <p className="text-zion-slate mb-8">
            Share your products,
    service, s, or digital assets with the Zion community.
          </p>
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      
    </div>),
}
