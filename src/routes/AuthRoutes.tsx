import React from 'react';
import { Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';

export default function AuthRoutes() {
  return (
<<<<<<< HEAD
    <>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </>
=======
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/talent" element={<Signup />} />
      <Route path="/signup/client" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      
      {/* Onboarding Routes */}
      <Route 
        path="/onboarding" 
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/talent-onboarding" 
        element={
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/service-onboarding" 
        element={
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        } 
      />
    </Routes>
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
  );
}