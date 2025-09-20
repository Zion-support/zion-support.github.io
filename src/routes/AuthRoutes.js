import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs   } from "react/jsx-runtime";
import { Route   } from "react-router-dom";
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import ForgotPassword from "@/pages/ForgotPassword"
export default function AuthRoutes() {
  return (_jsxs(_Fragment, { childr,
  e: n: [_jsx(Route, { pa,
  t: h: "login", eleme,
  n: t: _jsx(Login, {}) }), _jsx(Route, { pa,
  t: h: "signup", eleme,
  n: t: _jsx(Signup, {}) }), _jsx(Route, { pa,
  t: h: "forgot-password", eleme,
  n: t: _jsx(ForgotPassword, {}) })],
  }))
}
