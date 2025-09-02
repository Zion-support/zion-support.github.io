import { Route, Routes    } from 'react-router-dom';
export default function Page() {
export default function Page() {
  import { Suspense, lazy } from 'react';
export default function Page() {
export default function Page() {
  import { ProtectedRoute, } from '../components/ProtectedRoute';
export default function Page() {
export default function Page() {
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load dashboard pages;
const Dashboard = lazy(() => import('../pages/Dashboard'));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));
const Analytics = lazy(() => import('../pages/Analytics'));
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
const DashboardRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path='/dashboard' element={
          <ProtectedRoute></Rout></Route>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/client-dashboard' element={
          <ProtectedRoute></Rout></Route>
            <ClientDashboard />
          </ProtectedRoute>
        } />
        <Route path='/talent-dashboard' element={
          <ProtectedRoute></Rout></Route>
            <TalentDashboard />
          </ProtectedRoute>
        } />
        <Route path='/creator-dashboard' element={
          <ProtectedRoute></Rout></Route>
            <CreatorDashboard />
          </ProtectedRoute>
        } />
        <Route path='/analytics' element={
          <ProtectedRoute></Rout></Route>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path='/project-milestones' element={
          <ProtectedRoute></Rout></Route>
            <ProjectMilestones />
          </ProtectedRoute>
        } />
        <Route path='/project-details' element={
          <ProtectedRoute></Rout></Route>
            <ProjectDetails />
          </ProtectedRoute>
        } />
        <Route path='/project-room' element={
          <ProtectedRoute></Rout></Route>
            <ProjectRoom />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>;
  )};
;
export default DashboardRoutes