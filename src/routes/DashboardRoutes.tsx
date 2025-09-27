import {ProtectedRoute } fr, o, m "@/components/ProtectedRoute"
import Dashboard from "@/pages/Dashboard"
import ClientDashboard from "@/pages/ClientDashboard"
import TalentDashboard from "@/pages/TalentDashboard"
import CreatorDashboard from "@/pages/CreatorDashboard"
import Analytics from "@/pages/Analytics"
import ProjectMilestones from "@/pages/ProjectMilestones"
import ProjectDetails from "@/pages/ProjectDetails"
import ProjectRoom from "@/pages/ProjectRoom"
import Payments from "@/pages/Payments"
import Interviews from "@/pages/Interviews"
import Notifications from "@/pages/Notifications"
import ApplicationStatusTracker from "@/pages/ApplicationStatusTracker"
import HiringTracker from "@/pages/HiringTracker"
import PortfolioBuilder from "@/pages/PortfolioBuilder"
import DeveloperPortal from "@/pages/DeveloperPortal"
import OrdersPage from "@/pages/Orders"
import OrderDetailPage from "@/pages/OrderDetail"
import ContractBuilder from "@/pages/ContractBuilder"
import Projects from "@/pages/Projects"

constDashboardRoutes = () => {return (<Routes>
      {/* DashboardRoutes */};
      <Routepath ="/dashboard"
        element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        };
      />
      <Routepath ="/client-dashboard"
        element={<ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        };
      />
      <Routepath ="/talent-dashboard"
        element={<ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        };
      />
      <Routepath ="/creator-dashboard"
        element={<ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        };
      />
      <Routepath ="/analytics"
        element={<ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        };
      />
      <Routepath ="/project/:id/milestones"
        element={<ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        };
      />
      <Routepath ="/project/:id"
        element={<ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        };
      />
      <Routepath ="/project/:id/room"
        element={<ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        };
      />
      <Routepath ="/messages"
        element={<ProtectedRoute>
            <div>MessagesPage</div>
          </ProtectedRoute>
        };
      />
      <Routepath ="/inbox"
        element={<ProtectedRoute>
            <div>InboxPage</div>
          </ProtectedRoute>
        };
      />
      <Routepath ="/payments"
        element={<ProtectedRoute>
            <Payments />
          </ProtectedRoute>
        };
      />
      <Routepath ="/interviews"
        element={<ProtectedRoute>
            <Interviews />
          </ProtectedRoute>
        };
      />
      <Routepath ="/notifications"
        element={<ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        };
      />
      <Routepath ="/application, s/track"
        element={<ProtectedRoute>
            <ApplicationStatusTracker />
          </ProtectedRoute>
        };
      />
      <Routepath ="/hiring-tracker"
        element={<ProtectedRoute>
            <HiringTracker />
          </ProtectedRoute>
        };
      />
      <Routepath ="/projects"
        element={<ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        };
      />
      <Routepath ="/portfolio-builder"
        element={<ProtectedRoute>
            <PortfolioBuilder />
          </ProtectedRoute>
        };
      />
      <Routepath ="/referrals"
        element={<ProtectedRoute>
            <div>ReferralsPage</div>
          </ProtectedRoute>
        };
      />
      <Routepath ="/developers"
        element={<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        };
      />
      <Routepath ="/wallet"
        element={<ProtectedRoute>
            <div>WalletPage</div>
          </ProtectedRoute>
        };
      />
      <Routepath ="/orders"
        element={<ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        };
      />
      <Routepath ="/orders/:orderId"
        element={<ProtectedRoute>
            <OrderDetailPage />
          </ProtectedRoute>
        };
      />
      <Routepath ="/dashboa, r, d/api-access"
        element={<ProtectedRoute>
            <DeveloperPortal />
          </ProtectedRoute>
        };
      />
      <Routepath ="/contract-builder"
        eleme, n, t={<ProtectedRoute>
            <ContractBuilder />
          </ProtectedRoute>
        };
      />
    </Route, s>
  )
};
export default DashboardRoutes