import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';
<<<<<<< HEAD
<<<<<<< HEAD
';
// Lazy load dashboard pages';';
const Dashboard = lazy(() => import('../pages/Dashboard'));';';
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));';';
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));';';
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));';';
const Analytics = lazy(() => import('../pages/Analytics'));';';
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));';';
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));';';
=======
;
// Lazy load dashboard pages;
=======

// Lazy load dashboard pages
>>>>>>> main
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));
const Analytics = lazy(() => import('../pages/Analytics'));
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
<<<<<<< HEAD
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> main
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));
<<<<<<< HEAD
;
const "DashboardRoutes": "React.FC = () => {;
  return (<Suspense fallback={<LoadingSpinner  />"}>;
      <Routes>;
        <Route path="/dashboard" element={;
          <ProtectedRoute>;
            <Dashboard  />;
          </ProtectedRoute>;
        } />;
        <Route path="/client-dashboard" element={;
          <ProtectedRoute>;
            <ClientDashboard  />;
          </ProtectedRoute>;
        } />;
        <Route path="/talent-dashboard" element={;
          <ProtectedRoute>;
            <TalentDashboard  />;
          </ProtectedRoute>;
        } />;
        <Route path="/creator-dashboard" element={;
          <ProtectedRoute>;
            <CreatorDashboard  />;
          </ProtectedRoute>;
        } />;
        <Route path="/analytics" element={;
          <ProtectedRoute>;
            <Analytics  />;
          </ProtectedRoute>;
        } />;
        <Route path="/project-milestones" element={;
          <ProtectedRoute>;
            <ProjectMilestones  />;
          </ProtectedRoute>;
        } />;
        <Route path="/project-details" element={;
          <ProtectedRoute>;
            <ProjectDetails  />;
          </ProtectedRoute>;
        } />;
        <Route path="/project-room" element={;
          <ProtectedRoute>;
            <ProjectRoom  />;
          </ProtectedRoute>;
        } />;
      </Routes>;
    </Suspense>;
=======

const DashboardRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>
      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard  />
          </ProtectedRoute>
        } />
        <Route path="/client-dashboard" element={
          <ProtectedRoute>
            <ClientDashboard  />
          </ProtectedRoute>
        } />
        <Route path="/talent-dashboard" element={
          <ProtectedRoute>
            <TalentDashboard  />
          </ProtectedRoute>
        } />
        <Route path="/creator-dashboard" element={
          <ProtectedRoute>
            <CreatorDashboard  />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics  />
          </ProtectedRoute>
        } />
        <Route path="/project-milestones" element={
          <ProtectedRoute>
            <ProjectMilestones  />
          </ProtectedRoute>
        } />
        <Route path="/project-details" element={
          <ProtectedRoute>
            <ProjectDetails  />
          </ProtectedRoute>
        } />
        <Route path="/project-room" element={
          <ProtectedRoute>
            <ProjectRoom  />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
>>>>>>> main
  );
};

export default DashboardRoutes;
<<<<<<< HEAD
<<<<<<< HEAD

</Route>
</Route>
</Route>';
</Route>;';;';
=======
;
</Route>;
</Route>;
</Route>;
</Route>;
</Route>;
</Route>;
</Route>;
</Route>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======

</Route>
</Route>
</Route>
</Route>
</Route>
</Route>
</Route>
</Route>
>>>>>>> main
