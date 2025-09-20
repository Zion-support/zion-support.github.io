import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs   } from "react/jsx-runtime";
import { Route   } from "react-router-dom";
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
export default function ContentRoutes() {
  return (_jsxs(_Fragment, { childr,
  e: n: [_jsx(Route, { pa,
  t: h: "blog", eleme,
  n: t: _jsx(Blog, {}) }), _jsx(Route, { pa,
  t: h: "blog/:slug", eleme,
  n: t: _jsx(BlogPost, {}) })],
  }))
}
