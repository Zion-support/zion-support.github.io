import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Enterprise-related routes
const EnterpriseRoutes = () => {
  return (
    <Routes>
      <Route path="/enterprise" element={<div>Enterprise Solutions</div>} />
      <Route path="/enterprise/contact" element={<div>Enterprise Contact</div>} />
      <Route path="/enterprise/demo" element={<div>Request Demo</div>} />
    </Routes>
  );
};

export default EnterpriseRoutes;