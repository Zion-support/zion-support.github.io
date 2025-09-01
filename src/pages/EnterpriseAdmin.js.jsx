import { Navigate } from 'react - router - dom';
import React from 'react';
import { AdminDashboard } from '@/components / enterprise / admin / AdminDashboard';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SEO } from '@/components / SEO';
import { useAuth } from '@/hooks / useAuth';
export default function EnterpriseAdmin () {

  const { user } = useAuth () ;
  // Check if user has enterprise admin role
  const isEnterpriseAdmin = user?.role === 'enterprise_admin';
  if (!isEnterpriseAdmin) {
    return < Navigate to="/unauthorized" />;
  }
  return (<ProtectedRoute>
      <SEO
        title="Enterprise Admin - Zion AI Marketplace"
        description="Manage your team's access, roles, and usage on the Zion AI Marketplace."
            />

      <main className="min - h-screen bg - background">
        <AdminDashboard       />
      </main>
    </ProtectedRoute>) ;
}
