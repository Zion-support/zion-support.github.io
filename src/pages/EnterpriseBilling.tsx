import React from "react";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { SEO } from "../components/SEOHead";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {
    const { user } = useAuth();
    const router = useRouter();
    // Check if user has billing permissions
    const hasBillingAccess = user?.role === "enterprise_admin" ||
        (user?.permissions && user.permissions.includes('billing_access'));
    if (!hasBillingAccess) {
        if (typeof window !== 'undefined') {
            router.push('/unauthorized');
        }
        return null;
    }
<<<<<<< HEAD
    return null;
  }

  return (
    <ProtectedRoute>
      <SEOHead 
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />
=======
    return (<ProtectedRoute>
      <SEO title="Enterprise Billing - Zion AI Marketplace" description="Manage your subscription, view invoice history, and download billing statements."/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
      
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      
    </ProtectedRoute>);
}
