import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ErrorRoutes;