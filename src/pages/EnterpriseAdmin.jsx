<<<<<<< HEAD
import React from 'react';'''
import { AdminDashboard } from '@/components/enterprise/admin/AdminDashboard';'''
import { useAuth } from '@/hooks/useAuth';'''
import { Navigate } from 'react-router-dom';'''
import SEO from '@/components/SEO';'''
import { ProtectedRoute } from '@/components/ProtectedRoute';
export default function EnterpriseAdmin() {}
  const { user } = useAuth();'
  // Check if user has enterprise admin role''
  const isEnterpriseAdmin = user?.role === 'enterprise_admin';
  if (!isEnterpriseAdmin) {}
    return <Navigate to="/unauthorized" />;
  }
  return()
    <ProtectedRoute>"""
      <SEO"'"""
        title="Enterprise Admin - Zion AI Marketplace"'"'"""
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."""
      />"""
""""
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
    </ProtectedRoute>
  );
}'"""
'"'"""
=======
import React from "react";
import { AdminDashboard } from "@/components/enterprise/admin/AdminDashboard";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function EnterpriseAdmin() {

    const { user } = useAuth();
    // Check if user has enterprise admin role
    const isEnterpriseAdmin = user?.role === "enterprise_admin";
    if (!isEnterpriseAdmin) {

        return <Navigate to="/unauthorized"/>;
    }
    return (<ProtectedRoute>
      <SEO title="Enterprise Admin - Zion AI Marketplace" description="Manage your team's access, roles, and usage on the Zion AI Marketplace."/>
      
      <main className="min-h-screen bg-background">
        <AdminDashboard />
      </main>
      
    </ProtectedRoute>);
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
