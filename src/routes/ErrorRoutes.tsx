import React from 'react';'
import { Route, Routes } from 'react-router-dom';''
import { Suspense, lazy } from 'react';''
import LoadingSpinner from '../components/LoadingSpinner';'
// Lazy load error pages''
const NotFound = lazy(() => import('../pages/NotFound'));
const ErrorRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner /></Suspense>}>
      <Routes></Routes>
        <Route path="/404" element={<NotFound /></Route>} />""
        <Route path="*" element={<NotFound /></Route>} />
      </Routes>
    </Suspense>;
  );
};'"
export default ErrorRoutes;'"'"