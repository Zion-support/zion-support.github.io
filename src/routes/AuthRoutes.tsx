
import { Route, Routes  } from 'react-router-dom.ts';
import Login from '@/src/src/pages/Login';
import Signup from '@/src/src/pages/Signup';
import ForgotPassword from '@/src/src/pages/ForgotPassword';
import UpdatePassword from '@/src/src/pages/UpdatePassword';
import { ProtectedRoute  } from '@/src/src/components/ProtectedRoute';
import Onboarding from '@/src/src/pages/Onboarding';
import TalentOnboarding from '@/src/src/pages/TalentOnboarding';
import ServiceOnboarding from '@/src/src/pages/ServiceOnboarding';

const AuthRoutes: React.FC = ($2) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes that require authentication */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>

      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>

      />

      <Route
        path="/settings"
        element={;
          <ProtectedRoute>;
            <div>Settings</div>;
          </ProtectedRoute>;
        };
      />;
    </Routes>;
  );
};

export default AuthRoutes;}}}