import React from 'react';
export const BrowserRouter = ({ children }: { children: any }) =>: any children;
export const Routes = ({ children }: { children: any }) =>: any children;
export const Route = ({ element }: { element: any }) =>: any element;
export const Link = (props: any) =>: any {
  return React.create_element ('a', props);
}
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) =>: any null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () =>: any null;
export const use_navigate = () =>: any (url: string) => {}
export const use_location = () =>: any ({ pathname: '/' });
export const use_params = () =>: any ({});
export const useSearchParams = () =>: any [new URLSearchParams (), () => {}] as any; export default {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  MemoryRouter,
  Outlet,
  use_navigate,
  use_location,
  use_params,
  useSearchParams,
}
  BrowserRouter;
  Routes;
  Route;
  Link;
  NavLink;
  Navigate;
  MemoryRouter;
  Outlet;
  use_navigate;
  use_location;
  use_params;
  useSearchParams}