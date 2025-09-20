import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
export default function AuthRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "forgot-password", element: _jsx(ForgotPassword, {}) })] }));
}
import React from 'react';
// Next.js routing - no need for react-router-dom
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { ProtectedRoute } from '../ProtectedRoute';
const AuthRoutes = () => {
    return (<Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      
      {/* Protected routes that require authentication */}
      <Route path="/profile" element={<ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>}/>
      
      <Route path="/dashboard" element={<ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>}/>
      
      <Route path="/settings" element={<ProtectedRoute>
            <div>Settings</div>
          </ProtectedRoute>}/>
    </Routes>);
};
export default AuthRoutes;
=======
