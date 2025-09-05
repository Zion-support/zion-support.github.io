<<<<<<< HEAD
import React from 'react',
export const BrowserRouter = ({ children }: { children: any }) => children,
export const Routes = ({ children }: { children: any }) => children,
export const Route = ({ element }: { element: any }) => element,
export const Link = (props: any) => { return React.createElement('a', props) },
export const NavLink = Link,
export const Navigate = ({ to }: { to: string }) => null,
export const MemoryRouter = BrowserRouter,
export const Outlet = () => null,
export const useNavigate = () => (url: string) => {},
export const useLocation = () => ({ pathname: '/' }),
export const useParams = () => ({ }),
export const useSearchParams = () => [new URLSearchParams(), () => {}] as any,
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
  useSearchParams},
=======
import React from 'react';

export const _BrowserRouter = (_{_children}: {_children: unknown}) => children;
export const _Routes = (_{_children}: {_children: unknown}) => children;
export const _Route = (_{_element}: {_element: unknown}) => element;
export const _Link = (_props: unknown) => {_return React.createElement('a', _props);};
export const _NavLink = Link;
export const _Navigate = (_{_to}: {_to: string}) => null;
export const _MemoryRouter = BrowserRouter;
export const _Outlet = () => null;
export const _useNavigate = () => (_url: string) => {};
export const _useLocation = () => ({_pathname: '/'});
export const _useParams = () => ({});
export const _useSearchParams = () => [new URLSearchParams(), () => {}] as any;
export default {_BrowserRouter, _Routes, _Route, _Link, _NavLink, _Navigate, _MemoryRouter, _Outlet, _useNavigate, _useLocation, _useParams, _useSearchParams};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
