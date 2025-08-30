
import { Route, Routes               } from 'react-router-dom.ts';
import { ProtectedRoute               } from '@/components/ProtectedRoute';
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
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/client-dashboard"
        element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/talent-dashboard"
        element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>

      />
      <Route
        path="/creator-dashboard"
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/project/:id/milestones"
        element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>

      />
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>

      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <div>Messages Page</div>
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/inbox"
        element={
          <ProtectedRoute>
            <div>Inbox Page</div>
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <Payments />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/applications/track"
        element={
          <ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/hiring-tracker"
        element={
          <ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>

      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>

      />
      <Route
        path="/portfolio-builder"
        element={
          <ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/referrals"
        element={
          <ProtectedRoute>
            <div>Referrals Page</div>
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      <Route
        path="/contract-builder"
        element={
          <ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
<<<<<<< HEAD

=======
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
    </Routes>
  );
};

export default DashboardRoutes;
}}}}}}}}}}}}}}}}}}}}}}}}