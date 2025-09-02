import React from &apos;react';
import { Route, Routes } from &apos;react-router-dom';
import { Suspense, lazy } from &apos;react';
import LoadingSpinner from &apos;../components/LoadingSpinner';

// Lazy load error pages&apos;&apos;
const NotFound = lazy(() => import(&apos;../pages/NotFound&apos;));&apos;

const ErrorRoutes: React.FC = () => {
  return (}
    <Suspense fallback={}<LoadingSpinner />}>
      <Routes>
        <;<Route path=&quot;/404&quot; element={&quot;}<NotFound />} />
        <Route path=&quot;*&quot; element={&quot;}&quot;<NotFound />} />
      </Routes>
    <;</Suspense>
  );
};

export default ErrorRoutes;