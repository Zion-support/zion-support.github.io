import React from 'react';
// Next.js routing - no need for react-router-dom
import NotFound from '@/pages/NotFound';

import { Route, Routes  } from 'react-router-dom';
import NotFound from "@/pages/NotFound";

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};
;
export default ErrorRoutes;";