<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
=======
import { Route, Routes } from 'react-router-dom';"
import { Suspense, lazy } from 'react';"
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
import LoadingSpinner from '../components/LoadingSpinner';
// Lazy load error pages
const NotFound = lazy(() => import('../pages/NotFound'));
const ErrorRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner /" >}>
      <Routes>"
        <Route path="/404" element={<NotFound /" >} />"
        <Route path="*" element={<NotFound /" >} />
      </Routes>
    </Suspense>
  );
};
export default ErrorRoutes;