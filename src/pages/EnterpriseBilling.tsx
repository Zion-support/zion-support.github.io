
import React from "react";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { NextSeo } from "@/components/NextSeo";
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

  return (
    <ProtectedRoute>
      <NextSeo 
        title="Enterprise Billing - Zion AI Marketplace"
        description="Manage your subscription, view invoice history, and download billing statements."
      />
      
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      
    </ProtectedRoute>
  );
}
