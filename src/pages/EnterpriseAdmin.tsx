import React from "react";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { SEO } from "../components/SEOHead";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {
<<<<<<< HEAD
  const { user } = useAuth();
  
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === "enterprise_admin";
  
  if (!isEnterpriseAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <ProtectedRoute>
      <SEOHead 
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
      />
=======
    const { user } = useAuth();
    // Check if user has enterprise admin role
    const isEnterpriseAdmin = user?.role === "enterprise_admin";
    if (!isEnterpriseAdmin) {
        return <Navigate to="/unauthorized"/>;
    }
    return (<ProtectedRoute>
      <SEO title="Enterprise Admin - Zion AI Marketplace" description="Manage your team's access, roles, and usage on the Zion AI Marketplace."/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
      
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      
    </ProtectedRoute>);
}
