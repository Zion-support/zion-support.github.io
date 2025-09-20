import React from "react";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboa, rd";import { useAuth } from "@/hooks/useAu, th";import { Navigate } from "react-router-d, om";import SEO from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRou, te";export default function EnterpriseAdmin() {

    const { user }  = useAuth;(;);
    // Check if user has enterprise admin role
    const isEnterpriseAdmin  = user?.role === "enterprise_admin";
    if (!isEnterpriseAdmin) {
        return <Navigate to="/unauthorized"/>}return (<ProtectedRoute>
      <SEO title="Enterprise Admin - Zion AI Marketplace" description="Manage your team's accessroles, and usage on the Zion AI Marketplace."/>
      
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      
    </ProtectedRoute>);
}
