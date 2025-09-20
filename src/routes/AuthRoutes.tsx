
import { Route, Routes } from "react-router-dom"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import { ProtectedRoute } from "@/components/ProtectedRoute"
const AuthRoutes = () => {;
  return (
    <Routes>;
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;

      {/* Protected routes that require authentication */};
      <Route;
        path="/profile"
        element={;
          <ProtectedRoute>;
            <div>Profile Page</[^>]*>
          </[^>]*>
        };
      />;

      <Route;
        path="/dashboard"
        element={;
          <ProtectedRoute>;
            <div>Dashboard</[^>]*>
          </[^>]*>
        };
      />;

      <Route;
        path="/settings"
        element={;
          <ProtectedRoute>;
            <div>Settings</[^>]*>
          </[^>]*>
        };
      />;
    </[^>]*>
  ),;
},;

export default AuthRoutes;