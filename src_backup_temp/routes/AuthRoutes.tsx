import { Route, Routes  } from 'react-router-dom',;',';';
    ;
import { Suspense, lazy } from 'react',;';';
    ;
import { ProtectedRoute } from '../components/ProtectedRoute',;',';';
    ;
import LoadingSpinner from '../components/LoadingSpinner',;';';
    ';';';
// Lazy load auth pages;
const Login = lazy(() => import('../pages/Login'));',';';
    ';';';
const Signup = lazy(() => import('../pages/Signup'));',';';
    ';';';
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));',';';
    ';';';
const UpdatePassword = lazy(() => import('../pages/UpdatePassword'));',';';
    ';';';
const Onboarding = lazy(() => import('../pages/Onboarding'));',';';
    ';';';
const TalentOnboarding = lazy(() => import('../pages/TalentOnboarding'));',';';
    ';';';
const ServiceOnboarding = lazy(() => import('../pages/ServiceOnboarding'));
const "AuthRoutes": "React.FC = () => {;
  return (<Suspense fallback={<LoadingSpinner  />"}>;
      <Routes>;
        <Route path="/login" element={<Login  />} />;
        <Route path="/signup" element={<Signup  />} />;
        <Route path="/forgot-password" element={<ForgotPassword  />} />;
        <Route path="/update-password" element={<UpdatePassword  />} />;
        <Route path="/onboarding" element={<Onboarding  />} />;
        <Route path="/talent-onboarding" element={<TalentOnboarding  />} />;
        <Route path="/service-onboarding" element={<ServiceOnboarding  />} />;
        <Route path="/profile" element={;
          <ProtectedRoute>;
            <div>Profile Page</div>;
          </ProtectedRoute>;
        } />;
        <Route path="/dashboard" element={;
          <ProtectedRoute>;
            <div>Dashboard</div>;
          </ProtectedRoute>;
        } />;
        <Route path="/settings" element={;
          <ProtectedRoute>;
            <div>Settings</div>;
          </ProtectedRoute>;
        } />;
      </Routes>;
    </Suspense>;
const AuthRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>
      <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/forgot-password" element={<ForgotPassword  />} />
        <Route path="/update-password" element={<UpdatePassword  />} />
        <Route path="/onboarding" element={<Onboarding  />} />
        <Route path="/talent-onboarding" element={<TalentOnboarding  />} />
        <Route path="/service-onboarding" element={<ServiceOnboarding  />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <div>Settings</div>
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  );
};
;
export default AuthRoutes;
</Route>';
</Route>;';;';
;
</Route>;
</Route>;
</Route>;
export default AuthRoutes;
</Route>
</Route>
</Route>