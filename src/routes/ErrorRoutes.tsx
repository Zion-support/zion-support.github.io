<<<<<<< HEAD
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load error pages
const NotFound = lazy(() => import('../pages/NotFound'));

const ErrorRoutes: React.FC = () => {
  return(<Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default ErrorRoutes;
=======
import React from "react"
  );
export default function Errorroutes() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Errorroutes</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a placeholder component for errorroutes.
        </p>
      </div>
  )
}
>>>>>>> main
