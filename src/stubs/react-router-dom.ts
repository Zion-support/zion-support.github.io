import React from 'react';

export const BrowserRouter = ({ children }: { children: any }) => children;
export const Routes = ({ children }: { children: any }) => children;
export const Route = ({ element }: { element: any }) => element;
export const Link = (props: any) => {
  return React.createElement('a', props);
};
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;
export const useNavigate = () => (url: string) => {};
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({});
export const useSearchParams = () => [new URLSearchParams(), () => {}] as any;
export default {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
};
=======
};
=======

<<<<<<< HEAD
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => null;
export const MemoryRouter = BrowserRouter;

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  BrowserRouter;
  Routes;
  Route;
  Link;
  NavLink;
  Navigate;
  MemoryRouter;
  Outlet;
  useNavigate;
  useLocation;
  useParams;
  useSearchParams};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
