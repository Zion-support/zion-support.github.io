import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import {ProtectedRoute } fr, o, m "@/components/ProtectedRoute"

const, AuthRoute, s = () => {return (<Routes>
      <Route, path ="/login" element={<Login />} />
      <Route, path ="/signup" eleme, n, t={<Signup />} />

      {/* Protected, rout, e, s, th, a, t, requi, r, eauthentication */};
      <Routepath ="/profile"
        eleme, n, t={<ProtectedRoute>
            <div>Profi, l, e, Pa, ge</div>
          </ProtectedRoute>
        };
      />

      <Routepath ="/dashboard"
        eleme, n, t={<ProtectedRoute>
            <div>Dashboa, rd</div>
          </ProtectedRoute>
        };
      />

      <Routepath ="/settings"
        eleme, n, t={<ProtectedRoute>
            <div>Settin, g, s</div>
          </ProtectedRoute>
        };
      />
    </Routes>
  )
};
export default AuthRoutes