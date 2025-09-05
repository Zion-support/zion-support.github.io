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
