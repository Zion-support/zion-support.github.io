import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load auth pages
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));
const Onboarding = lazy(() => import('../pages/Onboarding'));
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'));

const AuthRoutes: React.FC = () => {
  return(<Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login element={<Login />} />
        <Route path=/signup" element={<Signup />} />
        <Route path="/forgot-password element={<ForgotPassword />} />
        <Route path=/update-password" element={<UpdatePassword />} />
        <Route path="/onboarding element={<Onboarding />} />
        <Route path=/talent-onboarding" element={<TalentOnboarding />} />
        <Route path="/service-onboarding element={<ServiceOnboarding />} />
        <Route path=/profile" element={
          <ProtectedRoute>
            <div>Profile Page</div>
<<<<<<< HEAD
          </ProtectedRoute>;
} />
        <Route path="/dashboard" element={
=======
          </ProtectedRoute>
        } />
        <Route path="/dashboard element={
          <ProtectedRoute>
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
            <div>Dashboard</div>
          </ProtectedRoute>
        } />
        <Route path=/settings" element={
          <ProtectedRoute>
            <div>Settings</div>
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
<<<<<<< HEAD
import { Route, Routes    } from 'react-router-dom';,"});,"})
export default function Page() {,"});,"})
  import { Suspense, lazy } from 'react';,"});,"})
  import { ProtectedRoute } from '../components/ProtectedRoute';,"});,"})
