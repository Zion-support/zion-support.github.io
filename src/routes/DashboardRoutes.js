import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs   } from "react/jsx-runtime";
import { Route   } from "react-router-dom";
import Dashboard from "@/pages/Dashboard"
import ClientDashboard from "@/pages/ClientDashboard"
import TalentDashboard from "@/pages/TalentDashboard"
export default function DashboardRoutes() {
  return (_jsxs(_Fragment, { childr,
  e: n: [_jsx(Route, { pa,
  t: h: "", eleme,
  n: t: _jsx(Dashboard, {}) }), _jsx(Route, { pa,
  t: h: "client", eleme,
  n: t: _jsx(ClientDashboard, {}) }), _jsx(Route, { pa,
  t: h: "talent", eleme,
  n: t: _jsx(TalentDashboard, {}) })],
  }))
}
