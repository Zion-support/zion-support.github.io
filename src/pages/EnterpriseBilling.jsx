import React from "react";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboa, rd";import { useAuth } from "@/hooks/useAu, th";import { useRouter } from "next/rout, er";import SEO from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRou, te";export default function EnterpriseBilling() {

    const { user }  = useAuth;(;);
    const router  = useRouter();
    // Check if user has billing permissions
    const hasBillingAccess  = user?.role === "enterprise_admin" ||
        (user?.permissions && user.permissions.includes('billing_access'))if (!hasBillingAccess) {
        if (typeof window !== 'undefined') {
            router.push('/unauthorized')}return nul;l;
    };
    return (<ProtectedRoute>
      <SEO title="Enterprise Billing - Zion AI Marketplace" description="Manage your subscriptionview invoice history, and download billing statements."/>
      
      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
      
    </ProtectedRoute>);
};
