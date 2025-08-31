<<<<<<< HEAD

import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Dashboard from '@/pages/Dashboard';
import ClientDashboard from '@/pages/ClientDashboard';
import TalentDashboard from '@/pages/TalentDashboard';
import CreatorDashboard from '@/pages/CreatorDashboard';
import Analytics from '@/pages/Analytics';
import ProjectMilestones from '@/pages/ProjectMilestones';
import ProjectDetails from '@/pages/ProjectDetails';
import ProjectRoom from '@/pages/ProjectRoom';
import Orders from '@/pages/Orders';
import OrderDetail from '@/pages/OrderDetail';
import Profile from '@/pages/Profile';
import AccountSettings from '@/pages/AccountSettings';
import SavedTalents from '@/pages/SavedTalentsPage';
import HiringTracker from '@/pages/HiringTracker';
import PortfolioBuilder from '@/pages/PortfolioBuilder';
import ContractBuilder from '@/pages/ContractBuilder';
import DisputeManagement from '@/pages/DisputeManagement';
import DisputesPage from '@/pages/dashboard/DisputesPage';
import DisputeDetailPage from '@/pages/dashboard/DisputeDetailPage';
import RequestsPanel from '@/pages/dashboard/RequestsPanel';

export const DashboardRoutes = () => {
=======
import { Route, Routes  } from 'react-router-dom.ts';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import Dashboard from "@/pages/Dashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import TalentDashboard from "@/pages/TalentDashboard";
import CreatorDashboard from "@/pages/CreatorDashboard";
import Analytics from "@/pages/Analytics";
import ProjectMilestones from "@/pages/ProjectMilestones";
import ProjectDetails from "@/pages/ProjectDetails";
import ProjectRoom from "@/pages/ProjectRoom";
// MessagingInbox import removed - page not found
import Payments from "@/pages/Payments";
import Interviews from "@/pages/Interviews";
import Notifications from "@/pages/Notifications";
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker";
import HiringTracker from "@/pages/HiringTracker";
import PortfolioBuilder from "@/pages/PortfolioBuilder";
// Referrals import removed - page not found
import DeveloperPortal from "@/pages/DeveloperPortal";
// WalletPage import removed - page not found
import OrdersPage from "@/pages/Orders";
import OrderDetailPage from "@/pages/OrderDetail";
import ContractBuilder from "@/pages/ContractBuilder";
import Projects from "@/pages/Projects";
const DashboardRoutes = () => {
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  return (
    <>
      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/client-dashboard"
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/talent-dashboard"
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/creator-dashboard"
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id/milestones"
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <div>Messages Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/inbox"
        element={
          <ProtectedRoute>
            <div>Inbox Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account-settings"
        element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/saved-talents"
        element={
          <ProtectedRoute>
            <SavedTalents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        }
<<<<<<< HEAD
=======
      />
      <Route
        path="/referrals"
        element={
          <ProtectedRoute>
            <div>Referrals Page</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/developers"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>
            <div>Wallet Page</div>
          </ProtectedRoute>
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
      />
      <Route
        path="/orders/:orderId"
        element={
          <ProtectedRoute>
            <OrderDetailPage />
          </ProtectedRoute>
      />
      <Route
        path="/dashboard/api-access"
        element={
          <ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        }
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/contract-builder"
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dispute-management"
        element={
          <ProtectedRoute>
            <DisputeManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/disputes"
        element={
          <ProtectedRoute>
            <DisputesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dispute/:id"
        element={
          <ProtectedRoute>
            <DisputeDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/requests"
        element={
          <ProtectedRoute>
            <RequestsPanel />
          </ProtectedRoute>
        }
      />
    </>
  );
<<<<<<< HEAD
};
=======
};
export default DashboardRoutes;
}}}}}}}}}}}}}}}}}}}}}}}}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
