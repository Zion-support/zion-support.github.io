import { Route, Routes    } from &apos;react-router-dom';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ Suspense, lazy } from &apos;react';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ ProtectedRoute } from &apos;../components/ProtectedRoute';&apos;&apos;
export default function Page() {}
export default function Page() ;{
import LoadingSpinner from &apos;../components/LoadingSpinner';

// Lazy load dashboard pages;&apos;}&apos;
const Dashboard = lazy(() => import(&apos;../pages/Dashboard&apos;));&apos;
const ClientDashboard = lazy(() => import(&apos;../pages/ClientDashboard&apos;));&apos;
const TalentDashboard = lazy(() => import(&apos;../pages/TalentDashboard&apos;));&apos;
const CreatorDashboard = lazy(() => import(&apos;../pages/CreatorDashboard&apos;));&apos;
const Analytics = lazy(() => import(&apos;../pages/Analytics&apos;));&apos;
const ProjectMilestones = lazy(() => import(&apos;../pages/ProjectMilestones&apos;));&apos;
const ProjectDetails = lazy(() => import(&apos;../pages/ProjectDetails&apos;));&apos;
const ProjectRoom = lazy(() => import(&apos;../pages/ProjectRoom&apos;))&apos;
const DashboardRoutes: React.FC = () => {
  return (}<Suspense fallback={}<LoadingSpinner />}>
      <Routes>
        <;<Route path=&apos;/dashboard&apos; element={&apos;}
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path=&apos;/client-dashboard&apos; element={&apos;}
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        } />
        <Route path=&apos;/talent-dashboard&apos; element={&apos;}
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        } />
        <Route path=&apos;/creator-dashboard&apos; element={&apos;}
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        } />
        <Route path=&apos;/analytics&apos; element={&apos;}
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path=&apos;/project-milestones&apos; element={&apos;}
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        } />
        <Route path=&apos;/project-details&apos; element={&apos;}
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        } />
        <Route path=&apos;/project-room&apos; element={&apos;}
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        } />
      </Routes>
    <;</Suspense>
  )}
;
export default DashboardRoutes