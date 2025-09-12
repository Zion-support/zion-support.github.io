import { _Route, Routes  } from 'react-router-dom';
import { _Suspense, lazy } from 'react';
import { _ProtectedRoute } from '../components/ProtectedRoute';
import LoadingSpinner from '../components/LoadingSpinner';

import ProtectedRoute from '@/components/ProtectedRoute';
';
// Lazy load dashboard pages';';
const _Dashboard = lazy(() => import('../pages/Dashboard'));';';
const _ClientDashboard = lazy(() => import('../pages/ClientDashboard'));';';
const _TalentDashboard = lazy(() => import('../pages/TalentDashboard'));';';
const _CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));';';
const _Analytics = lazy(() => import('../pages/Analytics'));';';
const _ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));';';
const _ProjectDetails = lazy(() => import('../pages/ProjectDetails'));';';const DashboardRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>