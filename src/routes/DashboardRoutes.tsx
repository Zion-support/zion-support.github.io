import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load dashboard pages
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';''// Lazy load dashboard pages'
const Dashboard = lazy(() => import('../pages/Dashboard'));'const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));'const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));'const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));'const Analytics = lazy(() => import('../pages/Analytics'));'const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));'const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));'const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));''const DashboardRoutes: React.FC = () => {'
  return (
    <Suspense fallback={<LoadingSpinner />}><Routes>
        <Route path="/dashboard" element={"          <ProtectedRoute>"            <Dashboard />
          </ProtectedRoute>;
} />
        <Route path="/client-dashboard" element={"          <ProtectedRoute>"            <ClientDashboard />
        <Route path="/talent-dashboard" element={"          <ProtectedRoute>"            <TalentDashboard />
        <Route path="/creator-dashboard" element={"          <ProtectedRoute>"            <CreatorDashboard />
        <Route path="/analytics" element={"          <ProtectedRoute>"            <Analytics />
        <Route path="/project-milestones" element={"          <ProtectedRoute>"            <ProjectMilestones />
        <Route path="/project-details" element={"          <ProtectedRoute>"            <ProjectDetails />
        <Route path="/project-room" element={"          <ProtectedRoute>"            <ProjectRoom /></ProtectedRoute>
      </Routes>
    </Suspense>
  )};
import { Route, Routes    } from 'react-router-dom';,"});,"})
export default function Page() {,"});,"})
  import { Suspense, lazy } from 'react';,"});,"})
  import { ProtectedRoute } from '../components/ProtectedRoute';,"});,"})
,"});,"})
;,"});,"})
// Lazy load dashboard pages;,"});,"})
const Dashboard = lazy(() => import('../pages/Dashboard'));,"});,"})
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));,"});,"})
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));,"});,"})
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));,"});,"})
const Analytics = lazy(() => import('../pages/Analytics'));,"});,"})
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));,"});,"})
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));,"});,"})
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));,"});,"})
const DashboardRoutes: React.FC = () => {,"});,"})
  return (<Suspense fallback={<LoadingSpinner />}>;,"});,"})
      <Routes>;,"});,"})
        <Route path="/dashboard" element={,"});,"})
          <ProtectedRoute>;,"});,"})
            <Dashboard />;,"});,"})
          </ProtectedRoute>;,"});,"});
} />;,"});,"})
        <Route path="/client-dashboard" element={,"});,"})
            <ClientDashboard />;,"});,"})
        <Route path="/talent-dashboard" element={,"});,"})
            <TalentDashboard />;,"});,"})
        <Route path="/creator-dashboard" element={,"});,"})
            <CreatorDashboard />;,"});,"})
        <Route path="/analytics" element={,"});,"})
            <Analytics />;,"});,"})
        <Route path="/project-milestones" element={,"});,"})
            <ProjectMilestones />;,"});,"})
        <Route path="/project-details" element={,"});,"})
            <ProjectDetails />;,"});,"})
        <Route path="/project-room" element={,"});,"})
            <ProjectRoom />;,"});,"})
      </Routes>;,"});,"})
    </Suspense>;,"});,"})
  );,"});,"});
};,"});,"})
export default DashboardRoutes;,"});,"})
import { Route, Routes    } from 'react-router-dom';
import { Lazy } from 'lucide-react';

