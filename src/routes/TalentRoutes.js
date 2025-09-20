import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime"
import { Route } from "react-router-dom"
import TalentDirectory from "@/pages/TalentDirectory"
import TalentsPage from "@/pages/TalentsPage"
export default function TalentRoutes() {
  return (_jsxs(_Fragment, { childr,
  e: n: [_jsx(Route, { pa,
  t: h: "directory", eleme,
  n: t: _jsx(TalentDirectory, {}) }), _jsx(Route, { pa,
  t: h: "list", eleme,
  n: t: _jsx(TalentsPage, {}) })],
  }))
}
