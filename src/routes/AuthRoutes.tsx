
import { Route, Routes               } from 'react-router-dom.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import { ProtectedRoute } from '@/components/ProtectedRoute';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
const AuthRoutes = () => {
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
