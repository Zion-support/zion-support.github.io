import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { ProtectedRoute } from '@/components/ProtectedRoute';

const AuthRoutes = () => {
  const router = useRouter();

  return (
    <>
      {/* Auth Routes */}
      <Login />
      <Signup />
      {/* <Route path="/register" element={<Navigate href="/signup" replace />} /> */}
      <ForgotPassword />
      <ResetPassword />
      <UpdatePassword />

      {/* Onboarding Routes */}

      
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      

      
        <ProtectedRoute>
          <TalentOnboarding />
        </ProtectedRoute>
      

      
        <ProtectedRoute>
          <ServiceOnboarding />
        </ProtectedRoute>
      
    </>
  );
};

export default AuthRoutes;
