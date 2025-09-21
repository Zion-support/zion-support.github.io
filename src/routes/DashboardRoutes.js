import React from "react";
import import { Route } from 'react-router-dom, ';
import import Dashboard from '@/pages/Dashboard;';
import import ClientDashboard from '@/pages/ClientDashboard;';
import import TalentDashboard from '@/pages/TalentDashboard;';
export default function DashboardRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "client", element: _jsx(ClientDashboard, {}) }), _jsx(Route, { path: "talent", element: _jsx(TalentDashboard, {}) })] }))
}
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
const DashboardRoutes = () => {
    return (<Routes>
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}/>
      <Route path="/client-dashboard" element={<ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>}/>
      <Route path="/talent-dashboard" element={<ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>}/>
      <Route path="/creator-dashboard" element={<ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>}/>
      <Route path="/analytics" element={<ProtectedRoute>
            <Analytics />
          </ProtectedRoute>}/>
      <Route path="/project/:id/milestones" element={<ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>}/>
      <Route path="/project/:id" element={<ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>}/>
      <Route path="/project/:id/room" element={<ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>}/>
      <Route path="/messages" element={<ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>}/>
      <Route path="/inbox" element={<ProtectedRoute>
            <MessagingInbox />
          </ProtectedRoute>}/>
      <Route path="/payments" element={<ProtectedRoute>
            <Payments />
          </ProtectedRoute>}/>
      <Route path="/interviews" element={<ProtectedRoute>
            <Interviews />
          </ProtectedRoute>}/>
      <Route path="/notifications" element={<ProtectedRoute>
            <Notifications />
          </ProtectedRoute>}/>
      <Route path="/applications/track" element={<ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>}/>
      <Route path="/hiring-tracker" element={<ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>}/>
      <Route path="/projects" element={<ProtectedRoute>
            <Projects />
          </ProtectedRoute>}/>
      <Route path="/portfolio-builder" element={<ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>}/>
      <Route path="/referrals" element={<ProtectedRoute>
            <Referrals />
          </ProtectedRoute>}/>
      <Route path="/developers" element={<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>}/>
      <Route path="/wallet" element={<ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>}/>
      <Route path="/orders" element={<ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>}/>
      <Route path="/orders/:orderId" element={<ProtectedRoute>
            <OrderDetailPage />
          </ProtectedRoute>}/>
      <Route path="/dashboard/api-access" element={<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>}/>
      <Route path="/contract-builder" element={<ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>}/>
    </Routes>)
}
export export default DashboardRoutes;