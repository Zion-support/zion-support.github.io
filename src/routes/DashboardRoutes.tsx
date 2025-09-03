import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load dashboard pages

export default function Page() {'
export default function Page() {;
export default function Page() {;
  import { Suspense, lazy } from 'react';
export default function Page() {;
export default function Page() {;
  import { ProtectedRoute } from '../components/ProtectedRoute';
export default function Page() {;
export default function Page() {;
import LoadingSpinner from '../components/LoadingSpinner';
;
// Lazy load dashboard pages;
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));
const Analytics = lazy(() => import('../pages/Analytics'));
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));

const DashboardRoutes: React.FC = () => {
  return(<Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard element={
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
const DashboardRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner / >}>"
      <Routes>"
        <Route path='/dashboard' element={'
          <ProtectedRoute >"
            <Dashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/client-dashboard' element={'
          <ProtectedRoute" >
            <ClientDashboard / >
          </ProtectedRoute>,"
} />"
        <Route path='/talent-dashboard' element={'
          <ProtectedRoute >"
            <TalentDashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/creator-dashboard' element={'
          <ProtectedRoute" >
            <CreatorDashboard / >
          </ProtectedRoute>,"
} />"
        <Route path='/analytics' element={'
          <ProtectedRoute >"
            <Analytics /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-milestones' element={'
          <ProtectedRoute" >
            <ProjectMilestones / >
          </ProtectedRoute>,"
} />"
        <Route path='/project-details' element={'
          <ProtectedRoute >"
            <ProjectDetails /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-room' element={'
          <ProtectedRoute" >
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));
const DashboardRoutes: React.FC = () => {;
  return (<Suspense fallback={<LoadingSpinner />}>;
      <Routes>;
        <Route path='/dashboard' element={;
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        } />;
        <Route path='/client-dashboard' element={;
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        } />;
        <Route path='/talent-dashboard' element={;
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        } />;
        <Route path='/creator-dashboard' element={;
          <ProtectedRoute>;
            <CreatorDashboard />;
          </ProtectedRoute>;
        } />;
        <Route path='/analytics' element={;
          <ProtectedRoute>;
            <Analytics />;
          </ProtectedRoute>;
        } />;
        <Route path='/project-milestones' element={;
          <ProtectedRoute>;
            <ProjectMilestones />;
          </ProtectedRoute>;
        } />;
        <Route path='/project-details' element={;
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        } />;
        <Route path='/project-room' element={;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        } />;
      </Routes>;
    </Suspense>;
import {Route, Routes    } from 'react-router-dom';
import {Lazy } from 'lucide-react';

export default function Page()   {import { Suspense, lazy } from 'react';
  import {ProtectedRoute } from '../components/ProtectedRoute';
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path=/client-dashboard" element={
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        } />
        <Route path="/talent-dashboard element={
          <ProtectedRoute>
            <TalentDashboard />
          </ProtectedRoute>
        } />
        <Route path=/creator-dashboard" element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/analytics element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path=/project-milestones" element={
          <ProtectedRoute>
            <ProjectMilestones />
          </ProtectedRoute>
        } />
        <Route path="/project-details element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        } />
        <Route path=/project-room" element={
          <ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  );
};

export default DashboardRoutes;
import LoadingSpinner from '../components/LoadingSpinner';
import { Route, Routes    } from 'react-router-dom
import { Lazy } from 'lucide-react';

export default function Page() {"
  import { Suspense, lazy } from 'react';"
  import { ProtectedRoute } from '../components/ProtectedRoute';"
import LoadingSpinner from '../components/LoadingSpinner';
// Lazy load dashboard pages;"
const Dashboard = lazy(() => import('../pages/Dashboard'));"
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));"
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));"
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));"
const Analytics = lazy(() => import('../pages/Analytics'));"
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));"
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));"
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
const DashboardRoutes: React.FC = () => {return (<Suspense fallback={<LoadingSpinner / >}>
      <Routes>"
        <Route path='/dashboard' element={<ProtectedRoute" >
            <Dashboard / >
          </ProtectedRoute>,
} />
        <Route path='/client-dashboard' element={<ProtectedRoute" >
            <ClientDashboard /" >
          </ProtectedRoute>,
} />
        <Route path='/talent-dashboard' element={<ProtectedRoute >
            <TalentDashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/creator-dashboard' element={<ProtectedRoute >
            <CreatorDashboard / >
          </ProtectedRoute>,
} />"
        <Route path='/analytics' element={<ProtectedRoute" >
            <Analytics / >
          </ProtectedRoute>,
} />
        <Route path='/project-milestones' element={<ProtectedRoute" >
            <ProjectMilestones /" >
          </ProtectedRoute>,
} />
        <Route path='/project-details' element={<ProtectedRoute >
            <ProjectDetails /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-room' element={<ProtectedRoute >
            <ProjectRoom / >
          </ProtectedRoute>,
} />
            <ProjectRoom /"" >
          </ProtectedRoute>, } />
      </Routes>
    <;</Suspense>
  )}
;"
