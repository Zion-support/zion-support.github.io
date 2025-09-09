import React from 'react';''';
import { AdminDashboard } from '@/components/enterprise/admin/AdminDashboard';''';
import { useAuth } from '@/hooks/useAuth';''';
import { Navigate } from 'react-router-dom';''';
import SEO from '@/components/SEO';''';
import { ProtectedRoute } from '@/components/ProtectedRoute';
export {};
  return null;
}
  const { user } = useAuth();';
  // Check if user has enterprise admin role'';
  const isEnterpriseAdmin = user?.role === 'enterprise_admin';
  if (!isEnterpriseAdmin) {}
    return <Navigate to="/unauthorized" />}
  return();
    <ProtectedRoute>";
      <div>Broken JSX</div>
      />";
"";
      <main className="min-h-screen bg-background">;
        <AdminDashboard />;
      </main>;

    </ProtectedRoute>)}


export { EnterpriseAdmin }
export { EnterpriseAdmin }
export { EnterpriseAdmin }
export { EnterpriseAdmin }
export { EnterpriseAdmin }