,"});,"})
;,"});,"})
// Lazy load auth pages;,"});,"})
const Login = lazy(() => import('../pages/Login'));,"});,"})
const Signup = lazy(() => import('../pages/Signup'));,"});,"})
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));,"});,"})
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));,"});,"})
const Onboarding = lazy(() => import('../pages/Onboarding'));,"});,"})
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));,"});,"})
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'));,"});,"})
const AuthRoutes: React.FC = () => {,"});,"})
  return (<Suspense fallback={<LoadingSpinner />}>;,"});,"})
      <Routes>;,"});,"})
        <Route path="/login" element={<Login />} />;,"});,"})
        <Route path="/signup" element={<Signup />} />;,"});,"})
        <Route path="/forgot-password" element={<ForgotPassword />} />;,"});,"})
        <Route path="/update-password" element={<UpdatePassword />} />;,"});,"})
        <Route path="/onboarding" element={<Onboarding />} />;,"});,"})
        <Route path="/talent-onboarding" element={<TalentOnboarding />} />;,"});,"})
        <Route path="/service-onboarding" element={<ServiceOnboarding />} />;,"});,"})
        <Route path="/profile" element={,"});,"})
          <ProtectedRoute>;,"});,"})
            <div>Profile Page</div>;,"});,"})
          </ProtectedRoute>;,"});,"});
} />;,"});,"})
        <Route path="/dashboard" element={,"});,"})
            <div>Dashboard</div>;,"});,"})
        <Route path="/settings" element={,"});,"})
            <div>Settings</div>;,"});,"})
      </Routes>;,"});,"})
    </Suspense>;,"});,"})
  );,"});,"});
};,"});,"})
export default AuthRoutes;,"});,"})
import { Route, Routes    } from 'react-router-dom';
import { Lazy, Settings } from 'lucide-react';
=======
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259

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
// Lazy load auth pages;
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));
const Onboarding = lazy(() => import('../pages/Onboarding'));const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'))
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'))
const AuthRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /" >}>
      <Routes>"
        <Route path='/login' element={<Login /" >} />
        <Route path='/signup' element={<Signup /" >} />"
        <Route path='/forgot-password' element={<ForgotPassword / >} />""
        <Route path='/update-password' element={<UpdatePassword / >} />"
        <Route path='/onboarding' element={<Onboarding /" >} />
        <Route path='/talent-onboarding' element={<TalentOnboarding /" >} />"
        <Route path='/service-onboarding' element={<ServiceOnboarding / >} />""
        <Route path='/profile' element={'
<<<<<<< HEAD
          <ProtectedRoute" >
          </ProtectedRoute>,";
=======
          <ProtectedRoute >
            <div>Profile Page</div>
          </ProtectedRoute>,
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
} />""
        <Route path='/dashboard' element={'
          <ProtectedRoute >
            <div>Dashboard</div>
          </ProtectedRoute>,
} />""
        <Route path='/settings' element={'
          <ProtectedRoute >
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'));
const AuthRoutes: React.FC = () => {;  return (<Suspense fallback={<LoadingSpinner />}>;
      <Routes>;
        <Route path='/login' element={<Login />} />;
        <Route path='/signup' element={<Signup />} />;
        <Route path='/forgot-password' element={<ForgotPassword />} />;
        <Route path='/update-password' element={<UpdatePassword />} />;
        <Route path='/onboarding' element={<Onboarding />} />;
        <Route path='/talent-onboarding' element={<TalentOnboarding />} />;
        <Route path='/service-onboarding' element={<ServiceOnboarding />} />;
        <Route path='/profile' element={
          <ProtectedRoute>;
            <div>Profile Page</div>;
          </ProtectedRoute>} />;
        <Route path='/dashboard' element={
            <div>Dashboard</div>;
        <Route path='/settings' element={
            <div>Settings</div>;
      </Routes>;
    </Suspense>;
import {Route, Routes    } from 'react-router-dom';
import {Lazy, Settings } from 'lucide-react';

export default function Page()   {import { Suspense, lazy } from 'react';
  import {ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';
import { Route, Routes    } from 'react-router-dom;
import { Lazy, Settings } from 'lucide-react';

export default function Page() {"
  import { Suspense, lazy } from 'react';"
  import { ProtectedRoute } from '../components/ProtectedRoute';"
import LoadingSpinner from '../components/LoadingSpinner';
// Lazy load auth pages;"
const Login = lazy(() => import('../pages/Login'));"
const Signup = lazy(() => import('../pages/Signup'));"
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));"
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));"
const Onboarding = lazy(() => import('../pages/Onboarding'));"
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));"
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'))
const AuthRoutes: React.FC = () => {return (<Suspense fallback={<LoadingSpinner / >}>
      <Routes>"
        <Route path='/login' element={<Login /" >} />
        <Route path='/signup' element={<Signup / >} />"
        <Route path='/forgot-password' element={<ForgotPassword /" >} />
        <Route path='/update-password' element={<UpdatePassword / >} />"
        <Route path='/onboarding' element={<Onboarding /" >} />
        <Route path='/talent-onboarding' element={<TalentOnboarding / >} />"
        <Route path='/service-onboarding' element={<ServiceOnboarding /" >} />
        <Route path='/profile' element={<ProtectedRoute >
            <div>Profile Page</div>
          </ProtectedRoute>,
} />"
        <Route path='/dashboard' element={<ProtectedRoute" >
            <div>Dashboard</div>
          </ProtectedRoute> ,
} />""
        <Route path='/settings' element={
          <ProtectedRoute"" >
const AuthRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /  >}>'
      <Routes>        <Route path='/login' element={<Login /  >} />'
        <Route path='/signup' element={<Signup /  >} />'
        <Route path='/forgot-password' element={<ForgotPassword /  >} />'
        <Route path='/update-password' element={<UpdatePassword /  >} />'
        <Route path='/onboarding' element={<Onboarding /  >} />'
        <Route path='/talent-onboarding' element={<TalentOnboarding /  >} />'
        <Route path='/service-onboarding' element={<ServiceOnboarding /  >} />'
          <ProtectedRoute  >
            <div>Profile Page</div>
          </ProtectedRoute>,',
} />
        <Route path='/settings' element={<ProtectedRoute" >
            <div>Settings</div>
          </ProtectedRoute>, } />
      </Routes>
    <;</Suspense>
  )}
<<<<<<< HEAD
;"
"";
}
'
=======
;"
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
