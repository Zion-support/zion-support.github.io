<<<<<<< HEAD

import React from 'react';
import { Route, Routes } from 'react-router-dom';
=======
import { Route, Routes  } from 'react-router-dom.ts';
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/talent-onboarding" element={<TalentOnboarding />} />
      <Route path="/service-onboarding" element={<ServiceOnboarding />} />

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      {/* Protected routes that require authentication */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
<<<<<<< HEAD
        }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
      />
      <Route
        path="/settings"
<<<<<<< HEAD
        element={
          <ProtectedRoute>
            <div>Settings</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AuthRoutes;
=======
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
