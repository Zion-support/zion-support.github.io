<<<<<<< HEAD
import { Route, Routes    } from 'react-router-dom';
<<<<<<< HEAD
import { Lazy } from 'lucide-react';

export default function Page() {'
=======
export default function Page() {;
export default function Page() {;
>>>>>>> main
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
<<<<<<< HEAD
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'))
=======
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));
<<<<<<< HEAD
>>>>>>> main
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
const DashboardRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /" >}>"
      <Routes>""
        <Route path='/dashboard' element={'
          <ProtectedRoute" >"
            <Dashboard /" >
          </ProtectedRoute>,"
} />""
        <Route path='/client-dashboard' element={'
          <ProtectedRoute" >"
            <ClientDashboard /" >
          </ProtectedRoute>,"
} />""
        <Route path='/talent-dashboard' element={'
          <ProtectedRoute" >"
            <TalentDashboard /" >
          </ProtectedRoute>,"
} />""
        <Route path='/creator-dashboard' element={'
          <ProtectedRoute" >"
            <CreatorDashboard /" >
          </ProtectedRoute>,"
} />""
        <Route path='/analytics' element={'
          <ProtectedRoute" >"
            <Analytics /" >
          </ProtectedRoute>,"
} />""
        <Route path='/project-milestones' element={'
          <ProtectedRoute" >"
            <ProjectMilestones /" >
          </ProtectedRoute>,"
} />""
        <Route path='/project-details' element={'
          <ProtectedRoute" >"
            <ProjectDetails /" >
          </ProtectedRoute>,"
} />""
        <Route path='/project-room' element={'
          <ProtectedRoute" >"
=======
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
=======
<<<<<<< HEAD
import {Route, Routes    } from 'react-router-dom';
import {Lazy } from 'lucide-react';

export default function Page()   {import { Suspense, lazy } from 'react';
  import {ProtectedRoute } from '../components/ProtectedRoute';
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { Route, Routes    } from 'react-router-dom';""
=======
<<<<<<< HEAD
import { Route, Routes    } from 'react-router-dom';
export default function Page() {
  import { Suspense, lazy } from 'react';
  import { ProtectedRoute } from '../components/ProtectedRoute';
>>>>>>> main
import LoadingSpinner from '../components/LoadingSpinner';
=======
import { Route, Routes    } from 'react-router-dom
>>>>>>> main
import { Lazy } from 'lucide-react';
>>>>>>> main

<<<<<<< HEAD
export default function Page() {""
  import { Suspense, lazy } from 'react';""
  import { ProtectedRoute } from '../components/ProtectedRoute';""
=======
export default function Page() {"
  import { Suspense, lazy } from 'react
  import { ProtectedRoute } from '../components/ProtectedRoute
>>>>>>> main
import LoadingSpinner from '../components/LoadingSpinner';
// Lazy load dashboard pages;""
const Dashboard = lazy(() => import('../pages/Dashboard'));""
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));""
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));""
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));""
const Analytics = lazy(() => import('../pages/Analytics'));""
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));""
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));""
const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))
<<<<<<< HEAD
const DashboardRoutes: React.FC = () => {return (<Suspense fallback={<LoadingSpinner /" >}>
      <Routes>"
        <Route path='/dashboard' element={<ProtectedRoute" >
            <Dashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/client-dashboard' element={<ProtectedRoute" >
            <ClientDashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/talent-dashboard' element={<ProtectedRoute" >
            <TalentDashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/creator-dashboard' element={<ProtectedRoute" >
            <CreatorDashboard /" >
          </ProtectedRoute>,
} />"
        <Route path='/analytics' element={<ProtectedRoute" >
            <Analytics /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-milestones' element={<ProtectedRoute" >
            <ProjectMilestones /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-details' element={<ProtectedRoute" >
            <ProjectDetails /" >
          </ProtectedRoute>,
} />"
        <Route path='/project-room' element={<ProtectedRoute" >
>>>>>>> main
            <ProjectRoom /" >
          </ProtectedRoute>,
} />
=======
<<<<<<< HEAD
const DashboardRoutes: React.FC = () => {""
  return (<Suspense fallback={<LoadingSpinner /"" >}>""
      <Routes>""
        <Route path='/dashboard' element={""
          <ProtectedRoute"" >""
            <Dashboard /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/client-dashboard' element={""
          <ProtectedRoute"" >""
            <ClientDashboard /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/talent-dashboard' element={""
          <ProtectedRoute"" >""
            <TalentDashboard /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/creator-dashboard' element={""
          <ProtectedRoute"" >""
            <CreatorDashboard /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/analytics' element={""
          <ProtectedRoute"" >""
            <Analytics /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/project-milestones' element={""
          <ProtectedRoute"" >""
            <ProjectMilestones /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/project-details' element={""
          <ProtectedRoute"" >""
            <ProjectDetails /"" >
          </ProtectedRoute>, ","
} />""
        <Route path='/project-room' element={""
          <ProtectedRoute"" >""
=======
const DashboardRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /  >}>'
      <Routes>"
        <Route path='/dashboard' element={'
          <ProtectedRoute  >'
            <Dashboard /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/client-dashboard' element={'
          <ProtectedRoute  >'
            <ClientDashboard /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/talent-dashboard' element={'
          <ProtectedRoute  >'
            <TalentDashboard /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/creator-dashboard' element={'
          <ProtectedRoute  >'
            <CreatorDashboard /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/analytics' element={'
          <ProtectedRoute  >'
            <Analytics /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/project-milestones' element={'
          <ProtectedRoute  >'
            <ProjectMilestones /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/project-details' element={'
          <ProtectedRoute  >'
            <ProjectDetails /"" >
          </ProtectedRoute>,",
} />"
        <Route path='/project-room' element={'
          <ProtectedRoute  >'
>>>>>>> main
            <ProjectRoom /"" >
          </ProtectedRoute>, } />
>>>>>>> main
>>>>>>> main
      </Routes>
    <;</Suspense>
>>>>>>> main
  )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;"
=======
<<<<<<< HEAD
;
=======
;
<<<<<<< HEAD
""
}
=======
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