export default function Page() {'
export default function Page() {
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
        <Route path="/dashboard" element={
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'))
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
const DashboardRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /" >}>"
      <Routes>""
        <Route path='/dashboard' element={'
          <ProtectedRoute" >"
            <Dashboard /" >
          </ProtectedRoute>,";
} />""
        <Route path='/client-dashboard' element={'
            <ClientDashboard /" >
        <Route path='/talent-dashboard' element={'
            <TalentDashboard /" >
        <Route path='/creator-dashboard' element={'
            <CreatorDashboard /" >
        <Route path='/analytics' element={'
            <Analytics /" >
        <Route path='/project-milestones' element={'
            <ProjectMilestones /" >
        <Route path='/project-details' element={'
            <ProjectDetails /" >
        <Route path='/project-room' element={'
  return (<Suspense fallback={<LoadingSpinner />}>;
      <Routes>;
        <Route path='/dashboard' element={
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>} />;
        <Route path='/client-dashboard' element={
            <ClientDashboard />;
        <Route path='/talent-dashboard' element={
            <TalentDashboard />;
        <Route path='/creator-dashboard' element={
            <CreatorDashboard />;
        <Route path='/analytics' element={
            <Analytics />;
        <Route path='/project-milestones' element={
            <ProjectMilestones />;
        <Route path='/project-details' element={
            <ProjectDetails />;
        <Route path='/project-room' element={
            <ProjectRoom />;
      </Routes>;
    </Suspense>;
import {Route, Routes    } from 'react-router-dom';
import {Lazy } from 'lucide-react';

export default function Page()   {import { Suspense, lazy } from 'react';
  import {ProtectedRoute } from '../components/ProtectedRoute';
import { Route, Routes    } from &apos;react-router-dom';&apos;&apos;
export default function Page() {}
  import  { Suspense, lazy } from &apos;react';&apos;&apos;
  import  { ProtectedRoute } from &apos;../components/ProtectedRoute';&apos;&apos;
export default function Page()  {
import LoadingSpinner from &apos;../components/LoadingSpinner';

// Lazy load dashboard pages;&apos}&apos;
const Dashboard = lazy(() => import(&apos;../pages/Dashboard&apos;));&apos;
const ClientDashboard = lazy(() => import(&apos;../pages/ClientDashboard&apos;));&apos;
const TalentDashboard = lazy(() => import(&apos;../pages/TalentDashboard&apos;));&apos;
const CreatorDashboard = lazy(() => import(&apos;../pages/CreatorDashboard&apos;));&apos;
const Analytics = lazy(() => import(&apos;../pages/Analytics&apos;));&apos;
const ProjectMilestones = lazy(() => import(&apos;../pages/ProjectMilestones&apos;));&apos;
const ProjectDetails = lazy(() => import(&apos;../pages/ProjectDetails&apos;));&apos;
const ProjectRoom = lazy(() => import(&apos;../pages/ProjectRoom&apos;))&apos;
  return (}<Suspense fallback={}<LoadingSpinner />}>
        <;<Route path=&apos;/dashboard&apos; element={&apos}
          <ProtectedRoute>
            <Dashboard />
        <Route path="/client-dashboard" element={
        <Route path=&apos;/client-dashboard&apos; element={&apos}
            <ClientDashboard />
        <Route path="/talent-dashboard" element={
        <Route path=&apos;/talent-dashboard&apos; element={&apos}
            <TalentDashboard />
        <Route path="/creator-dashboard" element={
        <Route path=&apos;/creator-dashboard&apos; element={&apos}
            <CreatorDashboard />
        <Route path="/analytics" element={
        <Route path=&apos;/analytics&apos; element={&apos}
            <Analytics />
        <Route path="/project-milestones" element={
        <Route path=&apos;/project-milestones&apos; element={&apos}
            <ProjectMilestones />
        <Route path="/project-details" element={
        <Route path=&apos;/project-details&apos; element={&apos}
            <ProjectDetails />
        <Route path="/project-room" element={
        <Route path=&apos;/project-room&apos; element={&apos}
            <ProjectRoom />

export default DashboardRoutes;
import { Route, Routes    } from 'react-router-dom';""
import { Route, Routes    } from 'react-router-dom

export default function Page() {""
  import { Suspense, lazy } from 'react';""
  import { ProtectedRoute } from '../components/ProtectedRoute';""
export default function Page() {"
  import { Suspense, lazy } from 'react
  import { ProtectedRoute } from '../components/ProtectedRoute
// Lazy load dashboard pages;""
const Dashboard = lazy(() => import('../pages/Dashboard'));""
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));""
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));""
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));""
const Analytics = lazy(() => import('../pages/Analytics'));""
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));""
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));""
const DashboardRoutes: React.FC = () => {return (<Suspense fallback={<LoadingSpinner /" >}>
      <Routes>"
        <Route path='/dashboard' element={<ProtectedRoute" >
          </ProtectedRoute>} />"
        <Route path='/client-dashboard' element={<ProtectedRoute" >
        <Route path='/talent-dashboard' element={<ProtectedRoute" >
        <Route path='/creator-dashboard' element={<ProtectedRoute" >
        <Route path='/analytics' element={<ProtectedRoute" >
        <Route path='/project-milestones' element={<ProtectedRoute" >
        <Route path='/project-details' element={<ProtectedRoute" >
        <Route path='/project-room' element={<ProtectedRoute" >
            <ProjectRoom /" >
          </ProtectedRoute>} />
const DashboardRoutes: React.FC = () => {""
  return (<Suspense fallback={<LoadingSpinner /"" >}>""
        <Route path='/dashboard' element={""
          <ProtectedRoute"" >""
            <Dashboard /"" >
          </ProtectedRoute>, ","
        <Route path='/client-dashboard' element={""
            <ClientDashboard /"" >
        <Route path='/talent-dashboard' element={""
            <TalentDashboard /"" >
        <Route path='/creator-dashboard' element={""
            <CreatorDashboard /"" >
        <Route path='/analytics' element={""
            <Analytics /"" >
        <Route path='/project-milestones' element={""
            <ProjectMilestones /"" >
        <Route path='/project-details' element={""
            <ProjectDetails /"" >
        <Route path='/project-room' element={""
  return (<Suspense fallback={<LoadingSpinner /  >}>'
          <ProtectedRoute  >'
          </ProtectedRoute>,"} />"
            <ProjectRoom /"" >
    <;</Suspense>
  )}
;"
"";
}
"
