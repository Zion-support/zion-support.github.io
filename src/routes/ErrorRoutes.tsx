import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default ErrorRoutes;