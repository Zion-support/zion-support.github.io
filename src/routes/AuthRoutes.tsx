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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/talent-onboarding" element={<TalentOnboarding />} />
        <Route path="/service-onboarding" element={<ServiceOnboarding />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>;
} />
        <Route path="/dashboard" element={
            <div>Dashboard</div>
        <Route path="/settings" element={
            <div>Settings</div>
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';''// Lazy load auth pages'
const Login = lazy(() => import('../pages/Login'));'const Signup = lazy(() => import('../pages/Signup'));'const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));'const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));'const Onboarding = lazy(() => import('../pages/Onboarding'));'const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));'const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'));''const AuthRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}><Routes>
        <Route path="/login" element={<Login />} />"        <Route path="/signup" element={<Signup />} />"        <Route path="/forgot-password" element={<ForgotPassword />} />"        <Route path="/update-password" element={<UpdatePassword />} />"        <Route path="/onboarding" element={<Onboarding />} />"        <Route path="/talent-onboarding" element={<TalentOnboarding />} />"        <Route path="/service-onboarding" element={<ServiceOnboarding />} />"        <Route path="/profile" element={"          <ProtectedRoute>"            <div>Profile Page</div>"
        <Route path="/dashboard" element={"          <ProtectedRoute>"            <div>Dashboard</div>
        <Route path="/settings" element={"          <ProtectedRoute>"            <div>Settings</div></ProtectedRoute>
      </Routes>
    </Suspense>
  )};

export default AuthRoutes;
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

export default function Page() {'
export default function Page() {
;
// Lazy load auth pages;
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'))
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'))
const AuthRoutes: React.FC = () => {'
  return (<Suspense fallback={<LoadingSpinner /" >}>"
      <Routes>""
        <Route path='/login' element={<Login /" >} />""
        <Route path='/signup' element={<Signup /" >} />""
        <Route path='/forgot-password' element={<ForgotPassword /" >} />""
        <Route path='/update-password' element={<UpdatePassword /" >} />""
        <Route path='/onboarding' element={<Onboarding /" >} />""
        <Route path='/talent-onboarding' element={<TalentOnboarding /" >} />""
        <Route path='/service-onboarding' element={<ServiceOnboarding /" >} />""
        <Route path='/profile' element={'
          <ProtectedRoute" >
          </ProtectedRoute>,";
} />""
        <Route path='/dashboard' element={'
        <Route path='/settings' element={'
  return (<Suspense fallback={<LoadingSpinner />}>;
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
import { Route, Routes    } from &apos;react-router-dom';&apos;&apos;
export default function Page() {}
  import  { Suspense, lazy } from &apos;react';&apos;&apos;
  import  { ProtectedRoute } from &apos;../components/ProtectedRoute';&apos;&apos;
export default function Page()  {
import LoadingSpinner from &apos;../components/LoadingSpinner';

// Lazy load auth pages;&apos}&apos;
const Login = lazy(() => import(&apos;../pages/Login&apos;));&apos;
const Signup = lazy(() => import(&apos;../pages/Signup&apos;));&apos;
const ForgotPassword = lazy(() => import(&apos;../pages/ForgotPassword&apos;));&apos;
const UpdatePassword = lazy(() => import(&apos;../pages/UpdatePassword&apos;));&apos;
const Onboarding = lazy(() => import(&apos;../pages/Onboarding&apos;));&apos;
const TalentOnboarding = lazy(() => import(&apos;../pages/TalentOnboarding&apos;));&apos;
const ServiceOnboarding = lazy(() => import(&apos;../pages/ServiceOnboarding&apos;))&apos;
  return (}<Suspense fallback={}<LoadingSpinner />}>
        <;<Route path=&apos;/login&apos; element={&apos}<Login />} />
        <Route path=&apos;/signup&apos; element={&apos}<Signup />} />
        <Route path=&apos;/forgot-password&apos; element={&apos}<ForgotPassword />} />
        <Route path=&apos;/update-password&apos; element={&apos}<UpdatePassword />} />
        <Route path=&apos;/onboarding&apos; element={&apos}<Onboarding />} />
        <Route path=&apos;/talent-onboarding&apos; element={&apos}<TalentOnboarding />} />
        <Route path=&apos;/service-onboarding&apos; element={&apos}<ServiceOnboarding />} />
        <Route path=&apos;/profile&apos; element={&apos}
        <Route path=&apos;/dashboard&apos; element={&apos}
        <Route path=&apos;/settings&apos; element={&apos}
import { Route, Routes    } from 'react-router-dom';""
import { Route, Routes    } from 'react-router-dom

export default function Page() {""
  import { Suspense, lazy } from 'react';""
  import { ProtectedRoute } from '../components/ProtectedRoute';""
export default function Page() {"
  import { Suspense, lazy } from 'react
  import { ProtectedRoute } from '../components/ProtectedRoute
// Lazy load auth pages;""
const Login = lazy(() => import('../pages/Login'));""
const Signup = lazy(() => import('../pages/Signup'));""
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));""
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));""
const Onboarding = lazy(() => import('../pages/Onboarding'));""
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));""
const AuthRoutes: React.FC = () => {return (<Suspense fallback={<LoadingSpinner /" >}>
      <Routes>"
        <Route path='/login' element={<Login /" >} />"
        <Route path='/signup' element={<Signup /" >} />"
        <Route path='/forgot-password' element={<ForgotPassword /" >} />"
        <Route path='/update-password' element={<UpdatePassword /" >} />"
        <Route path='/onboarding' element={<Onboarding /" >} />"
        <Route path='/talent-onboarding' element={<TalentOnboarding /" >} />"
        <Route path='/service-onboarding' element={<ServiceOnboarding /" >} />"
        <Route path='/profile' element={<ProtectedRoute" >
          </ProtectedRoute>} />"
        <Route path='/dashboard' element={<ProtectedRoute" >
const AuthRoutes: React.FC = () => {""
  return (<Suspense fallback={<LoadingSpinner /"" >}>""
        <Route path='/login' element={<Login /"" >} />""
        <Route path='/signup' element={<Signup /"" >} />""
        <Route path='/forgot-password' element={<ForgotPassword /"" >} />""
        <Route path='/update-password' element={<UpdatePassword /"" >} />""
        <Route path='/onboarding' element={<Onboarding /"" >} />""
        <Route path='/talent-onboarding' element={<TalentOnboarding /"" >} />""
        <Route path='/service-onboarding' element={<ServiceOnboarding /"" >} />""
        <Route path='/profile' element={""
          <ProtectedRoute"" >
          </ProtectedRoute>, ","
        <Route path='/dashboard' element={""
        <Route path='/settings' element={""
  return (<Suspense fallback={<LoadingSpinner /  >}>'
        <Route path='/login' element={<Login /  >} />'
        <Route path='/signup' element={<Signup /  >} />'
        <Route path='/forgot-password' element={<ForgotPassword /  >} />'
        <Route path='/update-password' element={<UpdatePassword /  >} />'
        <Route path='/onboarding' element={<Onboarding /  >} />'
        <Route path='/talent-onboarding' element={<TalentOnboarding /  >} />'
        <Route path='/service-onboarding' element={<ServiceOnboarding /  >} />'
          <ProtectedRoute  >
          </ProtectedRoute>,'} />"
        <Route path='/settings' element={<ProtectedRoute" >
          </ProtectedRoute>} />
    <;</Suspense>
  )}
;"
"";
}
'
