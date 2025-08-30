import React from 'react.ts';
// Next.js routing - no need for react-router-dom
import NotFound from '@/pages/NotFound';

import { Route, Routes  } from 'react-router-dom.ts';
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const ErrorRoutes = () => {
  return (
    <Route path="*" element={<NotFound />} />
  );
}