<<<<<<< HEAD

import { Route, Routes } from "react-router-dom"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import { ProtectedRoute } from "@/components/ProtectedRoute"

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
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <div>Settings</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AuthRoutes
=======
export function AuthRoutes() {
  return (
    <div>,
      <h1>Component</h1>,
      <p>Component placeholder</p>,
    </div>)}
,
>>>>>>> origin/main
