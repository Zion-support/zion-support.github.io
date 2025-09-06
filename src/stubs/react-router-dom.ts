import React from 'react';
<<<<<<< HEAD
export const BrowserRouter = null;
=======
import React from 'react'
export const BrowserRouter = ({ children }: { children: any }) => children
export const Routes = ({ children }: { children: any }) => children
export const Route = ({ element }: { element: any }) => element
export const Link = (props: any) => {
  return React.createElement('a', props)
}
export const NavLink = Link
export const Navigate = ({ to }: { to: string }) => null
export const MemoryRouter = BrowserRouter
export const Outlet = () => null
export const useNavigate = () => (url: string) => {}
export const useLocation = () => ({ pathname: '/' })
export const useParams = () => ({})
export const useSearchParams = () => [new URLSearchParams(), () => {}] as any; export default {
  BrowserRouter
  Routes
  Route
  Link
  NavLink
  Navigate
  MemoryRouter
  Outlet
  useNavigate
  useLocation
  useParams
  useSearchParams
}
  BrowserRouter
  Routes
  Route
  Link
  NavLink
  Navigate
  MemoryRouter
  Outlet
  useNavigate
  useLocation
  useParams
  useSearchParams}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export const BrowserRouter = ({ children }: { children: any }) => children;
}

export const Routes = ({ children }: { children: any }) => children;
}

export const Route = ({ element }: { element: any }) => element;
}

export const Link = (props: any) => {
  return React.createElement('a', props);
};
}

export const NavLink = Link;
}

export const Navigate = ({ to }: { to: string }) => null;
}

export const MemoryRouter = BrowserRouter;
}

export const Outlet = () => null;
}

export const useNavigate = () => (url: string) => {};
}

export const useLocation = () => ({ pathname: '/' });
}

export const useParams = () => ({});
}

export const useSearchParams = () => [new URLSearchParams(), () => {}] as any;
}

export default {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  MemoryRouter,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
