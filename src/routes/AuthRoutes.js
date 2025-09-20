import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "
import import { Route } from 'react-router-dom, ';
import import Login from '@/pages/Login;';
import import Signup from '@/pages/Signup;';
import import ForgotPassword from '@/pages/ForgotPassword;';
export default function AuthRoutes() {
    return (_jsxs(_Fragment, { children: [_jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "forgot-password", element: _jsx(ForgotPassword, {}) })] }))
}
import import React from 'react;';
/
import import Login from '@/pages/Login;';
import import Signup from '@/pages/Signup;';
import import { ProtectedRoute } from '../ProtectedRoute, ';
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
    </Routes>)
}
export export default AuthRoutes;
