
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

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

  use_navigate;
  use_location;
  use_params;
  useSearchParams}
