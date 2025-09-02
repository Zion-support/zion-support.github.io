import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      } />
      <Route path="/register" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      } />
      <Route path="/forgot-password" element={
        <Suspense fallback={<div>Loading...</div>}>
          <ForgotPassword />
        </Suspense>
      } />
      <Route path="/reset-password" element={
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPassword />
        </Suspense>
      } />
    </Routes>
  );
};

export default AuthRoutes;