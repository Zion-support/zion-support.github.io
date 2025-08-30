import React from "react";
import { BillingDashboard } from "@/components/enterprise/billing/BillingDashboard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseBilling() {
    const { user } = useAuth();
    const router = useRouter();
    // Check if user has billing permissions
    const hasBillingAccess = user?.role === "enterprise_admin" ||
        (user?.permissions && user.permissions.includes('billing_access'));
    if (!hasBillingAccess) {
<<<<<<< HEAD
        if (typeof window !== 'undefined') {
            navigate('/unauthorized');

        return null;

=======
<<<<<<< HEAD
        if (typeof window !== 'null') {
            router.push('/unauthorized')}
        return null}
=======
        if (typeof window !== 'null') {
            router('/unauthorized');
        }
        return null;
    }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<ProtectedRoute>
      <SEO title="Enterprise Billing - Zion AI Marketplace" description="Manage your subscription, view invoice history, and download billing statements."/>

      <main className="min-h-screen bg-background">
        <BillingDashboard />
      </main>
<<<<<<< HEAD

    </ProtectedRoute>);
}}}
=======
      
    </ProtectedRoute>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
