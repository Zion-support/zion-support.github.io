
import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import Dashboard from "@/pages/Dashboard"
import ClientDashboard from "@/pages/ClientDashboard"
import TalentDashboard from "@/pages/TalentDashboard"
import CreatorDashboard from "@/pages/CreatorDashboard"
import Analytics from "@/pages/Analytics"
import ProjectMilestones from "@/pages/ProjectMilestones"
import ProjectDetails from "@/pages/ProjectDetails"
import ProjectRoom from "@/pages/ProjectRoom"
//[^;]*
import Payments from "@/pages/Payments"
import Interviews from "@/pages/Interviews"
import Notifications from "@/pages/Notifications"
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker"
import HiringTracker from "@/pages/HiringTracker"
import PortfolioBuilder from "@/pages/PortfolioBuilder"
//[^;]*
import DeveloperPortal from "@/pages/DeveloperPortal"
//[^;]*
import OrdersPage from "@/pages/Orders"
import OrderDetailPage from "@/pages/OrderDetail"
import ContractBuilder from "@/pages/ContractBuilder"
import Projects from "@/pages/Projects"
const DashboardRoutes = () => {;
  return (
    <Routes>;
      {/* Dashboard Routes */};
      <Route;
        path="/dashboard"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/client-dashboard"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/talent-dashboard"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/creator-dashboard"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/analytics"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/project/:id/milestones"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/project/:id"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/project/:id/room"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/messages"
        element={;
          <ProtectedRoute>;
            <div>Messages Page</[^>]*>
          </[^>]*>
        };
      />;
      <Route;
        path="/inbox"
        element={;
          <ProtectedRoute>;
            <div>Inbox Page</[^>]*>
          </[^>]*>
        };
      />;
      <Route;
        path="/payments"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/interviews"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/notifications"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/applications/track"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/hiring-tracker"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/projects"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/portfolio-builder"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/referrals"
        element={;
          <ProtectedRoute>;
            <div>Referrals Page</[^>]*>
          </[^>]*>
        };
      />;
      <Route;
        path="/developers"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/wallet"
        element={;
          <ProtectedRoute>;
            <div>Wallet Page</[^>]*>
          </[^>]*>
        };
      />;
      <Route;
        path="/orders"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/orders/:orderId"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/dashboard/api-access"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
      <Route;
        path="/contract-builder"
        element={;
          <ProtectedRoute>;
            <[^>]*/>
          </[^>]*>
        };
      />;
    </[^>]*>
  ),;
},;

export default DashboardRoutes;