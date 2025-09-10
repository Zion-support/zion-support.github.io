import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';
';
// Lazy load dashboard pages';';
const Dashboard = lazy(() => import('../pages/Dashboard'));';';
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));';';
const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));';';
const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));';';
const Analytics = lazy(() => import('../pages/Analytics'));';';
const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));';';
const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));';';const DashboardRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>