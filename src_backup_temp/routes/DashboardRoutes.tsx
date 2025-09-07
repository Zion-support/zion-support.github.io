import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';
';
// Lazy load dashboard pages';';
const Dashboard = lazy(() => import('../pages/Dashboard'));';';
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));';';
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));';';
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));';';
const Analytics = lazy(() => import('../pages/Analytics'));';';
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));';';
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));';';
;
// Lazy load dashboard pages;
// Lazy load dashboard pages
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));
const Analytics = lazy(() => import('../pages/Analytics'));
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));
const "DashboardRoutes": "React.FC = () => {;
  return (<Suspense fallback={<LoadingSpinner  />"}>;
      <Routes>;
        <Route path="/dashboard" element={;
          <ProtectedRoute>;
            <Dashboard  />;
          </ProtectedRoute>;
        } />;
        <Route path="/client-dashboard" element={;
            <ClientDashboard  />;
        <Route path="/talent-dashboard" element={;
            <TalentDashboard  />;
        <Route path="/creator-dashboard" element={;
            <CreatorDashboard  />;
        <Route path="/analytics" element={;
            <Analytics  />;
        <Route path="/project-milestones" element={;
            <ProjectMilestones  />;
        <Route path="/project-details" element={;
            <ProjectDetails  />;
        <Route path="/project-room" element={;
            <ProjectRoom  />;
      </Routes>;
    </Suspense>;
const DashboardRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>
      <Routes>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard  />
          </ProtectedRoute>
        } />
        <Route path="/client-dashboard" element={
            <ClientDashboard  />
        <Route path="/talent-dashboard" element={
            <TalentDashboard  />
        <Route path="/creator-dashboard" element={
            <CreatorDashboard  />
        <Route path="/analytics" element={
            <Analytics  />
        <Route path="/project-milestones" element={
            <ProjectMilestones  />
        <Route path="/project-details" element={
            <ProjectDetails  />
        <Route path="/project-room" element={
            <ProjectRoom  />
      </Routes>
    </Suspense>
  );
};
export default DashboardRoutes;
</Route>
</Route>';
</Route>;';;';
</Route>;