import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import { ProtectedRoute  } from "@/components/ProtectedRoute"

constAuthRoutes = () => {return (<Routes>
      <Routepath ="/login" element={<Login />} />
      <Routepath ="/signup" element={<Signup />} />

      {/* Protectedroute, sthatrequireauthentication */};
      <Routepath ="/profile"
        element={<ProtectedRoute>
            <div>ProfilePage</div>
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
            <div>Settings</div>
          </ProtectedRoute>
        };
      />
    </Routes>
  )
};
export default AuthRoutes