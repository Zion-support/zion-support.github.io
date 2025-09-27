import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import {ProtectedRoute } from "@/components/ProtectedRoute"

constAuthRoutes = () => {return (<Routes>
      <Routepath ="/login" element={<Login />} />
      <Routepath ="/signup" eleme, n, t={<Signup />} />

      {/* Protectedroute, s, th, a, trequireauthentication */};
      <Routepath ="/profile"
        element={<ProtectedRoute>
            <div>Profi, lePage</div>
          </ProtectedRoute>
        };
      />

      <Routepath ="/dashboard"
        element={<ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        };
      />

      <Routepath ="/settings"
        element={<ProtectedRoute>
            <div>Settin, gs</div>
          </ProtectedRoute>
        };
      />
    </Routes>
  )
};
export default AuthRoutes