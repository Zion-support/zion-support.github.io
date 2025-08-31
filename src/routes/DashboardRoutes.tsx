import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';


const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
})
      />
      <Route 
        path="/client-dashboard" 
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
})
      />
      <Route 
        path="/talent-dashboard" 
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
})
      />
      <Route 
        path="/creator-dashboard" 
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
})
      />
      <Route 
        path="/analytics" 
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
})
      />
      <Route 
        path="/project/:id/milestones" 
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
})
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
})
      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
})
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <div>Messages Page</div>
          </ProtectedRoute>
})
      />
      <Route 
        path="/inbox" 
        element={
          <ProtectedRoute>
            <div>Inbox Page</div>
          </ProtectedRoute>
})
      />
      <Route 
        path="/payments" 
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
})
      />
      <Route 
        path="/interviews" 
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
})
      />
      <Route 
        path="/notifications" 
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
})
      />
      <Route 
        path="/applications/track" 
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
})
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
})
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
})
      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
})
      />
      <Route 
        path="/referrals" 
        element={
          <ProtectedRoute>
            <div>Referrals Page</div>
          </ProtectedRoute>
})
      />
      <Route
        path="/developers"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
})
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>
            <div>Wallet Page</div>
          </ProtectedRoute>
})
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
})
      />
      <Route
        path="/orders/:orderId"
        element={
          <ProtectedRoute>
            <OrderDetailPage />
          </ProtectedRoute>
})
      />
      <Route
        path="/dashboard/api-access"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
})
      />
      <Route
        path="/contract-builder"
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
})
      />
    </Routes>
  );
};

export default DashboardRoutes;
